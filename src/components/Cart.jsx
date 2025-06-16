import React from 'react';
import { useState } from 'react';
import { pizzaCart } from '../assets/resources/pizzas.js';

const Cart = () => {
  const [items, setItems] = useState(pizzaCart);

  const actualizarCantidad = (id, delta) => {
    setItems(prev => 
       prev
        .map(item =>
          item.id === id
            ? { ...item, count: item.count + delta }
            : item
        )
        .filter(item => item.count > 0)
    );
  };


  return (
    <main className="container py-5">
      <h2 className="mb-4">Detalles del pedido:</h2>

      <div id="order-list" className="row gy-3">
        {items.map(item => (
          <div key={item.id} className="col-12">
            <div className="d-flex align-items-center border rounded p-3">
            
              <div className="me-3" style={{ width: "80px" }}>
                <img
                  src={item.img}
                  className="img-fluid rounded"
                  alt={item.name}
                />
              </div>

              <div className="d-flex flex-grow-1 justify-content-between align-items-center">          
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <p className="mb-0 text-muted fw-bold">${item.price.toLocaleString()}</p>
                  <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-outline-danger"
                      onClick={() => actualizarCantidad(item.id, -1)}
                    > − </button>
                    <span className="px-3">{item.count}</span>
                    <button type="button" className="btn btn-outline-primary"
                      onClick={() => actualizarCantidad(item.id, +1)}
                    > + </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Total y pagar */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4> Total: $
          {items
            .reduce((acc, item) => acc + item.count * item.price, 0)
            .toLocaleString()}
        </h4>
        <button className="btn btn-dark btn-lg">Pagar</button>
      </div>
    </main>
  );
};

export default Cart;