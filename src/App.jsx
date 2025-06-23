import './App.css'
import './assets/css/style.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'
import Cart from './components/Cart'
import Pizza from './components/Pizza'

function App() {

  return (
    <>      
      <Navbar />
      <p></p>

{/* 
      <Home /> 
      <p></p>
    
      <Register />
      <p></p>     

      <Login />
      <p></p>
 
      <Cart />
      <p></p>  

  */}
      <Pizza />
      <p></p>

      <Footer />   
      <p></p>   
    </>
  )
}

export default App
