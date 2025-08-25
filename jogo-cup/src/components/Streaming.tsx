import { MdLiveTv } from "react-icons/md"

export default function Streaming() {
  const streams = [
    { title: "Campo 1", desc: "Cámara principal", viewers: 245 },
    { title: "Campo 2", desc: "Cámara secundaria", viewers: 189 },
    { title: "Vista General", desc: "Panorámica del evento", viewers: 312 },
    { title: "Zona de Actividades", desc: "1vs1 y actividades especiales", viewers: 156 },
  ];

  return (
    <div className="tab-content animate-fade-in">
      <div className="jogo-card">
        <div className="card-header">
          <h3 className="card-title jogo-primary">
            <MdLiveTv /> Transmisión en Vivo
          </h3>
        </div>
        <div className="card-content">
          <div className="streaming-grid">
            {streams.map((stream, idx) => (
              <div className="stream-card" key={idx}>
                <div className="stream-placeholder">
                  <i className="fas fa-video"></i>
                  <h4>{stream.title}</h4>
                  <p>{stream.desc}</p>
                  <span className="viewers">👥 {stream.viewers} viewers</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
