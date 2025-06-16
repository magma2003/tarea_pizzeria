import React from 'react';

const CardPizza = (props) => {
  return (
    <div className="card h-100 text-center" style={{ width: '18rem' }}>
      <img src={props.prod.img} alt={props.prod.name} className="card-img-top" />
      
      <div className="card-body">
        <h5 className="card-title">{props.prod.name}</h5>
        <hr />
        <p className="card-text">
          Ingredientes: <br />
          {/*{props.prod.ingredients.join(', ')}*/}
          <ul className="list-unstyled text-start">
            {props.prod.ingredients.map((ing, index) => (
              <li key={index}>🍕  {ing}</li>
            ))}
          </ul>
        </p>
        <hr />
        <p className="fw-bold">Precio: ${props.prod.price}</p>
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
 
         /*    
      <div className="card h-100 text-center" style={{ width: '18rem' }}>
      <img src={props.img} alt={props.name} className="card-img-top" />
      
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <hr />
        <p className="card-text">
          🍕 Ingredientes: <br />
          {props.ingredients.join(', ')}
        </p>
        <hr />
        <p className="fw-bold">Precio: ${props.price}</p>
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
    */   

  );
};

export default CardPizza;
