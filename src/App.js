import React from 'react';
import './App.css';
import Navbarr from './components/Navbar.js';
import Hero from "./components/Hero.js";
function App() {
  return (
    <>
    <Navbarr/>
    <Hero season="2" ver="1.1.2"/>
    <div class="container bg-amber-600 p-2 pl-4 text-lg ">
      <div class="flex justify-center">
        <span>Request</span>
      </div>
      <div class="">
        Hihihihihihuih
      </div>
    </div>
  </>
  )
}

export default App;
