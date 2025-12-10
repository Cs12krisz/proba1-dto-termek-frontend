import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Customers from './pages/Customers'
import Carts from './pages/Carts'
import Products from './pages/Products'

export const App = () => {

  return (
    <>
    <h1>Index oldal</h1>
    <nav>
    <NavLink to="/customers">Customers</NavLink>
    </nav>
    <nav>
    <NavLink to="/carts">Carts</NavLink>
    </nav>
    <nav>
    <NavLink to="/products">Products</NavLink>
    
    
    </nav>
    <Routes>
      <Route path='/customers' element={<Customers></Customers>}></Route>
      <Route path='/carts' element={<Carts></Carts>}></Route>
       <Route path='/products' element={<Products/>}></Route>
    </Routes>
    </>
  )
}

export default App
