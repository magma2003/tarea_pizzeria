import React, { useEffect, useState } from 'react';
import { data, useParams } from 'react-router-dom';

const PizzaPage = () => {
  const { id } = useParams();
  const [pizza, setPizza] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    consultarApi();
  }, [id]);

  const consultarApi = async () => {
      const url = `http://localhost:5000/api/pizzas/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Pizza no encontrada");
        const data = await response.json();
        setPizza(data);
      } catch (err) {
        setError(err.message);
        setPizza(null);
        console.log(data);
      }
    };

    if (error) {
      return (
        <div className="container mt-4">
          <h2>Error: {error}</h2>
          <p>No se pudo cargar la pizza con ID: {id}</p>
        </div>
      );
    }

    if (!pizza) {
      return (
        <div className="container mt-4">
          <h2>Cargando pizza...</h2>
        </div>
      );
  }

  return (
    <div className="container my-4">
      <div className="card mx-auto" style={{ maxWidth: "600px" }}>
        <img src={pizza.img} alt={pizza.name} className="card-img-top" />
        <div className="card-body text-center">
          <h4 className="card-title">{pizza.name}</h4>
          <p>{pizza.desc}</p>
          <hr />
          <div>
            <strong>Ingredientes:</strong>
            <ul className="list-unstyled text-start">
              {pizza.ingredients.map((ing, index) => (
                <li key={index}>🍕 {ing}</li>
              ))}
            </ul>
          </div>
          <hr />
          <p className="fw-bold">Precio: ${pizza.price.toLocaleString()}</p>
          <div className="d-flex justify-content-center gap-2 mt-3">
            <button className="btn btn-dark">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaPage;
