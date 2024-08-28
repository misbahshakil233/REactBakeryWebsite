import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Dashboard from './components/Dashboard/Dashboard'



function App() {
  return (
    <>
    
      <Navbar />
      <Dashboard />
      {/* <BakeryPage /> */}
      
     
    </>
  );
}

export default App;
