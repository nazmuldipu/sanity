export const portfolio = {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      title: 'Name',
      name: 'name',
      type: 'string',
    },
    {
      title: 'Headline',
      name: 'headline',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Tagline',
      name: 'tagline',
      type: 'string',
      description: 'Short hero line (≤ ~90 chars).',
    },
    {
      title: 'Highlight Phrase',
      name: 'highlightPhrase',
      type: 'string',
      description: 'The exact substring of the headline/tagline to highlight.',
    },
    {
      title: 'Current Position',
      name: 'currentPosition',
      type: 'string',
    },
    {
      title: 'Last Education',
      name: 'lastEducation',
      type: 'string',
    },
    {
      title: 'Location',
      name: 'location',
      type: 'object',
      fields: [
        {
          title: 'Country/Region',
          name: 'country',
          type: 'string',
        },
        {
          title: 'City',
          name: 'city',
          type: 'string',
        },
      ],
    },
    {
      title: 'Title',
      name: 'title',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Experience',
      name: 'experience',
      type: 'experience',
    },
    {
      title: 'Education',
      name: 'education',
      type: 'education',
    },
    {
      title: 'Navbar',
      name: 'navbar',
      type: 'navbar',
    },
    {
      title: 'About',
      name: 'about',
      type: 'about',
    },

    {
      title: 'Skills',
      name: 'skills',
      type: 'skills',
    },
    {
      title: 'Projects',
      name: 'projects',
      type: 'projects',
    },
    {
      title: 'Contact Headline',
      name: 'contactHeadline',
      type: 'string',
      description: 'Contact section CTA (was hard-coded in the front-end page).',
    },
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}
