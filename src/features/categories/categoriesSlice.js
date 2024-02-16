import { createSlice } from "@reduxjs/toolkit";

export const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [
        {
            id: 1,
            name: 'Куртки',
        }, {
            id: 2,
            name: 'Пальто',
        }, {
            id: 3,
            name: 'Рубашки',
        }
    ]
});

export default categoriesSlice.reducer;