/* eslint-disable import/no-cycle */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home';
import Header from './Components/Header';
import Footer from './Pages/Home/Footer';
import Product from './Pages/Product';
import ProductDetail from './Pages/ProductDetail';
import OrderCheck from './Pages/OrderCheck';
import Order from './Pages/Order';
import Wishlist from './Pages/Wishlist';
import Cart from './Pages/Cart';
import Coupon from './Pages/Coupon';
import MyAccount from './Pages/Account';
import Paymnet from './Pages/Paymnet';
import Contactus from './Pages/Contactus';
import SignIn from './Pages/SignIn';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';

export const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState();
  const [selectedCountry, setselectedCountry] = useState('');
  const location = useLocation(); // Get the current path
  const noHeaderFooterRoutes = ['/signin', '/signup', '/forgot-password']; // Define routes without header and footer

  const getCountry = async (url) => {
    await axios.get(url).then((res) => {
      const countries = res.data.data.map((item) => ({
        country: item.country, // Extract the country name
        cities: item.cities, // Store cities for possible later use
      }));
      setCountryList(countries);
    });
  };

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const values = { countryList, setselectedCountry, selectedCountry };
  return (
    <MyContext.Provider value={values}>
      {/* <Header /> */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/product" element={<Product />} />
        <Route path="/product/product-detail" element={<ProductDetail />} />
        <Route path="/product/product-detail/order" element={<Order />} />
        <Route path="/product/product-detail/ordercheck" element={<OrderCheck />} />
        <Route path="/product/product-detail/ordercheck/payment" element={<Paymnet />} />
        <Route path="/product/cart" element={<Cart />} />
        <Route path="/myaccount" element={<MyAccount />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/coupon" element={<Coupon />} />
        <Route path="/Contactus" element={<Contactus />} />
      </Routes>
      {/* <Footer /> */}
      {/* Conditionally render Footer */}
      {!noHeaderFooterRoutes.includes(location.pathname) && <Footer />}
    </MyContext.Provider>
  );
}

export default App;
