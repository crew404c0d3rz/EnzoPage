
import './App.css'
import Header from './Components/Header/Header'
import SobreMi from './Components/SobreMi/SobreMi'
import Proyectos from './Components/Proyectos/Proyectos'
import Contacto from './Components/Contacto/Contacto'
function App() {
  

  return (
    <>
   <Header/>
   <div className='principal'><img src="../public/img/principal.jpg" alt="" /></div>
   <SobreMi/>
   <Proyectos/>
   <Contacto/>

    </>
  )
}

export default App
