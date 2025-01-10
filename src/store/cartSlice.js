import {createSlice} from '@reduxjs/toolkit'




const cartSlice = createSlice({
    name:"cart",
    initialState:{
        list:[],
        isLoading:false,
        error:''
    },
    reducers:{

    }
})

export default cartSlice.reducer