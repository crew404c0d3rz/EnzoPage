import "./Proyectos.css"

export default function Proyectos(){


    return(<section className="proyectos" id="proyectos">
      <h2 className="titulo-seccion">Mis Proyectos</h2>
      <div className="grid-proyectos">

        {/* Proyecto 1 */}
        <div className="card-proyecto">
          <img src="/img/logo_buenSabor.png" alt="Proyecto 1" />
          <div className="contenido-proyecto">
            <h3>El buen sabor</h3>
            <p>Sistema de gestion de un restaurante, Api rest con Java Springboot, ReacNode y auth como control de accesos</p>
          </div>
        </div>

        {/* Proyecto 2 */}
        <div className="card-proyecto">
          <img src="/img/logoBlanco.png" alt="Proyecto 2" />
          <div className="contenido-proyecto">
            <h3>Página personal</h3>
            <p>Aplicación ReacNode profesional para explayar informacion personal</p>
          </div>
        </div>

        {/* Proyecto 3 */}
        <div className="card-proyecto">
          <img src="/img/proyecto3.jpg" alt="Proyecto 3" />
          <div className="contenido-proyecto">
            <h3>Portfolio Web</h3>
            <p>Sitio web personal hecho con Vite, React y Tailwind, completamente responsive.</p>
          </div>
        </div>

      </div>
    </section>)
}