
import {   createAsyncThunk, createSlice  } from '@reduxjs/toolkit'
// import { ProductsList } from '../../ProductsList/productsList'
export const fetchProducts = createAsyncThunk(
    'updateAllProducts',
    async()=>{
        try{
            const response = await fetch('https://fakestoreapi.com/products')
            return response.json(   )
        }catch(err){
            console.log(err)
        }

})

 const productSlice = createSlice({
    name:'Product',
    initialState:{
        list:[],
        isLoading:false,
        error:''
    },
   
    extraReducers:(builder)=>{
        builder.
        addCase(fetchProducts.pending,(state)=>{
            state.isLoading=true
        }).addCase(fetchProducts.fulfilled,(state,action)=>{
            state.isLoading = false
            state.list = action.payload
            state.error=""
        }).addCase(fetchProducts.rejected,(state,action)=>{
            state.isLoading = false
            state.error = action.payload || 'something went wrong'
        })
    }

    

}) 


export const getProductList = (state) => state.products.list
// console.log(getProductList)

export const getProductLoadingState = (state) => state.products.isLoading
export const getProductErrorState = (state) => state.products.error
// export const fetchProducts =()=>(dispatch)=>{
//     dispatch(fetchLoading())
//     fetch('https://fakestoreapi.com/products')
//     .then(response=>response.json())
//     .then((data)=>{
//         dispatch(updateAllProducts(data))
//     }).catch(()=>{
//         dispatch(fetchError())
//     })
// } 

export const {updateAllProducts,fetchLoading,fetchError} = productSlice.actions
export default  productSlice.reducer