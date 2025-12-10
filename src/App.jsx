import { NavLink, Route, Routes } from 'react-router-dom'
import './App.css'
import Customers from './pages/Customers'
import Carts from './pages/Carts'
import Products from './pages/Products'
import Index from './pages/Index'
import OneCustomer from './pages/OneCustomer'
import OneProduct from './pages/OneProduct'

export const App = () => {

  return (
    <>
    <nav>
    <NavLink to="/customers">Customers</NavLink>
    </nav>
    <nav>
    <NavLink to="/carts">Carts</NavLink>
    </nav>
    <nav>
    <NavLink to="/products">Products</NavLink>
    </nav>
    <nav><NavLink to="/">Főoldal</NavLink></nav>

    <Routes>
      <Route path='/' element={<Index/> }/>
      <Route path='/customers' element={<Customers></Customers>}></Route>
      <Route path='/carts' element={<Carts></Carts>}></Route>
      <Route path='/products' element={<Products/>}></Route>
      <Route path='/customers/:customerId' element={<OneCustomer/>}></Route>
      <Route path='/products/:productId' element={<OneProduct/>}/>
    </Routes>
    </>
  )
}

export default App
