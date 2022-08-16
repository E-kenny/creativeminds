import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './nav';
import ShowRoom from './showroom';
import About from './about';
import ContactUs from './contact';

// ReactDOM.render(<App />, document.getElementById('root'))


const root = ReactDOM.createRoot(document.getElementById('root'));

// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App/>}/>
      <Route path="nav" element={<Nav/>}/>
      <Route path="showroom" element={<ShowRoom/>}/>
      <Route path="about" element={<About/>}/>
      <Route path="contact" element={<ContactUs/>}/>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

