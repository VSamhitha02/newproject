import { Block } from 'payload'

export const Navbar: Block = {
  slug: 'navbar',
  fields: [
    {
      name: 'logoText',
      type: 'text',
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        {
          name: 'label',
          type: 'text',
        },
        {
          name: 'url',
          type: 'text',
        },
      ],
    },
  ],
}