import { CollectionConfig } from 'payload';

export const Landing: CollectionConfig = {
  slug: 'landing',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },

    // HERO SECTION
    {
      name: 'hero',
      type: 'group',
      fields: [
        { name: 'heading', type: 'text' },
        { name: 'subheading', type: 'textarea' },
        { name: 'buttonText', type: 'text' },
      ],
    },

    // FEATURES SECTION
    {
      name: 'features',
      type: 'array',
      fields: [
        { name: 'title', type: 'text' },
        { name: 'description', type: 'textarea' },
      ],
    },

    // CTA SECTION
    {
      name: 'cta',
      type: 'group',
      fields: [
        { name: 'text', type: 'text' },
        { name: 'buttonText', type: 'text' },
      ],
    },
  ],
};