
import Header from './components/Header'
import './App.css'
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Products from './components/products'
import WishList from './components/WishList'

function App() {
return(
<BrowserRouter>  
    
    <Switch>

    <Route exact path="/products" component={Products}/>
    <Route exact path="/wishList" component={WishList}/>
    
    </Switch>
    
    
    
    
</BrowserRouter>
)
  
}

export default App
