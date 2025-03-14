import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if authToken exists in cookies on mount
    const token = Cookies.get('authToken');
    setIsAuthenticated(!!token); // Convert to boolean
  }, []);

  const login = (token) => {
    Cookies.set('authToken', token, {
      expires: 1,
      secure: true,
      sameSite: 'strict',
    });
    setIsAuthenticated(true);
  };

  const logout = () => {
    Cookies.remove('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);