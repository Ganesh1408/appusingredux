// import { updateAllProducts } from "../store/slice/productSlice"




export const apiMiddleware = ({dispatch})=>(next)=>(action)=>{
     const BASE_URL = 'https://fakestoreapi.com'
     
     if (action.type === "api/makecall"){
          next(action)
          const {url,onSuccess,onStart,onError} = action.payload
          dispatch({
               type:onStart
          })
          // console.log(url)
          fetch(`${BASE_URL}${url}`)
          .then(response =>response.json())
          .then((data)=>{
               dispatch({
                    type:onSuccess,
                    payload:data,
               })
          })
          .catch(()=>{
               dispatch({
                    type:onError
               })
          })
     }else{
     next(action)
}
}