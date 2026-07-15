import { defineField, defineType } from 'sanity';

export const authorType = defineType({
  name: 'author',
  title: 'Autor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nombre',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Cargo / Especialidad',
      type: 'string',
      initialValue: 'Especialista en Estética',
    }),
    defineField({
      name: 'featured',
      title: 'Autor Destacado (Director)',
      type: 'boolean',
      initialValue: false,
      description: 'Si se marca, este autor aparecerá en la sección de liderazgo de la página principal.',
    }),
    defineField({
      name: 'image',
      title: 'Foto',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'linkedin',
      title: 'LinkedIn',
      type: 'url',
    }),
    defineField({
      name: 'titles',
      title: 'Títulos',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'medicalCode',
      title: 'Código Médico',
      type: 'string',
    }),
    defineField({
      name: 'shortBio',
      title: 'Resumen Corto',
      type: 'text',
      rows: 3,
      description: 'Una descripción breve para tarjetas y previsualizaciones.',
    }),
    defineField({
      name: 'bio',
      title: 'Biografía Completa',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'role',
      media: 'image',
      featured: 'featured',
    },
    prepare(selection) {
      const { title, subtitle, featured } = selection;
      return {
        ...selection,
        title: `${title}${featured ? ' ⭐' : ''}`,
        subtitle: subtitle || 'Sin cargo asignado',
      };
    },
  },
});
