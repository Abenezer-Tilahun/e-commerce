import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom';
import Home from './Pages/Home'; // Adjust the path if needed
import Header from './Components/Header'; // Adjust the path if needed

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
