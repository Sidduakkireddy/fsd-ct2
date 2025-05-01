import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css'; // We'll style it here

const HomePage = () => {
  return (
    <div className="home-container">
      <h1>👨‍💻 Team FSD CT2</h1>
      <h4>V I AMRIN FATHIMA[247]</h4>
      <h4>B PREM CHANDU[246]</h4>
      <h4>M DEEPAK[259]</h4>
      <p>Welcome to the Student Team Members Management App</p>

      <div className="nav-buttons">
        <Link to="/add" className="button">➕ Add Member</Link>
        <Link to="/members" className="button">👥 View Members</Link>
      </div>
    </div>
  );
};

export default HomePage;
