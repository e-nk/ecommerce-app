import React, { useState } from 'react';
import Navbar from './components/navigation/Narbar';
import NavbarFront from './components/navigation/NavbarFront';
import Footer from './components/Footer/Footer';
import ProductDetail from './components/Product/ProductDetail';
import Products from './pages/Products';
import Orders from './pages/Orders'
import NewArrivals from './pages/NewArrivals';
import Cart from './pages/Cart';
import Logout from './components/auth/Logout';
import Wishlist from './pages/Wishlist';
import {Switch, Route, useHistory} from "react-router-dom";
import './style.css';

import About from "./pages/About";
import Home from "./pages/Home";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import ForgotPassword from './components/auth/ForgotPassword';

function App() {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const history = useHistory();

  const handleLogout = () => {
    setIsLoggedOut(true);
    history.push('/logout');
  };

  return (
    <div>
      {isLoggedOut ? <NavbarFront /> : <Navbar />}
      
      <Switch>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/new-arrivals">
          <NewArrivals />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/wishlist">
          <Wishlist />
        </Route>
        <Route path="/product/:productId">
          <ProductDetail />
        </Route>
        <Route path="/logout">
          <Logout onLogout={handleLogout} />
        </Route>
        <Route path="/home">
          <Home/>
        </Route>
        <Route path="/about">
          <About/>
        </Route>
        <Route path="/login">
          <Login/>
        </Route>
        <Route path="/reset-pass">
          <ForgotPassword/>
        </Route>
        <Route path="/orders">
          <Orders/>
        </Route>
        <Route path="/signup">
          <Signup/>
        </Route>
        <Route path="/forgot-password">
          <ForgotPassword/>
        </Route>
        
      </Switch>
      
      <Footer />
    </div>
  );
}

export default App;