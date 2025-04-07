
import React, { Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Products from './components/products'
const WishList = React.lazy(()=>import  ('./components/WishList'))
const CartList = React.lazy (()=>import ( './components/cartList'))


function App() {
return(
<BrowserRouter>  
    
    <Switch>

    <Route exact path="/products" component={Products}/>
    <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/wishList" component={WishList}/>
        <Route exact path="/Cart" component = {CartList}/>
    </Suspense>
    
    
    </Switch>
    
    
    
    
</BrowserRouter>
)
  
}

export default App
