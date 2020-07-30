import React from 'react';
import { Link } from 'react-router-dom';
import './menu.css';
import Logo from '../../assets/images/LogoMain.png';
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img src={Logo} alt="Logo" className="Logo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video
      </Button>
    </nav>
  );
}

export default Menu;