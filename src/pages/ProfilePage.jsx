import React from 'react'

const ProfilePage = () => {
  return (       
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header">
              <h3 className="text-center">Registro</h3>
            </div>
            <div className="card-body">
              <form>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" value="mauricio_carrasco@gmail.cl"
                  />
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary">
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