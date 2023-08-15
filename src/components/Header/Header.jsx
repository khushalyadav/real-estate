import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { BiMenuAltRight } from 'react-icons/bi';
import OutsideClickHandler from 'react-outside-click-handler';
const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const getMenuStyles = (menuOpened) => {
    if (document.documentElement.clientWidth <= 800) {
      return { right: !menuOpened && '-100%' };
    }
  };
  return (
    <section className="h-wrapper">
      <div className="flexCenter  innerWidth paddings h-container">
        <Link to="/">
          <div width="100" >
            <img src="./logo.png" alt="logo" width={100} />
          </div>
        </Link>

        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <a href="">Residencies</a>
            <a href="">Our Value</a>
            <Link to="/login">Login</Link>
            <a href="">Get Started</a>
            <button className="button">
              <a href="">Contact</a>
            </button>
          </div>
        </OutsideClickHandler>
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
