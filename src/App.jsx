import React from "react";
import Header from "./assets/componentes/Header.tsx";
import Banner from "./assets/componentes/Banner.tsx";
import PizzaCard from "./assets/componentes/PizzaCard.tsx";
import Footer from "./assets/componentes/Footer.tsx";
import "./app.css";

const App = () => {
  return (
    <>
      <Header />
      <Banner />

      <section id="ofertas" className="ofertas">
        <div className="container">
          <h2>Ofertas &amp; Mais Vendidos</h2>
          <div className="cards">
            <PizzaCard
              image="images/pizza.png"
              altText="Pizza Margherita"
              name="Pizza Margherita"
              description="Deliciosa pizza com tomate, mussarela e manjericão."
              price="R$ 29,90"
            />
            <PizzaCard
              image="images/pizza.png"
              altText="Pizza Calabresa"
              name="Pizza Calabresa"
              description="Pizza com rodelas de calabresa e cebola."
              price="R$ 34,90"
            />
            <PizzaCard
              image="images/pizza.png"
              altText="Pizza Portuguesa"
              name="Pizza Portuguesa"
              description="Combinação clássica de ingredientes para todos os gostos."
              price="R$ 39,90"
            />
          </div>
        </div>
      </section>

      <section id="sabores" className="sabores">
        <div className="container">
          <h2>Sabores &amp; Preços</h2>
          <div className="flavors">
            <div className="flavor-item">
              <img src="images/pizza.png" alt="Pizza Quatro Queijos" />
              <h3>Quatro Queijos</h3>
              <p>A partir de R$ 44,90</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default App;
