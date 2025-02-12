export default {
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Company Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'logo1',
      title: 'Logo 1',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo2',
      title: 'Logo 2',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo3',
      title: 'Logo 3',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo4',
      title: 'Logo 4',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo5',
      title: 'Logo 5',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'logo6',
      title: 'Logo 6',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'about',
      title: 'About',
      type: 'array',
      of: [{type: 'block'}],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    },
  ],
}
