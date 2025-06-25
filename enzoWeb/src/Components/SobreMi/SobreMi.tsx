import "./SobreMi.css";

export default function SobreMi() {
  return (
    <section className="sobre-mi">
      <div className="titulo">
        <h1 className="btn-shine">SOBRE MÍ</h1>
      </div>

      <div className="contenido">
        <div className="info">
          <h3>Enzo Ibarra</h3>
          <h5>Full-Stack Developer</h5>
          <h6>Desarrollo Web · UX/UI · Backend</h6>
          <p>
            Técnico en Programación, egresado de la Universidad Tecnológica
            Nacional - Mendoza, Argentina. Me especializo en desarrollo
            frontend y backend, diseño UX/UI, y creación de experiencias web
            modernas, funcionales y centradas en el usuario.
          </p>
        </div>

        <div className="foto">
          <img src="/img/desktop.jpg" alt="Enzo trabajando" className="nain" />
        </div>
      </div>
    </section>
  );
}
