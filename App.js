import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AdminPage from './AdminPage';
import Dashboard from './Dashboard';

const App = () => {
  // Define the companies state
  const [companies, setCompanies] = useState([]);

  // Simulate fetching companies
  useEffect(() => {
    // Fetch or hard-code companies data
    setCompanies([
      { id: 1, name: 'Company A' },
      { id: 2, name: 'Company B' },
    ]);
  }, []); // Empty array to run once when component mounts

  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/AdminPage" element={<AdminPage companies={companies} />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;