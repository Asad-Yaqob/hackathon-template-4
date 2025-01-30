export type OrderType = {
    _type: string;
    user: {
        _type: string;
        _ref: string | undefined;
    };
    items: [];
    address: string;
    appartment: string;
    city: string;
    postalCode: string;
    totalPrice: number;
    status: string;
    orderDate: string;
}