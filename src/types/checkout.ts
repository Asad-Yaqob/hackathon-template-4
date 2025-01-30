type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export type CheckoutType = {
    items: CartItem[],
    address: string;
    appartment: string;
    city: string;
    postalCode: string;
    totalPrice: number;
}