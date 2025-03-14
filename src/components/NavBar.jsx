import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">Bible Chronology</NavLink>

      <button
        className="menu-toggle"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="hamburger"></span>
      </button>

      <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
        <NavLink to="/login" onClick={() => setIsMenuOpen(false)}>Login</NavLink>
        {isAuthenticated && (
          <>
            <NavLink to="/about" onClick={() => setIsMenuOpen(false)}>About</NavLink>
            <button
              onClick={() => { logout(); setIsMenuOpen(false); navigate('/'); }}
              className="logout-button"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}

export default NavBar;