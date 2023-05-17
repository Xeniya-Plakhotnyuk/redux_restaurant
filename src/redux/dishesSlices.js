import { createSlice } from '@reduxjs/toolkit';

export const  dishesSlices = createSlice({
    name: 'dishes',
    initialState: {
        selectedCategory: "ITALIAN"
    },
    reducers:{
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }

})

export const { filterCategory } = dishesSlices.actions;
export const getSelectedCategory = state => state.dishes.selectedCategory;
export default dishesSlices.reducer;