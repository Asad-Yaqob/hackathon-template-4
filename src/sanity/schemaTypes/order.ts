import { Rule } from "@sanity/types";

export default {
  name: 'orders',
  type: 'document',
  title: 'Orders',
  fields: [
    {
      name: 'user',
      type: 'reference',
      to: [{ type: 'user' }],
      title: 'User',
      validation: (Rule:Rule) => Rule.required()
    },
    {
      name: 'items',
      type: 'array',
      title: 'Items',
      of: [{ type: 'object', fields: [
        { name: 'productId', type: 'string', title: 'Product ID', validation: (Rule:Rule) => Rule.required() },
        { name: 'name', type: 'string', title: 'Product Name', validation: (Rule:Rule) => Rule.required() },
        { name: 'price', type: 'number', title: 'Price', validation: (Rule:Rule) => Rule.required().min(0) },
        { name: 'quantity', type: 'number', title: 'Quantity', validation: (Rule:Rule) => Rule.required().min(1) }
      ]}]
    },
    {
      name: 'address',
      type: 'string',
      title: 'Address',
      validation: (Rule:Rule) => Rule.required()
    },
    {
      name: 'appartment',
      type: 'string',
      title: 'Appartment'
    },
    {
      name: 'city',
      type: 'string',
      title: 'City',
      validation: (Rule:Rule) => Rule.required()
    },
    {
      name: 'postalCode',
      type: 'string',
      title: 'Postal Code',
      validation: (Rule:Rule) => Rule.required()
    },
    {
      name: 'totalPrice',
      type: 'number',
      title: 'Total Price',
      validation: (Rule:Rule) => Rule.required().min(0)
    },
    {
      name: 'status',
      type: 'string',
      title: 'Order Status',
      options: {
        list: [
          { title: 'Pending', value: 'pending' },
          { title: 'Processing', value: 'processing' },
          { title: 'Shipped', value: 'shipped' },
          { title: 'Delivered', value: 'delivered' },
          { title: 'Cancelled', value: 'cancelled' }
        ]
      },
      validation: (Rule:Rule) => Rule.required()
    },
    {
      name: 'orderDate',
      type: 'datetime',
      title: 'Order Date',
      validation: (Rule:Rule) => Rule.required(),
      initialValue: new Date().toISOString()
    }
  ]
};
