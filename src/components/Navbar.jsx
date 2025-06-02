import React from 'react';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Botones izquierdos */}
        <div className="d-flex gap-2">
          <button className="btn btn-dark border border-white text-white">🍕 Home</button>
          {token ? (
            <>
              <button className="btn btn-dark border border-white text-white">🔓 Profile</button>
              <button className="btn btn-dark border border-white text-white">🔒 Logout</button>
            </>
          ) : (
            <>
              <button className="btn btn-dark border border-white text-white">🔐 Login</button>
              <button className="btn btn-dark border border-white text-white">🔐 Register</button>
            </>
          )}
        </div>

        {/* Botón total a la derecha */}
        <div>
          <button className="btn btn-dark border border-info text-info">
            🛒 Total: ${total.toLocaleString()}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
