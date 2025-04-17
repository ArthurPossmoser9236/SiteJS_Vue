import React from 'react';
import "../../app.css";

const Footer = () => {
  return (
    <footer className="site-footer" id="contato">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="imgs/logo.png" alt="Logotipo da Pizzaria" />
          </div>
          <div className="footer-info">
            <p>Rua Exemplo, 123 - Bairro - Cidade/Estado</p>
            <p>(11) 1234-5678</p>
            <p>contato@pizzariadelicia.com.br</p>
          </div>
          <div className="footer-social">
            <a href="#"><img src="imgs/facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="imgs/instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="imgs/whatssap.png" alt="Whatssap" /></a>
          </div>
        </div>
        <p className="copyright">
          &copy; 2025 Pizzaria Delícia. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
