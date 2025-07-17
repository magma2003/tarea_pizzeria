import './App.css'
import './assets/css/style.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import PizzaPage from './pages/PizzaPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'
import CartProvider from './components/CartContext'
import Cart from './pages/Cart'
import { useContext } from 'react'
import { UserContext } from './contexts/UserContexts'


function App() {

  const { token } = useContext(UserContext); // 👈 Extrae el token
  return (
    <>      
      <CartProvider> 
        <Navbar />
        <p></p>
        
        <Routes>
          <Route path="/" element={<HomePage />} />

           {/* Rutas públicas protegidas si el usuario ya está logueado */}
          <Route path="/login" element={token ? <Navigate to="/" /> : <LoginPage />} />
          <Route path="/register" element={token ? <Navigate to="/" /> : <RegisterPage />} />

          <Route path="/cart" element={<Cart />} />
          <Route path="/pizza/:id" element={<PizzaPage />} />

          {/* Ruta protegida */}
          <Route path="/profile" element={token ? <ProfilePage /> : <Navigate to="/login" />} />

          {/* Página no encontrada */}
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
        <p></p>

        <Footer />   
        <p></p>
      </CartProvider>   
    </>
  )
}

export default App
