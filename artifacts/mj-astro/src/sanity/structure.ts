import { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // Top-level Posts with language filtering
      S.listItem()
        .title('Publicaciones (Blog)')
        .schemaType('post')
        .child(
          S.list()
            .title('Filtros de Publicaciones')
            .items([
              S.listItem()
                .title('🇪🇸 Publicaciones en Español')
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .title('Posts en Español')
                    .filter('_type == "post" && language == "es"')
                ),
              S.listItem()
                .title('🇺🇸 Publicaciones en Inglés')
                .schemaType('post')
                .child(
                  S.documentTypeList('post')
                    .title('Posts en Inglés')
                    .filter('_type == "post" && language == "en"')
                ),
              S.divider(),
              S.listItem()
                .title('Todas las Publicaciones')
                .schemaType('post')
                .child(S.documentTypeList('post').title('Todas las Publicaciones')),
            ])
        ),

      S.divider(),

      // Top-level Authors
      S.listItem()
        .title('Autores')
        .schemaType('author')
        .child(S.documentTypeList('author').title('Autores')),

      // Top-level Categories
      S.listItem()
        .title('Categorías')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categorías')),
    ]);
