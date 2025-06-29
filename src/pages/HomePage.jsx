import React, { useEffect, useState } from 'react';
import Header from '../components/Header.jsx';
import CardPizza from '../components/CardPizza.jsx';
import { pizzas } from '../assets/resources/pizzas.js';

const HomePage = () => {
  const [pizzas, setpizzas] = useState([]);
  
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

    {/*  
      <div className="container my-3">
        <div className="row">

          HITO 1: CardPizza
          <div className="col-12 col-md-4">            
              <CardPizza
                name="Napolitana"
                price={5950}
                ingredients={["mozzarella", "tomates", "jamón", "orégano"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c"
              />            
          </div>
          <div className="col-12 col-md-4">         
              <CardPizza
                name="Española"
                price={6950}
                ingredients={["mozzarella", "gorgonzola", "parmesano", "provolone"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab"
              />        
          </div>
          <div className="col-12 col-md-4">       
              <CardPizza
                name="Pepperoni"
                price={6950}
                ingredients={["mozzarella", "pepperoni", "orégano"]}
                img="https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3"
              />         
          </div>

          HITO 2: CardPizza con map
            {pizzas.map(prod => (
              <div className="col-12 col-md-4" key={prod.id}>
                <CardPizza prod={prod} />
              </div>
            ))}

        </div>
      </div>
    */} 

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
                  <button className="btn btn-dark">
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
