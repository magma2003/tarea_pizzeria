import React, { useContext, useState } from 'react';
import { CartContext } from '../components/CartContext';
import { UserContext } from '../contexts/UserContexts'; // 👈 Importa el contexto

const Cart = () => {
  const { cart, addToCart, removeFromCart, updateQuantity, calculateTotal, clearCart } = useContext(CartContext);
  const { token } = useContext(UserContext); // 👈 Extrae el token

  const [message, setMessage] = useState(null); // Mensaje para éxito/error
  const [loading, setLoading] = useState(false);

  const actualizarCantidad = (id, delta) => {
    const item = cart.find(i => i.id === id);
    if (!item) return;

    if (delta === -1 && item.count === 1) {
      removeFromCart(id);
    } else if (delta === -1) {
      removeFromCart(id);
      addToCart({ ...item, count: item.count - 1 });
    } else {
      removeFromCart(id);
      addToCart({ ...item, count: item.count + 1 });
    }
  };

  // Enviar carrito al backend
  const handleCheckout = async () => {
    if (!token) {
      setMessage({ text: "Debes iniciar sesión para pagar", type: "error" });
      return;
    }
    setLoading(true);
    setMessage(null);

    try {
      const res = await fetch("http://localhost:5000/api/checkouts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ cart }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Error en la compra");
      }

      setMessage({ text: "Compra realizada con éxito", type: "success" });
      clearCart(); // Limpia el carrito
      
    } catch (error) {
      setMessage({ text: error.message, type: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handlePay = () => {
    // Aquí iría la lógica real de pago
    alert("¡Gracias por tu compra!");
    clearCart();
  };

  return (
    <main className="container py-5">
      <h2 className="mb-4">Detalles del pedido:</h2>

      <div id="order-list" className="row gy-3">
        {cart.map(item => (
          <div key={item.id} className="col-12">
            <div className="d-flex align-items-center border rounded p-3">

              <div className="me-3" style={{ width: "80px" }}>
                <img src={item.img} className="img-fluid rounded" alt={item.name} />
              </div>

              <div className="d-flex flex-grow-1 justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{item.name}</h5>
                </div>
                <div className="d-flex align-items-center gap-3">
                  <p className="mb-0 text-muted fw-bold">${item.price.toLocaleString()}</p>
                  <div className="btn-group btn-group-sm">
                    <button
                      type="button"
                      className="btn btn-outline-danger"
                      onClick={() => actualizarCantidad(item.id, -1)}
                    >−</button>
                    <span className="px-3">{item.count}</span>
                    <button
                      type="button"
                      className="btn btn-outline-primary"
                      onClick={() => actualizarCantidad(item.id, +1)}
                    >+</button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Total y pagar */}
      <div className="d-flex justify-content-between align-items-center mt-4">
        <h4>Total: ${calculateTotal().toLocaleString()}</h4>
        <button
          className="btn btn-dark btn-lg"
          disabled={!token || loading}
          onClick={handleCheckout}
        >
          {loading ? "Procesando..." : "Pagar"}
        </button>
      </div>

      {/* Mensaje de éxito o error */}
      {message && (
        <div
          className={`alert mt-3 ${
            message.type === "success" ? "alert-success" : "alert-danger"
          }`}
        >
          {message.text}
        </div>
      )}

    </main>
  );
};

export default Cart;
