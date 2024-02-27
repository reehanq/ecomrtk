import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Nav, NavItem, NavLink } from 'reactstrap';
import { FaRegBell } from "react-icons/fa";
import {useSelector} from 'react-redux'
import Products from './pages/Products';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Home from './pages/Home';



const Router = () => {
  const productlen = useSelector(state =>state.addProduct.data.length)
  return (
    <BrowserRouter>
      <Nav>
        <NavItem><Link to="/">Home</Link></NavItem>
          <NavItem><Link to="/product">Products</Link></NavItem>
          <NavItem><Link to="/cart">Cart <span><FaRegBell />{productlen}</span></Link></NavItem>
          <NavItem><Link to="/checkout">Checkout</Link></NavItem>
      </Nav>
      

      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Products />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>

    </BrowserRouter>
  )
}


export default Router