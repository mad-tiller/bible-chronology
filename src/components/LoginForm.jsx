import React, { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import API_CONFIG from '../config/api'; // Import the config

async function loginUser(credentials) {
  const response = await fetch(API_CONFIG.ENDPOINTS.AUTHENTICATE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  });

  if (!response.ok) {
    throw new Error('Authentication failed');
  }

  return response.json();
}

function LoginForm() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      if (data.results.token == null) {
        setErrorMessage('Login failed. Please try again.');
      }
      else {
        login(data.results.token);
        navigate('/');
      }
    },
    onError: (error) => {
      console.error('Login failed:', error.message);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({
      userName,
      password,
    });
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1>Sign in</h1>
        <p className="subtitle">Access the Bible Chronology</p>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              placeholder="Username"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="login-button"
            disabled={mutation.isPending}
          >
            {mutation.isPending ? 'Signing in...' : 'Sign in'}
          </button>
        </form>

        {errorMessage != null && (
          <p className="error-message">{errorMessage}</p>
        )}

        <div className="links">
          <a href="#">Forgot password?</a>
          <a href="#">Create an account</a>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;