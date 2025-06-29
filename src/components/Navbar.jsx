import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const total = 25000;
  const token = false;

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Botones izquierdos */}
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-dark border border-white text-white">🍕 Home</Link>
          {token ? (
            <>
              <Link to="/profile" className="btn btn-dark border border-white text-white">🔓 Profile</Link>
              <Link to="/login" className="btn btn-dark border border-white text-white">🔒 Logout</Link>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-dark border border-white text-white">🔐 Login</Link>
              <Link to="/register" className="btn btn-dark border border-white text-white">🔐 Register</Link>
            </>
          )}
        </div>

        {/* Botón total a la derecha */}
        <div>
          <Link to="/cart" className="btn btn-dark border border-info text-info">
            🛒 Total: ${total.toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
