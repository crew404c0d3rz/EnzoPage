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
            <a href="https://www.linkedin.com/in/enzo-ibarra-1359272b7/" target="_blank" data-social="linkedin" rel="noreferrer">
              <i className="bi bi-linkedin"></i>
              <span>LinkedIn</span>
            </a>
          </li>
          <li>
            <a href="https://github.com/crew404c0d3rz" target="_blank" data-social="github" rel="noreferrer">
              <i className="bi bi-github"></i>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/enzoibarraa_?igsh=dDdzN2NianlmaWow" target="_blank" data-social="instagram" rel="noreferrer">
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
          <li>
              <a
                href="https://wa.me/5492616274027?text=Hola%20Enzo!%20Quiero%20hacerte%20una%20consulta%20/%20propuesta%20sobre...%20"
                target="_blank"
                data-social="whatsapp"
                rel="noreferrer"
              >
                <i className="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>
          </li>
        </ul>
      </div>
    </section>
  );
}
