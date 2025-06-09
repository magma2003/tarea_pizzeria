import './App.css'
import './assets/css/style.css'
import Footer from './components/Footer'
import Home from './components/Home'
import Login from './components/Login'
import Navbar from './components/Navbar'
import Register from './components/Register'

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

      */}
      <Login />
      <p></p>
      <Footer />      
    </>
  )
}

export default App
