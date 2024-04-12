import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Reports from './Reports'; // 

ReactDOM.createRoot(document.getElementById('root')).render(
  
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/reports" element={<Reports />} />
      </Routes>
    </Router>
 
);
