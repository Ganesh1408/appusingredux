
import Header from './components/Header'
import './App.css'
import { BrowserRouter, Route ,Switch } from 'react-router-dom'
import Products from './components/products'

function App() {
return(
<BrowserRouter>  
    <Header/>
    <Switch>

    <Route exact path="/products" component={Products}/>
    </Switch>
    
    
    
    
</BrowserRouter>
)
  
}

export default App
