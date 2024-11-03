// client/src/components/Login.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;

    try {
      const config = { headers: { 'Content-Type': 'application/json' } };
      const body = JSON.stringify({ username, password });
      const res = await axios.post('https://client-ncio.onrender.com/api/auth/login', body, config);

      // Store token in local storage
      localStorage.setItem('token', res.data.token);
      // Redirect to dashboard or protected route
      window.location.href = '/dashboard'; // Or use a routing library
    } catch (err) {
      console.error(err.message);
      // Handle error, e.g., display error message
      alert('Invalid Credentials');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" value={formData.username} onChange={onChange} />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" value={formData.password} onChange={onChange} />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;