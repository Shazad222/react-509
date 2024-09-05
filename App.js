// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the use of Routes instead of Switch
import Login from './components/Login';
import Signup from './components/Signup';
import Home from './components/Home';
import './styles.css';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>

  );
};

export default App;
