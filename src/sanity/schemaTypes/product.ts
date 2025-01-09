interface ValidationRule {
  required: () => ValidationRule;
  min: (value: number) => ValidationRule;
  max: (value: number) => ValidationRule;
}

interface Field {
  name: string;
  title: string;
  type: string;
  validation?: (Rule: ValidationRule) => ValidationRule;
  options?: {
    hotspot?: boolean;
  };
  to?: { type: string }[];
}

interface ProductSchema {
  name: string;
  title: string;
  type: string;
  fields: Field[];
}

export const productSchema: ProductSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Name",
      type: "string",
      validation: (Rule: ValidationRule) => Rule.required().min(3).max(100),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: ValidationRule) => Rule.required().min(10).max(1000),
    },
    {
      name: "price",
      title: "Price",
      type: "number",
      validation: (Rule: ValidationRule) => Rule.required().min(0),
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    // Uncomment if needed in the future
    // {
    //   name: 'category',
    //   title: 'Category',
    //   type: 'reference',
    //   to: [{ type: 'category' }],
    // },
  ],
};
