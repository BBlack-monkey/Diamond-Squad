import React from 'react';
import './App.css';
import Navbarr from './components/Navbar.js';
import Hero from "./components/Hero.js";
function App() {
  return (
    <>
    <Navbarr/>
    <Hero season="2" ver="1.1.2"/>
    <Content/>
  </>
  )
}

export default App;
