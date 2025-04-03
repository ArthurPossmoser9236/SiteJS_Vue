import React from 'react';
import Header from './assets/componentes/Header';
import Banner from './assets/componentes/Banner';
import PizzaCard from './assets/componentes/PizzaCard';
import Footer from './assets/componentes/Footer';
import './App.css';

function App() {
  const pizzas = [
    {
      id: 1,
      name: "Margherita",
      description: "Molho de tomate, muçarela e manjericão fresco.",
      price: "R$ 25,00",
      image: "https://via.placeholder.com/300x200?text=Margherita",
    },
    {
      id: 2,
      name: "Pepperoni",
      description: "Molho de tomate, muçarela e fatias de pepperoni.",
      price: "R$ 30,00",
      image: "https://via.placeholder.com/300x200?text=Pepperoni",
    },
    {
      id: 3,
      name: "Quatro Queijos",
      description: "Mistura de queijos: muçarela, parmesão, gorgonzola e provolone.",
      price: "R$ 35,00",
      image: "https://via.placeholder.com/300x200?text=Quatro+Queijos",
    },
    {
      id: 4,
      name: "Calabresa",
      description: "Calabresa fatiada, cebola e orégano.",
      price: "R$ 28,00",
      image: "https://via.placeholder.com/300x200?text=Calabresa",
    },
    {
      id: 5,
      name: "Portuguesa",
      description: "Presunto, ovos, cebola, azeitonas e mussarela.",
      price: "R$ 32,00",
      image: "https://via.placeholder.com/300x200?text=Portuguesa",
    },
    {
      id: 6,
      name: "Frango com Catupiry",
      description: "Frango desfiado, catupiry e milho.",
      price: "R$ 33,00",
      image: "https://via.placeholder.com/300x200?text=Frango+com+Catupiry",
    },
    {
      id: 7,
      name: "Napolitana",
      description: "Tomate, manjericão, alho e muçarela.",
      price: "R$ 27,00",
      image: "https://via.placeholder.com/300x200?text=Napolitana",
    },
    {
      id: 8,
      name: "Vegetariana",
      description: "Mix de vegetais frescos e queijo.",
      price: "R$ 29,00",
      image: "https://via.placeholder.com/300x200?text=Vegetariana",
    },
    {
      id: 9,
      name: "Suprema",
      description: "Calabresa, frango, bacon e vegetais especiais.",
      price: "R$ 38,00",
      image: "https://via.placeholder.com/300x200?text=Suprema",
    },
    {
      id: 10,
      name: "Toscana",
      description: "Salsicha toscana, pimentões e cebolas.",
      price: "R$ 30,00",
      image: "https://via.placeholder.com/300x200?text=Toscana",
    },
    {
      id: 11,
      name: "Mexicana",
      description: "Molho apimentado, carne moída e pimenta jalapeño.",
      price: "R$ 34,00",
      image: "https://via.placeholder.com/300x200?text=Mexicana",
    },
    {
      id: 12,
      name: "Italiana",
      description: "Tomate, azeitonas, alcaparras e orégano.",
      price: "R$ 31,00",
      image: "https://via.placeholder.com/300x200?text=Italiana",
    },
    {
      id: 13,
      name: "Bacon",
      description: "Bacon crocante, muçarela e molho especial.",
      price: "R$ 32,00",
      image: "https://via.placeholder.com/300x200?text=Bacon",
    },
    {
      id: 14,
      name: "Rúcula com Tomate Seco",
      description: "Rúcula fresca, tomate seco e parmesão.",
      price: "R$ 33,00",
      image: "https://via.placeholder.com/300x200?text=R%C3%BAcula+com+Tomate+Seco",
    },
    {
      id: 15,
      name: "Alho e Óleo",
      description: "Alho, óleo extra virgem e salsinha.",
      price: "R$ 26,00",
      image: "https://via.placeholder.com/300x200?text=Alho+e+%C3%93leo",
    },
    {
      id: 16,
      name: "Caprese",
      description: "Tomate, mussarela de búfala e manjericão.",
      price: "R$ 35,00",
      image: "https://via.placeholder.com/300x200?text=Caprese",
    },
    {
      id: 17,
      name: "Carbonara",
      description: "Molho cremoso, bacon e ovos.",
      price: "R$ 36,00",
      image: "https://via.placeholder.com/300x200?text=Carbonara",
    },
    {
      id: 18,
      name: "Romana",
      description: "Molho de tomate, anchovas e alcaparras.",
      price: "R$ 34,00",
      image: "https://via.placeholder.com/300x200?text=Romana",
    },
    {
      id: 19,
      name: "Havaiana",
      description: "Presunto e abacaxi.",
      price: "R$ 29,00",
      image: "https://via.placeholder.com/300x200?text=Havaiana",
    },
    {
      id: 20,
      name: "Doce de Leite com Banana",
      description: "Sobremesa com doce de leite, banana e canela.",
      price: "R$ 30,00",
      image: "https://via.placeholder.com/300x200?text=Doce+de+Leite+com+Banana",
    },
  ];

  return (
    <div className="app">
      <Header />
      <Banner />
      <main className="main-content">
        <h2>Nossos Sabores</h2>
        <div className="pizza-grid">
          {pizzas.map(pizza => (
            <PizzaCard key={pizza.id} pizza={pizza} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
