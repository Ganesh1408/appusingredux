

import './App.css'
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Products from './components/products'
import WishList from './components/WishList'
import CartList from './components/cartList'


function App() {
return(
<BrowserRouter>  
    
    <Switch>

    <Route exact path="/products" component={Products}/>
    <Route exact path="/wishList" component={WishList}/>
    <Route exact path="/Cart" component = {CartList}/>
    
    </Switch>
    
    
    
    
</BrowserRouter>
)
  
}

export default App
