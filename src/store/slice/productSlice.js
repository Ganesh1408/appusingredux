
import {  createSlice  } from '@reduxjs/toolkit'


 const productSlice = createSlice({
    name:'Product',
    initialState:{
        productList:[],
        isLoading:false,
        error:''
    },
    reducers:{
    
    }
}) 

export default  productSlice.reducer