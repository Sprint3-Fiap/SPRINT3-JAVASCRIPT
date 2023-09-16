import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Header from './Header'
import Footer from './Footer'
import Body from './Body';
import Contato from './Contato';

function App() {
  
  return (
  <div>
    <Header />
    <Body />
    <Contato />
    <Footer />

  </div>
  )
}

export default App
