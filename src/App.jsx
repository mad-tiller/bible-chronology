import React, { StrictMode, useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { AuthProvider } from './context/AuthContext';
import NavBar from './components/NavBar'; // New component
import Landing from './components/Landing';
import LoginForm from './components/LoginForm';
import About from './components/About';
import './styles.css';

const basename = process.env.NODE_ENV === 'production' ? '/bible-chronology' : '/';
const queryClient = new QueryClient();

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <BrowserRouter basename={basename}>
            <div className="app-container">
              <NavBar />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/login" element={<LoginForm />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </div>
          </BrowserRouter>
        </AuthProvider>
      </QueryClientProvider>
    </StrictMode>
  )
}

export default App
