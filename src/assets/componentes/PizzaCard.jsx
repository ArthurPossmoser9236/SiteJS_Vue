import React from 'react';

function PizzaCard({ pizza }) {
  return (
    <div className="pizza-card">
      <img src={pizza.image} alt={pizza.name} className="pizza-image" />
      <h3 className="pizza-name">{pizza.name}</h3>
      <p className="pizza-description">{pizza.description}</p>
      <p className="pizza-price">{pizza.price}</p>
    </div>
  );
}

export default PizzaCard;
