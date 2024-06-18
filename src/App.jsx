import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import './index.css'
import Navbar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AboutUs } from './pages/AboutUs';
import { ContactUs } from './pages/Contect-us';
import { Home } from './pages/Home';

function App() {

  return (
    <>
   
   <BrowserRouter>

   <div className='w-full  mx-[20px]'>
    <Navbar />

    <Routes>
      <Route path='/' element={ <Home/>} /> 
      <Route path='/about-us' element={ <AboutUs/> } /> 
      <Route path='/contact-us' element={ <ContactUs/> } /> 

    </Routes>
    </div> 
   </BrowserRouter>

    </>
  )
}

export default App
