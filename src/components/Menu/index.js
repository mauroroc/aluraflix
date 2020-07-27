import React from 'react';
import './menu.css';
import Logo from '../../assets/images/LogoMain.png';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img src={Logo} alt="Logo" className="Logo" />
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;