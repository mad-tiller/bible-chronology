import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//import { StrictMode } from 'react'
// import React from 'react';
// import { ReactDOM } from 'react-dom/client'
//import { BrowserRouter, Routes, Route } from "react-router";
//import App from './App.jsx'
// import LoginForm from './components/LoginForm';
// import About from './components/About';
// import './styles.css';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
// const root = document.getElementById("root");

// ReactDOM.createRoot(root).render(
//   // <StrictMode>
//   //   <BrowserRouter>
//   //     <Routes>
//   //       <Route path="login" element={<LoginForm />} />
//   //       <Route path="about" element={<About />} />
//   //     </Routes>
//   //   </BrowserRouter>
//   // </StrictMode>
//   <StrictMode>
//     <App />
//   </StrictMode>,
// );

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )