import { createSlice } from '@reduxjs/toolkit';


const addProductSlice = createSlice({
    name: "addProduct",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    reducers: {
        addProduct(state, action) {
            state.data.push(action.payload)
        },
        removeProduct(state, action) {
            console.log(action.payload)
            state.data = state.data.filter((el) => el._id != action.payload);
        }
    },
   
});

export const { addProduct, removeProduct } = addProductSlice.actions;
export default addProductSlice.reducer;
