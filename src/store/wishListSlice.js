import {createSlice} from '@reduxjs/toolkit'




const wishListSlice = createSlice({
    name:"wishList",
    initialState:{  
        list:[],
        isLoading:false,
        error:''
    },
    reducers:{

    }
})


export default wishListSlice.reducer