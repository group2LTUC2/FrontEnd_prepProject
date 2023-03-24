
import logo from '../../logo.svg'
import { Link } from 'react-router-dom';
import './Header.css'

function Header(props){
    return (
      <div className="modern-component">
        <img src={logo} alt="Logo" className="logo" />
        <h1 className="website-name">{props.title}</h1>
        <nav className="navigation">
          <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/donations">Donations</Link></li>
            <li><Link to="/about-us">About Us</Link></li>
          </ul>
        </nav>
      </div>
    );
  };


export default Header;