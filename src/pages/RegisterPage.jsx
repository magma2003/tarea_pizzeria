import React, { useState } from 'react';

const RegisterPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  // Función para manejar el envío del formulario
const validarDatos = (e) => {
  e.preventDefault();

  // Validaciones
  if (!email.trim() || !password.trim() || !confirmPassword.trim()) {
    setMessage('Todos los campos son obligatorios');
    setMessageType('error');
    return;
  }

  if (password.trim().length < 6) {
    setMessage('La contraseña debe tener al menos 6 caracteres');
    setMessageType('error');
    return;
  }

  if (password.trim() !== confirmPassword.trim()) {
    setMessage('Las contraseñas no coinciden');
    setMessageType('error');
    return;
  }

  // Si pasa todas las validaciones
  setMessage('¡Registro exitoso!');
  setMessageType('success');

  // Limpiar campos
  setEmail('');
  setPassword('');
  setConfirmPassword('');

  // Borrar mensaje luego de 3 segundos
  setTimeout(() => {
    setMessage('');
    setMessageType('');
  }, 3000);
};

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Registro</h3>
            </div>
            <div className="card-body">
              <form onSubmit={validarDatos}>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Ingresa tu email"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Contraseña
                  </label>
                  <input type="password" className="form-control" id="password" value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Ingresa tu contraseña"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="confirmPassword" className="form-label">
                    Confirmar Contraseña
                  </label>
                  <input type="password" className="form-control" id="confirmPassword" value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirma tu contraseña"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Registrarse
                  </button>
                </div>
              </form>

              {message && (
                <div className={`alert mt-3 ${messageType === 'success' ? 'alert-success' : 'alert-danger'}`}>
                    {message}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;