import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContexts';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
  const { user, setToken, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();

    // Borra token y datos del usuario
    setToken(null);
    setUser(null);
    localStorage.removeItem('token'); // si lo guardas en localStorage
    navigate('/login'); // redirige al login
  };
  
  return (       
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Perfil</h3>
            </div>
            <div className="card-body">
              <form>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email"  value={user?.email || ''} readOnly
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" onClick={handleLogout}>
                    Cerrar Sesión
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
           
  );
};

export default ProfilePage;