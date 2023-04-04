import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../Components/Footer/footer';
import LoginForm from '../Components/form/Login/loginform';
import RegisterForm from '../Components/form/Register/registerform';
import Header from '../Components/Header/header';
import Cart from '../Container/Cart/cart';
import { Details } from '../Container/Details/details';
import Home from '../Container/Home/home';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
        <Header/>     
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/cart/:id" element={<Cart/>}/>
                <Route path="/login" element={<LoginForm/>} />
                <Route path="/register" element={<RegisterForm/>} />
                <Route path="/details/:id" element={<Details/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </div>
  )
}

export default Router;