
import './App.css'
import Header from './Components/Header/Header'
import SobreMi from './Components/SobreMi/SobreMi'
// import Proyectos from './Components/Proyectos/Proyectos'
import Contacto from './Components/Contacto/Contacto'
import Footer from './Components/Footer/Footer'
function App() {
  

  return (
    <>
   <div id='home'><Header/></div>
   <div className='principal'>
  <img src="/img/principal.jpg" alt="Imagen principal" />
  <div className="texto-superpuesto">
    <h1>ENZO IBARRA</h1>
    <h2>DEVELOPER</h2>
  </div>
</div>
   <div id='sobreMi'><SobreMi/></div>
   {/* <Proyectos/> */}
   <div id='contacto'><Contacto/></div>
   <Footer/>

    </>
  )
}

export default App
