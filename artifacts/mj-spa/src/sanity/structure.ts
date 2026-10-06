import { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // Simplified list using standard documentTypeListItem to guarantee "New" button visibility
      S.documentTypeListItem('post').title('Publicaciones (Blog)'),

      S.divider(),

      // Better organized view: Group posts by language
      S.listItem()
        .title('Publicaciones por Idioma')
        .child(
          S.list()
            .title('Idiomas')
            .items([
              S.listItem()
                .title('Español')
                .child(
                  S.documentTypeList('post')
                    .title('Posts en Español')
                    .filter('_type == "post" && language == "es"')
                ),
              S.listItem()
                .title('Inglés')
                .child(
                  S.documentTypeList('post')
                    .title('Posts en Inglés')
                    .filter('_type == "post" && language == "en"')
                ),
            ])
        ),

      S.divider(),

      S.documentTypeListItem('author').title('Autores'),
      S.documentTypeListItem('category').title('Categorías'),
    ]);
