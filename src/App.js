/* eslint-disable import/no-cycle */
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { createContext, useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import axios from 'axios';
import Home from './Pages/Home';
import Header from './Components/Header';

export const MyContext = createContext();

function App() {
  const [countryList, setCountryList] = useState();

  const getCountry = async (url) => {
    await axios.get(url).then((res) => {
      setCountryList(res.data.data);
    });
  };

  useEffect(() => {
    getCountry('https://countriesnow.space/api/v0.1/countries/');
  }, []);

  const values = { countryList };
  return (
    <BrowserRouter>
      <MyContext.Provider value={values}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </MyContext.Provider>
    </BrowserRouter>
  );
}

export default App;
