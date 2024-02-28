import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {allproduct} from '../../constants/index';


export const getProductList = createAsyncThunk('user',async() => {
    try{
      const resp= await axios.get(allproduct);
      return resp.data
        
    }
    catch(err) {
        console.log("something went wrong",err)
    }
}
)
