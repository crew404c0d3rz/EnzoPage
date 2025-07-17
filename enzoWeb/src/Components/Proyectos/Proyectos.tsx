import "./Proyectos.css"

export default function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <h1><span id="mi">Mi </span><span id="portfolio">Portfolio</span></h1>

      <div className="cards-container">

        {/* Carta 1 */}
        <div className="card">
          <div className="carousel">
            <img src="/img/logSabor.png" alt="Vista 1" />
            <img src="/img/cajero.png" alt="Vista 2" />
            <img src="/img/empleados.png" alt="Vista 3" />
          </div>
          <div className="card-content">
            <h2>Aplicación Web "Buen Sabor"</h2>
            <p id="parraf">Gestión integral para restaurante: pedidos, productos, stock y más.</p>
            <div className="tecnologias">
              <span className="usado">React</span>
              <span className="usado">Spring Boot</span>
              <span className="usado">MySQL</span>
              <span className="usado">CSS</span>
              <span className="usado">Axios</span>
              <span className="usado">JWT</span>
            </div>
          </div>
        </div>

        {/* Carta 2 */}
        <div className="card">
          <div className="carousel">
            <img src="/img/landingMosh.png" alt="Vista 1" />
            <img src="/img/food.png" alt="Vista 2" />
            <img src="/img/carrito.png" alt="Vista 3" />
          </div>
          <div className="card-content">
            <h2>E-commerce hamburguesas</h2>
            <p id="parraf">Sitio web para venta de productos electrónicos con carrito y pagos simulados.</p>
            <div className="tecnologias">
              <span className="usado">HTML</span>
              <span className="usado">CSS</span>
              <span className="usado">JavaScript</span>
              <span className="usado">React</span>
              <span className="usado">Spring Boot</span>
              <span className="usado">MySQL</span>
            </div>
          </div>
        </div>

        {/* Carta 3 */}
        <div className="card">
          <div className="carousel">
            <img src="/img/mipag.png" alt="Vista 1" />
            <img src="/img/sobreMi.png" alt="Vista 2" />
            <img src="/img/contactame.png" alt="Vista 3" />

          </div>
          <div className="card-content">
            <h2>Portfolio Personal</h2>
            <p id="parraf">Mi sitio personal donde muestro mis proyectos, habilidades y contacto profesional.</p>
            <div className="tecnologias">
              <span className="usado">React</span>
              <span className="usado">CSS</span>
              <span className="usado">HTML</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
