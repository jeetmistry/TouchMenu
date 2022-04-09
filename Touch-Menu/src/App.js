import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';
import { Home } from './components/Home.js';
import { Menu } from './components/menu.js';
import { Contact } from './components/contact.js';
import { Login } from './components/login.js';
import { Register } from './components/register';
import {Base} from './components/base';

function App() {
  const [tabId, setTabId] = useState(0)

  return (
    <Base setTabId = {setTabId}>
     {tabId == 0 ? <Home/> : tabId == 1 ? <Menu/> : tabId == 2 ? <Contact/> : tabId == 3 ? <Login/> : tabId == 4 ? <Register/> : null }
    </Base>
  );
}

export default App;
