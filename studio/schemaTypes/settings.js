// export default {
//   name: 'settings',
//   title: 'Settings',
//   type: 'document',
//   fields: [
//     {
//       name: 'name',
//       title: 'Company Name',
//       type: 'string',
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'about',
//       title: 'About',
//       type: 'array',
//       of: [{type: 'block'}],
//       validation: (Rule) => Rule.required(),
//     },
//     {
//       name: 'instagram',
//       title: 'Instagram',
//       type: 'url',
//     },
//     {
//       name: 'email',
//       title: 'Email',
//       type: 'string',
//       validation: (Rule) => Rule.required().email(),
//     },
//   ],
// }

const createLogoField = (number) => ({
  name: `logo${number}`,
  title: `Logo ${number}`,
  type: 'image',
  description: number === 1 
    ? 'Primary logo - Used in header - black version'
    : number === 2
    ? 'Primary logo - white version'
    : number === 3
    ? 'Full Logo (small) - Compact version optimized for mobile devices and small spaces'
    : number === 4
    ? 'Full logo (large) - Used as button on landing page'
    : number === 5
    ? 'Wordmark logo balck - Used on about page'
    : number === 6
    ? 'Wordmark logo white - Used in footer'
    : 'Additional logo - For special campaigns or alternative branding needs',
  options: {
    hotspot: true,
  },
});

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
    createLogoField(1),
    createLogoField(2),
    createLogoField(3),
    createLogoField(4),
    createLogoField(5),
    createLogoField(6),
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
