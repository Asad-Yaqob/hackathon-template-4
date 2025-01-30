import { Rule } from '@sanity/types';

export default {
  name: 'user',
  title: 'User',
  type: 'document',
  fields: [
    {
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      validation: (Rule: Rule) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: Rule) => Rule.required().email?.() || Rule.required(),
    },
    {
      name: 'password',
      title: 'Password',
      type: 'string',
      hidden: true, // Hides it from the Sanity Studio UI
    },
  ],
};
