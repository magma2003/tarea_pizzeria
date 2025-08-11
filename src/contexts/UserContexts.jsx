import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext();

const UserProvider = ({ children }) => {

  //Estados para token y email
  const [token, setToken] = useState(localStorage.getItem("token") || null);
  const [email, setEmail] = useState(localStorage.getItem("email") || null);

  //Guardar cambios en localStorage cada vez que token o email cambien
  useEffect(() => {
    if (token && email) {
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
    } else {
      localStorage.removeItem("token");
      localStorage.removeItem("email");
    }
  }, [token, email]);

    //Login
  const login = async (emailInput, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password }),
      });

      if (!res.ok) throw new Error("Error en login");

      const data = await res.json(); // { token: "...", email: "..." }

      setToken(data.token); // token JWT
      setEmail(data.email);
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

   //Registro
  const register = async (emailInput, password) => {
    try {
      const res = await fetch("http://localhost:5000/api/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: emailInput, password }),
      });

      if (!res.ok) throw new Error("Error en registro");

      const data = await res.json();

      setToken(data.token); // token JWT
      setEmail(data.email);
    } catch (error) {
      console.error("Register error:", error);
      throw error;
    }
  };

   //Obtener perfil autenticado
  const getProfile = async () => {
    if (!token) {
      console.warn("No hay token, el usuario no está autenticado");
      return null;
    }

    try {
      const res = await fetch("http://localhost:5000/api/auth/me", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // JWT en el header
        },
      });

      if (!res.ok) throw new Error("Error al obtener perfil");

      const data = await res.json(); // debería devolver { email: "..." }
      setEmail(data.email); // sincronizar email
      return data;
    } catch (error) {
      console.error("Error en getProfile:", error);
      throw error;
    }
  };

  //Cerrar sesión
  const logout = () => {
    setToken(null);
    setEmail(null);
    localStorage.removeItem("token");
    localStorage.removeItem("email");
  };

  return (
    <UserContext.Provider value={{ token, email, login, register, logout, getProfile }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
