import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface cartItem {
    id: number,
    image: string,
    name: string,
    count: number,
    price: number
}

interface CartState {
    cart: cartItem[] | any[];
}

const initialState: CartState = {
    cart: []
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.cart.push(action.payload)
        },
        clearCart: (state) => {
            state.cart = []
        }
    },
})

export const { addToCart, clearCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer