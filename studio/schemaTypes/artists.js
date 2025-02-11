export default {
  name: 'artist',
  title: 'Artist',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
    },
    {
      name: 'spotify',
      title: 'Spotify',
      type: 'url',
    },
    // Add more fields as needed, for example social media links or genres
  ],
}
