import React from 'react';
import headerImg from '../assets/img/Header.jpg';

const Header = () => {
  return (
    <div
      className="cabecera"
      style={{ backgroundImage: `url(${headerImg})` }}
    >
      <div className="overlay">
        <h1>¡Pizzería Mamma Mia!</h1>
        <span>¡Tenemos las mejores pizzas que podrás encontrar!</span>
        <hr />
      </div>
    </div>
  );
};

export default Header;
