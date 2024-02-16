import { createSlice } from "@reduxjs/toolkit";

export const quantitySlice = createSlice({
    name: 'quantity',
    initialState: {
        value: 0,
    },
    reducers: {
        addToCart(state) {
            state.value += 1;
        }
    }
});

export const { addToCart } = quantitySlice.actions;

export default quantitySlice.reducer;