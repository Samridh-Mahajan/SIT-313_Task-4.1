import React from 'react';
import './header.css';


function Header() {
  return (
    <div>
    <header className="header">
      <label className="logo">DEV@DEAKIN</label>
      <input type="text" className="search-bar" placeholder="Search..." />
      <div className="options">
        <button className="option">POST</button>
        <button className="option">LOGIN</button>
      </div>
      
    </header>
    <img src={require('./th.jpeg')} alt="Avatar" className="avatar" />
    </div>
  );
}

export default Header;