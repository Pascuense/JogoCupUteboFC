import { FaBolt } from "react-icons/fa6";
import { IoIosFootball } from "react-icons/io";
import { BiCrosshair } from "react-icons/bi";
import { BsPersonRaisedHand } from "react-icons/bs";


export default function Activities() {
  const activities = [
    {
      title: "1 vs 1",
      desc: "Competencia individual destacada",
      badge: "Destacada",
      badgeClass: "badge-red",
      iconClass: "bg-red",
      icon: <IoIosFootball />
    },
    {
      title: "Crossbar Challenge",
      desc: "Desafío de precisión",
      badge: "Especial",
      badgeClass: "badge-blue",
      iconClass: "bg-blue",
      icon: <BiCrosshair />
    },
    {
      title: "Concurso de Toques",
      desc: "Habilidad técnica en duplas",
      badge: "Aleatoria",
      badgeClass: "badge-green",
      iconClass: "bg-green",
      icon: <BsPersonRaisedHand />
    },
  ];

  return (
    <div className="tab-content animate-fade-in">
      <div className="jogo-card">
        <div className="card-header">
          <h3 className="card-title jogo-primary">
            <FaBolt className="iconoNuevo" /> Actividades Especiales
          </h3>
        </div>
        <div className="card-content">
          <div className="activities-grid">
            {activities.map((act, idx) => (
              <div
                key={idx}
                className={`activity-card activity-${
                  act.badgeClass.includes("red")
                    ? "high"
                    : act.badgeClass.includes("green")
                    ? "low"
                    : "medium"
                }`}>
                <div className="activity-header">
                  <div className={`activity-icon ${act.iconClass}`}>
                    {act.icon}
                  </div>
                  <span className={`badge ${act.badgeClass}`}>{act.badge}</span>
                </div>
                <h4 className="activity-title">{act.title}</h4>
                <p className="activity-desc">{act.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
