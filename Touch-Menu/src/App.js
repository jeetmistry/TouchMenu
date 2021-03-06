import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { Home } from './components/Home.js';
import { Menu } from './components/Menu.js';
import { Contact } from './components/Contact.js';
import { Login } from './components/Login.js';
import { Register } from './components/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { RestaurantHome } from './components/RestaurantHome';
import { Cart } from './components/Cart';
import { Profile } from './components/Profile';
import { ResMenu } from './components/ResMenu';
import { QrCode } from './components/QrCode';
import { AddMenu } from './components/AddMenu';
import { UserOrder } from './components/UserOrder';
import { RestaurantOrder } from './components/RestaurantOrder';

function App() {

  return (
    <>

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/home" element={<Home />}></Route>
          <Route exact path="/menu" element={<Menu />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
          <Route exact path="/login" element={<Login />}></Route>
          <Route exact path="/Register" element={<Register />}></Route>
          <Route exact path="/cart" element={<Cart />}></Route>
          <Route exact path="/restaurantHome" element={<RestaurantHome />}></Route>
          <Route exact path="/restaurantOrders" element={<RestaurantOrder />}></Route>
          <Route exact path="/restaurantMenu" element={<AddMenu />}></Route>
          <Route exact path="/profile" element={<Profile />}></Route>
          <Route exact path="/qrcode" element={<QrCode />}></Route>
          <Route exact path="/:restaurant" element={<ResMenu />}></Route>
          <Route exact path="/userorder" element={<UserOrder />}></Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;
