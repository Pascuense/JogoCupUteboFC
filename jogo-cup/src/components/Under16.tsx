export default function Under16() {
  return (
    <div className="tab-content animate-fade-in">
      <div className="jogo-card">
        <div className="card-header">
          <h3 className="card-title jogo-primary">
            <i className="fas fa-user-check"></i> Maratón Sub-16
          </h3>
        </div>
        <div className="card-content">
          <div className="under16-info">
            <div className="info-section">
              <h4>Información General</h4>
              <p>Torneo especial para jugadores menores de 16 años</p>
              <p>
                <strong>Fecha límite de inscripción:</strong> 20 de Junio de 2024 - 14:00 horas
              </p>
              <p>
                <strong>Contacto:</strong> info@jogocup.com
              </p>
            </div>

            <div className="info-section">
              <h4>Documentación Requerida</h4>
              <ul>
                <li>Hoja de inscripción completa</li>
                <li>Autorización de menores firmada</li>
                <li>Copia del DNI del menor</li>
                <li>Copia del DNI del tutor legal</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
