import './App.css'
import './assets/css/style.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import CartPage from './pages/CartPage'
import PizzaPage from './pages/PizzaPage'
import NotFoundPage from './pages/NotFoundPage'
import ProfilePage from './pages/ProfilePage'

function App() {

  return (
    <>      
      <Navbar />
      <p></p>
      
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/pizza" element={<PizzaPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
      <p></p>

      <Footer />   
      <p></p>   
    </>
  )
}

export default App
