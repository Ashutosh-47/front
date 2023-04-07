import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login';
import Signup from './Components/Signup';
import Home from './Components/Home';
import Navbar from './Components/Navbar';
import AllTask from './Components/AllTask';
import Honda from './Components/Honda';

export default function App() {
  return (

    <div className='app'>
<div>
  
<BrowserRouter>

<Navbar/>
 
<Routes>

  <Route path="/" element={<Login/>}/>
   
    <Route path="/signup" element={<Signup/>} />
  
    <Route path="/home" element={<Home/>} />
  
    <Route path="/alltask" element={<AllTask/>} />

    <Route path="/honda" element={<Honda/>} />
    

</Routes>

</BrowserRouter>

  </div>      
     
    </div>
  )
}
