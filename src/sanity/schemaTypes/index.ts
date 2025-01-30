import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import cartSchema from './cart'
import orderSchema from './order'
import userSchema from './user'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,cartSchema,orderSchema,userSchema],
}
