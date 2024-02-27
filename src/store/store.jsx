import {configureStore} from '@reduxjs/toolkit';
import productSlice from './slices/productSlice';
import addproductSlice from './slices/addproductSlice';


const store = configureStore({
    reducer:{
    "product":productSlice,
    "addProduct":addproductSlice
    }
})


export default store;