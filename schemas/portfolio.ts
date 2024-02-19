import {SlugSourceFn, SlugifierFn} from 'sanity'

const slugify = (source: string) => source.toLowerCase().replace(/\s+/g, `-`)

const handleSlugify: SlugifierFn = (source: string, schemaType: any, context: any) => {
  return `/` + source.trim().split(`/`).map(slugify).join(`/`)
}

const getExperienceSlugSource: SlugSourceFn = (doc, context): string => {
  const {company, designation} = context.parent

  return String(
    company.replace(/[,() ]+/g, ' ').trim() + `/` + designation.replace(/[,() ]+/g, ' ').trim()
  )
}

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
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
}

export const education = {
  name: 'education',
  title: 'Education',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Degree',
          name: 'degree',
          type: 'string',
        },
        {
          title: 'Academy',
          name: 'academy',
          type: 'string',
        },
        {
          title: 'Start',
          name: 'starts',
          type: 'string',
        },
        {
          title: 'End',
          name: 'ends',
          type: 'string',
        },
        {
          title: 'Major',
          name: 'major',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
  ],
}

export const skills = {
  name: 'skills',
  title: 'Skills',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Level',
          name: 'level',
          type: 'string',
        },
        {
          title: 'Skill',
          name: 'skill',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
  ],
}

export const projects = {
  name: 'projects',
  title: 'Projects',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Project name',
          name: 'projectName',
          type: 'string',
        },
        {
          title: 'Description',
          name: 'description',
          type: 'string',
        },
        {
          title: 'Skills',
          name: 'skills',
          type: 'string',
        },
        {
          title: 'Start',
          name: 'start',
          type: 'string',
        },
        {
          title: 'End',
          name: 'end',
          type: 'string',
        },
        {
          title: 'Link',
          name: 'link',
          type: 'string',
        },
        {
          title: 'Image',
          name: 'image',
          type: 'image',
        },
      ],
    },
  ],
}

export const about = {
  name: 'about',
  type: 'document',
  title: 'About',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'subtitle',
      type: 'string',
      title: 'Subtitle',
    },
    {
      title: 'Details',
      name: 'details',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              title: 'Title',
              name: 'title',
              type: 'string',
            },
            {
              title: 'Value',
              name: 'value',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}

export const experience = {
  name: 'experience',
  title: 'Experience',
  type: 'array',
  of: [
    {
      type: 'object',
      fields: [
        {
          title: 'Company',
          name: 'company',
          type: 'string',
        },
        {
          title: 'Designation',
          name: 'designation',
          type: 'string',
        },
        {
          title: 'Slug',
          name: 'slug',
          type: 'slug',
          options: {
            source: getExperienceSlugSource,
            slugify: handleSlugify,
          },
        },
        {
          title: 'Start',
          name: 'starts',
          type: 'string',
        },
        {
          title: 'End',
          name: 'ends',
          type: 'string',
        },
        {
          title: 'Technologies',
          name: 'technologies',
          type: 'technology',
        },
        {
          title: 'Roles',
          name: 'roles',
          type: 'array',
          of: [{type: 'block'}],
        },
      ],
    },
  ],
}
