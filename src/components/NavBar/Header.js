
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import './Header.css'

function Header(){
    return (
      <div className="modern-component">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="website-name">Sadaqah Box</h1>
        <nav className="navigation">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/donation">Donation</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </div>
    );
  };


export default Header;