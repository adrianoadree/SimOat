import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import NoPage from './Pages/NoPage';
import Home from './Pages/Home';
import HowToOrdder from './Pages/HowToOrder';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Navigation from './Layout/Navigation';
import 'bootstrap/dist/css/bootstrap.css';
import OurProducts from './Pages/OurProducts';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="our-products" element={<OurProducts />} />
        <Route path="order-here" element={<HowToOrdder />} />
        <Route path="*" element={<NoPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
