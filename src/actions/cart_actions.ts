import { client } from "@/sanity/lib/client";
import { Product } from "@/types/product";

export const fetchCartItems = async () => {
    const query = `*[_type == "cart"]`;
    const cartItems = await client.fetch(query);
    return cartItems;
}

export const addItemToCart = async (cartItem:Product) => {

    try {
        const cartShcema = {
            _type: 'cart',
            items: [cartItem]
        }
    
        const response = await client.create(cartShcema); 
    
        return response;
    } catch (error) {
        console.log(error);
    }
}