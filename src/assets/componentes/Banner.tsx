import React from 'react';
import "../../app.css";

const Banner = () => {
  return (
    <section id="banner" className="banner">
      <img src="imgs/fundo.jpg" alt="Banner principal da pizzaria" />
      <div className="banner-content">
        <h1>Bem-vindo à Pizzaria Delícia</h1>
        <p>A melhor pizza da cidade com ingredientes selecionados.</p>
        <a href="#ofertas" className="btn">Confira as Ofertas</a>
      </div>
    </section>
  );
};

export default Banner;
