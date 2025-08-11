import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../contexts/UserContexts";

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [messageType, setMessageType] = useState('');
    
    const { login } = useContext(UserContext);
    const navigate = useNavigate();

    // Función para manejar el envío del formulario
    const validarDatos = async (e) => {
      e.preventDefault();
    
      // Validaciones
      if (!email.trim() || !password.trim()) {
        setMessage('Todos los campos son obligatorios');
        setMessageType('error');
        return;
      }
    
      if (password.trim().length < 6) {
        setMessage('La contraseña debe tener al menos 6 caracteres');
        setMessageType('error');
        return;
      }
    
      try {
        await login(email, password); // Llamamos al backend
        setMessage("¡Login exitoso!");
        setMessageType("success");

        setTimeout(() => {
          navigate("/profile"); // redirige a la página de perfil
        }, 1000);
      } catch (error) {
        setMessage("Error en login: " + error.message);
        setMessageType("error");
      }
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

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
                    Login
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

export default LoginPage;