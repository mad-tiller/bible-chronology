import { StrictMode } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Landing from './components/Landing';
import LoginForm from './components/LoginForm';
import About from './components/About';
import './styles.css';


function App() {
  return ( 
    <StrictMode>
        <BrowserRouter basename="/bible-chronology">
          <Routes>
          <Route path="/" element={<Landing />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </StrictMode>
  )
}

export default App
