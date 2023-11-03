import logo from './logo.svg';
import './App.css';
import {Route,Routes,}from 'react-router-dom';
import Check from './Check';
import Products from './Products';

import Contact from './Contact';
import Home from './home';
import Products from './Products';
import { Action } from './State';
function App() {
  return (
    <div className="App">
   
   <Routes>
   <Route path="/" element={<Contact/>}/>
   <Route path="/Check" element={<Check/>}/>
   <Route path="/Home" element={<Home/>}/>
   </Routes>
   <Products/>
   <Action/>
    </div>
  );
}

export default App;
