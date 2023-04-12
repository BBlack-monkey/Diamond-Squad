import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';

function App() {
 var x = navigator.online;
  return (
    <>
    <Navbar/>
  {/* add to jsx */}
  {x ? (<div>Online</div>): (<div>
    Offline
  </div>)}
  </>
  )
}

export default App;
