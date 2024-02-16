import { configureStore } from "@reduxjs/toolkit";
import quantityReducer from '../features/quantity/quantitySlice';
import productsReducer from '../features/products/productsSlice';
import categoriesReducer from '../features/categories/categoriesSlice';

export default configureStore({
    reducer: {
        quantity: quantityReducer,
        products: productsReducer,
        categories: categoriesReducer,
    },
});