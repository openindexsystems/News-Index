import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
// import App from './deprecated.App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Search from './components/search';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
    {/* </Route> */}
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
