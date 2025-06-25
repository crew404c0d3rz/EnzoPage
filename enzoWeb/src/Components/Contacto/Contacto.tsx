import "./Contacto.css";

export default function Contacto() {
  return (
    <section className="contacto">
      <div className="contacto-contenido">

        <div className="contacto-texto">
          <h2>¡Trabajá conmigo!</h2>
          <p>Si te interesa crear algo juntos, no dudes en contactarme a través de mis redes o por WhatsApp.</p>
        </div>

        <ul className="social-icons">
          <li>
            <a href="https://linkedin.com" target="_blank" data-social="linkedin" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com" target="_blank" data-social="github" rel="noreferrer">
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" data-social="instagram" rel="noreferrer">
              <i className="bi bi-instagram"></i>
              <span>Instagram</span>
            </a>
          </li>
          <li>
            <a href="https://youtube.com" target="_blank" data-social="youtube" rel="noreferrer">
              <i className="bi bi-youtube"></i>
              <span>YouTube</span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
