import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // useNavigate hook

  const handleLogin = async (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    try {
      // Make the login request
      const response = await axios.post('http://localhost:5000/api/auth/login', {
        email,
        password,
      });
  
      // Assuming the backend sends back the _id and token
      const { _id, token } = response.data;  // Get _id instead of userId
  
      // Store the _id and token in localStorage
      localStorage.setItem('userId', _id);  // Save _id as userId
      localStorage.setItem('token', token); // Save token
      console.log(_id);  // Log the userId (now _id) to the console
  
      // Optionally, log the response data for debugging
      console.log('Login successful:', response.data);
  
      // Redirect to the dashboard after successful login
      navigate('/student/dashboard');  // Use navigate instead of history.push
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      console.error('Login error:', error);
    }
  };
  

  return (
    <div className="login-container">
      <h2>Login</h2>
      {error && <div className="error">{error}</div>}
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
