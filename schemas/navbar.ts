import {defineField} from 'sanity'

export default {
  name: 'navbar',
  title: 'Navbar',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Url',
      type: 'string',
    }),
    defineField({
      title: 'Socials',
      name: 'socials',
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
              title: 'Icon',
              name: 'icon',
              type: 'string',
            }),
            defineField({
              title: 'Href',
              name: 'href',
              type: 'string',
            }),
          ],
        },
      ],
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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
