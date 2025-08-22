import type { Block } from 'payload'

export const Testimonial: Block = {
  slug: 'testimonial',
  interfaceName: 'TestimonialBlock',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      required: true,
      localized: true,
    },
    {
      name: 'authorName',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'authorTitle',
      type: 'text',
      localized: true,
    },
    {
      name: 'authorAvatar',
      type: 'upload',
      relationTo: 'media',
    },
  ],
  labels: {
    plural: 'Testimonials',
    singular: 'Testimonial',
  },
}


