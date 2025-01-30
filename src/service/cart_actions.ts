import { client } from "@/sanity/lib/client";
import { cartType } from "@/types/cart";


export const fetchCartItems = async (): Promise<cartType[]> => {
    
  const query = `*[_type == "cart"]{
  _id,
  productId,
name,
price,
  image,
quantity,
}`
    const cartItems = await client.fetch(query)
    
    return  cartItems;
}

export const removeItemFromCart = async (productId:string) => {
    try {
        const response = await client.delete(productId);
        console.log(response);
        return response;
    } catch (error) {
         console.log(`Failed to delete doc: ${error}`);
    }
}

export const addItemToCart = async (productId:string, name:string, price:number, image: string) => {

    try {
        const cartShcema = {
            _type: 'cart',
            productId: productId,
            name: name,
            price: price,
            image: image,
            quantity: 1,
        }
    
        const response = await client.create(cartShcema); 
    
        return response;
    } catch (error) {
        console.log(error);
    }
}