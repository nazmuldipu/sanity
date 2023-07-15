import {defineField, defineType} from 'sanity'

export default {
  name: 'navbar',
  title: 'Navbar',
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
      name: 'phone',
      title: 'Phone',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'linkedin',
      title: 'Linkedin',
      type: 'string',
    }),
    defineField({
      name: 'github',
      title: 'Github',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
