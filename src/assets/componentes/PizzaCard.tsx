import React from 'react';
import "../../app.css";

interface PizzaCardProps {
  image: string;
  altText: string;
  name: string;
  description: string;
  price: string;
}

const PizzaCard: React.FC<PizzaCardProps> = ({ image, altText, name, description, price }) => {
  return (
    <div className="card">
      <img src={image} alt={altText} />
      <div className="card-info">
        <h3>{name}</h3>
        <p>{description}</p>
        <span className="price">{price}</span>
      </div>
    </div>
  );
};

export default PizzaCard;
