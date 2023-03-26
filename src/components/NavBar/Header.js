import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from '../../logo.svg'
import './Header.css';
import LoginButton from '../../LogIn/LogIn';
import LogoutButton from '../../LogIn/LogOut';
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user} = useAuth0();

  const handleMenuToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header-container">
      <nav className="navigation">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <h1>SadaqahBox</h1>

        <div className="menu-container">
          <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={handleMenuToggle}>
            {isOpen ? <FaTimes /> : <FaBars />}
          </div>
          <LoginButton />
          <LogoutButton />
          <ul className={`menu-list ${isOpen ? 'open' : ''}`}>
            <li><Link to="/">Home </Link></li>
            <li><Link to="/donations">Donations </Link></li>
            <li><Link to="/volunteer">volunteer </Link></li>
            <li><Link to="/about">About Us </Link></li>
          </ul>
        </div>
      </nav>


    </header>
  );
};

export default Header;
