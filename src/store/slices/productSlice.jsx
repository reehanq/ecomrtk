import { createSlice } from '@reduxjs/toolkit';
import { getProductList } from '../API/productData';




const productSlice = createSlice({
    name: "product",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(getProductList.pending, (state) => {
            state.isLoading = true;
            state.isError = false; // reset error state
        });
        builder.addCase(getProductList.fulfilled, (state, action) => {
            state.isLoading = false;
            state.data = action.payload;
        });
        builder.addCase(getProductList.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = true;
        });
    }
});

export default productSlice.reducer;
