import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// import { updateAllProducts } from './slice/productSlice'


export const   api =createApi({
    baseQuery:fetchBaseQuery({baseUrl:"https://fakestoreapi.com"}),
    tagTypes :['products'],
    endpoints:(builder)=>({
        updateProducts:builder.query({
            query:()=>"/products",
            providesTags:['products'],
            
        }),
    })
})

export const {useUpdateProductsQuery}=api