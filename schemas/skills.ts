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
