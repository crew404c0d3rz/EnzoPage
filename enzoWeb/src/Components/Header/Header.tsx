import "./Header.css"
export default function Header (){
    return (<>
    
    <div className="container" >
    <div className="Imagen"><img src="../../../public/img/logoBlanco.png" alt="" /></div>
    <div className="navbar">
        <a href="/Header" className="inicio">Inicio</a>
        <a href="#">Sobre mi</a>
        <a href="#">Proyectos</a>
        <a href="#">Contacto</a>            
    </div>
    <div className="relleno"></div>
    </div>
    
    </>)
}