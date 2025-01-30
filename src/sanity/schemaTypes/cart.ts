import { Rule } from '@sanity/types'; 

export default {
  name: 'cart',
  type: 'document',
  title: 'Cart',
  fields: [
    {
      name: 'productId',
      type: 'string',
      title: 'Product ID',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'name',
      type: 'string',
      title: 'Product Name',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'price',
      type: 'number',
      title: 'Price',
      validation: (Rule: Rule) => Rule.required().min(0),
    },
    {
      name: 'image',
      type: 'image',
      title: 'Product Image',
      options: {
        hotspot: true,
      },
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'quantity',
      type: 'number',
      title: 'Quantity',
      validation: (Rule: Rule) => Rule.required().min(1),
    },
  ],
};
