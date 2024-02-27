import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';


export const getProductList = createAsyncThunk('user',async() => {
    try{
      const resp= await axios.get("https://fakestoreapi.com/products");
      return resp.data
        
    }
    catch(err) {
        console.log("something went wrong",err)
    }
}
)
