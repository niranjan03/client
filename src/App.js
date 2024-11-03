import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';   

import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import axios from 'axios';

function App() {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      // Set token in axios headers for authenticated requests
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
  }, []);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>   

    </Router>
  );
}

export default App;
