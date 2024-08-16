
import React from 'react';
import { Link } from 'react-router-dom';
import './assets/HomeDashboard.css';
const HomeDashboard = () => {
  return (
    <div className="home-dashboard">
      <h1>Welcome to My Blog</h1>
      <nav>
        <ul>
          <li><Link to="/posts">Read Blogs</Link></li>
          <li><Link to="/addpost">Add Blogs</Link></li>
       
        </ul>
      </nav>
    </div>
  );
};

export default HomeDashboard;
