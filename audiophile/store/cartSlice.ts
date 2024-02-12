import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

interface CartState {
    cart: [{
        id: number,
        image: string,
        name: string,
        count: number,
        price: number
    }]
}

const initialState: CartState = {
    cart: [{ id: 0, image: "", name: "", count: 0, price: 0 }]
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<any>) => {
            state.cart.push(action.payload)
        }
    },
})

export const { addToCart } = cartSlice.actions

export const selectCart = (state: RootState) => state.cart.cart;

export default cartSlice.reducer