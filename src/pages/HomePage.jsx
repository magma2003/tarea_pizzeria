import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../components/CartContext.jsx';
import Header from '../components/Header.jsx';
import CardPizza from '../components/CardPizza.jsx';
import { pizzas } from '../assets/resources/pizzas.js';
import { useNavigate } from 'react-router-dom';


const HomePage = () => {
  const [pizzas, setpizzas] = useState([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate() 
  
  useEffect(() => {
    consultarApi();
  }, []);
  
  const consultarApi = async () => {
    const url = 'http://localhost:5000/api/pizzas';
    const response = await fetch(url);
    const data = await response.json();
    setpizzas(data);
    console.log(data);
  };

  return (
    <div>
      <Header />

    <div className="container my-4">
        <div className="row">
          {pizzas.map((pizza, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 mb-4">
              <div className="card h-100 text-center">
                <img src={pizza.img} alt={pizza.name} className="card-img-top" />
                <div className="card-body">
                  <h4 className="card-title font-weight-bold">{pizza.name}</h4>
                  <h6>{pizza.desc}</h6>
                  <hr />
                  <div className="card-text">
                    Ingredientes:
                    <ul className="list-unstyled text-start">
                      {pizza.ingredients.map((ing, index) => (
                        <li key={index}>🍕 {ing}</li>
                      ))}
                    </ul>
                  </div>
                  <hr />
                  <p className="fw-bold">Precio: ${pizza.price}</p>
                </div>

                <div className="card-footer d-flex justify-content-center gap-2">
                  <button className="btn btn-outline-dark">
                      Ver Más 👀
                  </button>
                  <button className="btn btn-dark"  
                    onClick={() => addToCart({...pizza, count: 1})}
                  >
                      Añadir 🛒
                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default HomePage;
