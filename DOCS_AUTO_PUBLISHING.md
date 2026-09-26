# Guía de Autopublicación en Redes Sociales con Sanity CMS

Esta guía explica detalladamente cómo configurar la integración entre **Sanity CMS** y las redes sociales de su elección (LinkedIn, Facebook, Instagram, X/Twitter), para que cuando se publique un post en el CMS, este se difunda de manera automática en los canales marcados.

---

## 1. Funcionamiento General

El sistema se basa en un flujo de eventos en tiempo real:

```
[Sanity Studio] (Publicar Entrada)
       │
       ▼
[Sanity Webhooks] (Dispara petición HTTP POST con el contenido)
       │
       ▼
[Plataforma de Automatización (Make / Zapier)] (Filtra y procesa)
       │
       ├──► [LinkedIn] (Crea publicación)
       ├──► [Facebook] (Crea publicación en página)
       ├──► [Instagram] (Publica foto con pie de página)
       └──► [X / Twitter] (Crea Tweet)
```

Para hacerlo extremadamente flexible y fácil de administrar sin tener que programar integraciones complejas para cada red (lo cual requeriría lidiar con constantes cambios de API, tokens de acceso caducados y protocolos OAuth), recomendamos utilizar **Make.com** (anteriormente Integromat) o **Zapier**. Ambas plataformas disponen de conectores listos para usar y son muy económicas o gratuitas para volúmenes moderados.

---

## 2. Configuración en Sanity CMS (Campos de Control)

Hemos actualizado el esquema de entradas (`postType`) en Sanity Studio para incluir un grupo dedicado de campos bajo la sección **📣 Autopublicación en Redes Sociales**.

Al crear o editar una publicación, verá los siguientes campos:

1. **Descripción personalizada para Redes (`socialCaption`)**: Texto que servirá como pie de foto o cuerpo de la publicación en redes. Si se deja vacío, la automatización puede extraer el título o los primeros 150 caracteres del contenido.
2. **Publicar en LinkedIn (`publishToLinkedIn`)**: Checkbox (`sí/no`).
3. **Publicar en Facebook (`publishToFacebook`)**: Checkbox (`sí/no`).
4. **Publicar en Instagram (`publishToInstagram`)**: Checkbox (`sí/no`). *Nota: Instagram requiere obligatoriamente una imagen principal.*
5. **Publicar en X (Twitter) (`publishToX`)**: Checkbox (`sí/no`).

---

## 3. Configuración del Webhook en Sanity Manage

Para que Sanity avise al sistema de automatización cuando una entrada se publique, siga estos pasos:

