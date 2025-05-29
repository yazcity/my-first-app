import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Home  from '../../Pages/Home/Home';
import Dishes  from '../../Pages/Dishes/Dishes';
import Booking from '../../Pages/Booking/Booking';
import About from '../../Pages/About/About';
import NotFound from '../../Pages/NotFound/NotFound';

function LayoutRoutes() {
  return (
    <Router>
        <Header/>
            <Routes>
            <Route path='/my-first-app' element={ <Home/> }/>
            <Route path='/' element={ <Home/> }/>
            <Route path='/dishes' element={ <Dishes/> }/>
            <Route path='/services' element={ <Booking/> }/>
            <Route path='/about' element={ <About/> }/>
            <Route path='/*' element={<NotFound/>}/>
            </Routes>
        <Footer/>
    </Router>
  )
}

export default LayoutRoutes
