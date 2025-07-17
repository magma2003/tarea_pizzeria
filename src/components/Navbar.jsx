import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContexts';
import { CartContext } from './CartContext';


const Navbar = () => {
  const { calculateTotal } = useContext(CartContext);
  const { token, logout } = useContext(UserContext); // Obtenemos token y logout
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();       // Elimina el token del contexto
    navigate('/');  // Redirige al home luego del logout
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <span className="navbar-brand mb-0 h1">Pizzería Mamma Mia!</span>

      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Botones izquierdos */}
        <div className="d-flex gap-2">
          <Link to="/" className="btn btn-dark border border-white text-white">🍕 Home</Link>
          {token ? (
            <>
              <NavLink to="/profile" className="btn btn-dark border border-white text-white">🔓 Profile</NavLink>
              {/* <NavLink to="/login" className="btn btn-dark border border-white text-white">🔒 Logout</NavLink> */}
              <button onClick={handleLogout} className="btn btn-dark border border-white text-white">🔒 Logout</button>
            </>
          ) : (
            <>
              <NavLink to="/login" className="btn btn-dark border border-white text-white">🔐 Login</NavLink>
              <NavLink to="/register" className="btn btn-dark border border-white text-white">🔐 Register</NavLink>
            </>
          )}
        </div>

        {/* Botón total a la derecha */}
        <div>
          <Link to="/cart" className="btn btn-dark border border-info text-info">
            🛒 Total: ${calculateTotal().toLocaleString()}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