1. Diríjase a su consola de administración de Sanity: [https://www.sanity.io/manage](https://www.sanity.io/manage).
2. Seleccione su proyecto (ID: `c7ltnbh1`).
3. Vaya a la pestaña **API** y desplácese hasta la sección **Webhooks**.
4. Haga clic en **Create webhook** (Crear webhook).
5. Configure los siguientes valores:
   - **Name**: `Autopublicación en Redes Sociales`
   - **URL**: *(La URL del webhook que le proporcionará Make.com o Zapier)*.
   - **Dataset**: `production` (o el dataset que esté utilizando).
   - **Trigger on**: Seleccione **"Create"** y **"Update"**.
   - **Filter**: Defina la siguiente regla para filtrar solo cuando una publicación de tipo `post` se publique y no sea un borrador:
     ```groq
     _type == "post" && !(_id in path("drafts.**"))
     ```
   - **Projection**: Esta consulta determina qué datos enviará Sanity a la automatización. Use la siguiente estructura optimizada para extraer el título, slug, imagen, idioma y las opciones de publicación en redes:
     ```groq
     {
       _id,
       "title": title,
       "slug": slug.current,
       "language": language,
       "imageUrl": mainImage.asset->url,
       "socialCaption": socialCaption,
       "publishToLinkedIn": publishToLinkedIn,
       "publishToFacebook": publishToFacebook,
       "publishToInstagram": publishToInstagram,
       "publishToX": publishToX
     }
     ```
   - **HTTP Method**: `POST`
6. Guarde el Webhook.

---

## 4. Configuración del Flujo en Make.com (Recomendado)

**Make.com** es la opción ideal por su flexibilidad visual y su bajo costo. A continuación se detalla cómo estructurar el "Escenario" en Make:

### Paso 4.1: Crear el Webhook de Entrada
1. Cree un nuevo Escenario en Make.
2. Añada el módulo **Custom Webhook** (Webhook personalizado) como el disparador (Trigger).
3. Copie la dirección URL autogenerada por Make y colóquela en la configuración del Webhook de Sanity (Paso 3).
4. Haga clic en **"Redetect headers"** y publique un post de prueba en Sanity para que Make detecte la estructura del JSON enviado.

### Paso 4.2: Crear los Enrutadores (Routers)
Añada un módulo **Router** a continuación del Webhook para bifurcar el flujo según las redes seleccionadas:

#### Ruta 1: LinkedIn
- **Filtro**: `publishToLinkedIn` es igual a `true`.
- **Acción**: Conector **LinkedIn** -> *Create a Share* o *Create an Organization Share*.
- **Contenido**:
  - Mensaje: Utilizar `socialCaption` (o `title` si viene vacío).
  - URL de enlace: `https://[su-dominio]/blog/{{slug}}` (o con prefijo `/en/blog/{{slug}}` si el idioma es `en`).
  - Imagen: `imageUrl`.

#### Ruta 2: Facebook
- **Filtro**: `publishToFacebook` es igual a `true`.
- **Acción**: Conector **Facebook Pages** -> *Create a Post* o *Create a Photo Post*.
- **Contenido**:
  - Mensaje: `socialCaption` (o `title`).
  - Enlace / Foto: Adjuntar enlace del post o la `imageUrl`.

#### Ruta 3: Instagram
- **Filtro**: `publishToInstagram` es igual a `true` **Y** `imageUrl` existe.
- **Acción**: Conector **Instagram for Business** -> *Publish a Photo*.
- **Contenido**:
  - URL de la foto: `imageUrl`.
  - Pie de foto (Caption): `socialCaption`.

#### Ruta 4: X (Twitter)
- **Filtro**: `publishToX` es igual a `true`.
- **Acción**: Conector **Twitter (X)** -> *Create a Tweet*.
- **Contenido**:
  - Texto: `socialCaption` (asegurarse de que sea menor a 280 caracteres). Puede añadir el enlace al blog.

---

## 5. Consideraciones Importantes y Buenas Prácticas

1. **Evitar Publicaciones Duplicadas en Ediciones**:
   Dado que el webhook de Sanity se dispara cada vez que se guarda un cambio en un documento publicado, para evitar autopublicar el mismo post múltiples veces en redes al hacer correcciones de ortografía:
   - **Opción A**: Diseñe el flujo en Make/Zapier para verificar en una pequeña base de datos interna (o un archivo de control) si el ID de la publicación ya fue compartido anteriormente.
   - **Opción B**: En Sanity, desmarque los checkboxes de las redes sociales tras la primera publicación, o controle un estado `sharedToSocial` de manera interna.
2. **Límites de Caracteres**:
   - LinkedIn: Hasta 3000 caracteres.
   - Facebook: Prácticamente ilimitado.
   - X (Twitter): 280 caracteres para cuentas gratuitas. Configure su flujo en Make para recortar el texto si supera los 280 caracteres (`substring(socialCaption; 0; 277) + "..."`) o use un campo más corto.
3. **Formatos de Imagen**:
   Asegúrese de subir imágenes de alta resolución en el campo "Imagen principal" de Sanity, ya que Instagram y Facebook rechazarán publicaciones automáticas con enlaces de imágenes rotos o formatos no compatibles (se recomiendan formatos `.jpg` o `.png`).
