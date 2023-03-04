import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.scss';
// import App from './deprecated.App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/home';
import Search from './components/search';
import PageAbout from './components/pageAbout';
import PagePrivacy from './components/pagePrivacy';
import PageTransparency from './components/pageTransparency';
import PageCareers from './components/pageCareers';
import PageFeedback from './components/feedback';
import PageContactUs from './components/contact-us';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
  <Routes>
    {/* <Route path="/" element={<Layout />}> */}
      <Route index element={<Home />} />
      <Route path="search" element={<Search />} />
      <Route path="about" element={<PageAbout />} />
      <Route path="privacy" element={<PagePrivacy />} />
      <Route path="transparency" element={<PageTransparency />} />
      <Route path="careers" element={<PageCareers />} />
      <Route path="feedback" element={<PageFeedback />} />
      <Route path="contact-us" element={<PageContactUs />} />
    {/* </Route> */}
  </Routes>
</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
