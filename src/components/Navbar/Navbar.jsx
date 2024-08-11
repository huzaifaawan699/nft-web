import React, {useState} from 'react';
import './Navbar.css';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';

const Menu = () => (
  <>
    <p><a href='#Home'>Home</a></p>
    <p><a href='#Downloads'>Downloads</a></p>
    <p><a href='#About'>About</a></p>
    <p><a href='#Support'>Support</a></p>
  </>
);

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="nft__navbar">
      <div className="nft__navbar-links">
        <div className="nft__navbar-links_logo">
          <img src={logo} alt='logo' />
        </div>
        <div className="nft__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="nft__navbar-button">
        <button type="button">Buy Now</button>
      </div>
      <div className="nft__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
          <div className="nft__navbar-menu_container">
            <div className="nft__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="nft__navbar-menu_container-links-buynow">
              <button type="button">Buy Now</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
