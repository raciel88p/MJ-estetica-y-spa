import { defineField, defineType } from 'sanity';

export const postType = defineType({
  name: 'post',
  title: 'Publicación',
  type: 'document',
  fieldsets: [
    {
      name: 'socialSharing',
      title: '📣 Autopublicación en Redes Sociales',
      options: { collapsible: true, collapsed: false },
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'language',
      title: 'Idioma',
      type: 'string',
      options: {
        list: [
          { title: 'Español', value: 'es' },
          { title: 'Inglés', value: 'en' },
        ],
      },
      initialValue: 'es',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'author',
      title: 'Autor',
      type: 'reference',
      to: { type: 'author' },
    }),
    defineField({
      name: 'mainImage',
      title: 'Imagen principal',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'categories',
      title: 'Categorías',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'category' } }],
    }),
    defineField({
      name: 'publishedAt',
      title: 'Fecha de publicación',
      type: 'datetime',
    }),
    defineField({
      name: 'body',
      title: 'Contenido',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: { hotspot: true },
        },
      ],
    }),
    defineField({
      name: 'socialCaption',
      title: 'Descripción personalizada para Redes',
      description: 'Si se deja vacío, se usará una parte del contenido o el título para la publicación.',
      type: 'text',
      rows: 3,
      fieldset: 'socialSharing',
    }),
    defineField({
      name: 'publishToLinkedIn',
      title: 'Publicar en LinkedIn',
      description: 'Activar para publicar automáticamente en LinkedIn al publicar esta entrada.',
      type: 'boolean',
      initialValue: false,
      fieldset: 'socialSharing',
    }),
    defineField({
      name: 'publishToFacebook',
      title: 'Publicar en Facebook',
      description: 'Activar para publicar automáticamente en Facebook al publicar esta entrada.',
      type: 'boolean',
      initialValue: false,
      fieldset: 'socialSharing',
    }),
    defineField({
      name: 'publishToInstagram',
      title: 'Publicar en Instagram',
      description: 'Activar para publicar automáticamente en Instagram (requiere imagen principal) al publicar esta entrada.',
      type: 'boolean',
      initialValue: false,
      fieldset: 'socialSharing',
    }),
    defineField({
      name: 'publishToX',
      title: 'Publicar en X (Twitter)',
      description: 'Activar para publicar automáticamente en X al publicar esta entrada.',
      type: 'boolean',
      initialValue: false,
      fieldset: 'socialSharing',
    }),
  ],

  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      language: 'language',
    },
    prepare(selection) {
      const { author, language } = selection;
      const langLabel = language === 'es' ? '🇪🇸 ES' : '🇺🇸 EN';
      return {
        ...selection,
        subtitle: `${langLabel}${author ? ` | por ${author}` : ''}`
      };
    },
  },
});
