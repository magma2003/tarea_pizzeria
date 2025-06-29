import React from 'react'
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="container text-center my-5">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3595/3595455.png"
        alt="404 Pizza Not Found"
        style={{ width: '150px', marginBottom: '20px' }}
      />
      <h1 className="display-4">404 - ¡No encontramos la pizza!</h1>
      <p className="lead">
        Lo sentimos, la página que buscas no está en el menú 🍕.
      </p>
      <Link to="/" className="btn btn-danger btn-lg mt-3">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFoundPage;