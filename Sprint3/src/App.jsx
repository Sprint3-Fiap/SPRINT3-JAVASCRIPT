import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import Body from './Body';

function App() {
  return (
  <div className="container-fluid">
    <Header />
    <Body />
    <Footer />
  </div>
  )
}

export default App
