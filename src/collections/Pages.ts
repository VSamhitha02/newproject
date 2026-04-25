import { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Navbar } from '../blocks/Navbar'

export const Pages: CollectionConfig = {
  slug: 'pages',

  admin: {
    useAsTitle: 'title',
  },

  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
    },
    {
      name: 'layout',
      type: 'blocks',
      blocks: [Hero, Navbar],
    },
  ],
}