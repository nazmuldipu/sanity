import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
      title: 'Name',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      title: 'Names',
      name: 'names',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              title: 'Name',
              name: 'name',
              type: 'string',
            }),
            defineField({
              title: 'Href',
              name: 'href',
              type: 'string',
            }),
            defineField({
              title: 'HasSubmenu',
              name: 'isSubMenu',
              type: 'boolean',
              initialValue: false,
            }),
            defineField({
              title: 'Names',
              name: 'names',
              type: 'array',
              hidden: ({parent}) => !parent?.isSubMenu,
              of: [
                {
                  type: 'object',
                  fields: [
                    defineField({
                      title: 'Name',
                      name: 'name',
                      type: 'string',
                    }),
                    defineField({
                      title: 'Href',
                      name: 'href',
                      type: 'string',
                    }),
                    defineField({
                      title: 'NewTab',
                      name: 'newTab',
                      type: 'boolean',
                      initialValue: false,
                    }),
                  ],
                },
              ],
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'contact',
      title: 'Contact',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
