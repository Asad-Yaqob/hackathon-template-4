import { client } from "@/sanity/lib/client"
import { CheckoutType } from "@/types/checkout";
import { UserType } from "@/types/user"

export const createUser = async (userData:UserType) => {

    const userSchema = {
        _type: 'users',
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: userData.email,
        password: "password123",
    }

    try {
        const user = await client.create(userSchema);
        if (user) {
            return user;
        }
    } catch (error) {
        console.log(error)
    }
}

export const checkoutOrder = async (userData:UserType, checkoutData: CheckoutType) => {
    const user = await createUser(userData);
    const orderSchema = {
        _type: 'orders',
        user:{
            _type: 'reference',
            _ref: user?._id,
        },
        items: checkoutData.items,
        address: checkoutData.address,
        appartment: checkoutData.appartment,
        city: checkoutData.city,
        postalCode: checkoutData.postalCode,
        totalPrice: checkoutData.totalPrice,
        status: 'pending',
        orderDate: new Date().toISOString(),
    }

    try {
        const order = await client.create(orderSchema);
        if (order) {
            return order;
        }
    } catch (error) {
        console.log(error)
    }
}