import { StructureResolver } from 'sanity/structure';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      // Simplified list using standard documentTypeListItem to guarantee "New" button visibility
      S.documentTypeListItem('post').title('Publicaciones (Blog)'),
      S.documentTypeListItem('author').title('Autores'),
      S.documentTypeListItem('category').title('Categorías'),

      S.divider(),

      // Keep the language filter as an EXTRA view, not the only one
      S.listItem()
        .title('Filtrar Posts por Idioma')
        .child(
          S.list()
            .title('Filtros')
            .items([
              S.listItem()
                .title('Español')
                .child(
                  S.documentList()
                    .title('Posts en Español')
                    .filter('_type == "post" && language == "es"')
                ),
              S.listItem()
                .title('Inglés')
                .child(
                  S.documentList()
                    .title('Posts en Inglés')
                    .filter('_type == "post" && language == "en"')
                ),
            ])
        ),
    ]);
