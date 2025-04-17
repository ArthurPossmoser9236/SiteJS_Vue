import React from 'react';
import "../../app.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo">
          <img src="imgs/logo.png" alt="Logotipo da Pizzaria" />
        </div>
        <nav className="menu">
          <ul>
            <li><a href="#banner">Início</a></li>
            <li><a href="#ofertas">Ofertas</a></li>
            <li><a href="#sabores">Sabores</a></li>
            <li><a href="#contato">Contato</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
