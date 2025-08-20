import { useEffect, useState } from "react";
import { tournamentData } from '../data/tournamentData.js'; // ajusta la ruta según tu proyecto


interface Group {
  name: string;
  teams: string[];
}

export default function Groups() {
  const [groups, setGroups] = useState<Group[]>([]);

  useEffect(() => {
    setGroups(tournamentData.groups); // directamente los datos del módulo
    console.log("Groups component mounted");
  }, []);

  return (
    <div className="tab-content animate-fade-in" id="overview">
      <div className="groups-grid">
        {groups.map((group) => (
          <div className="jogo-card group-card" key={group.name}>
            <div className="card-header">
              <div className="group-header">
                <h3 className="group-title jogo-primary">{group.name}</h3>
                <span className="badge badge-green"><strong>En juego</strong></span>
              </div>
            </div>
            <div className="card-content card-group">
              <div className="teams-list">
                {group.teams.map((team, idx) => (
                  <div className="team-item" key={idx}>
                    <span className="team-name-groups">{team}</span>
                    <div className="team-stats-grups">
                    <span className="team-points-grups">0 pts</span>
                    <div className="team-indicator-grups"></div>
                  </div>
                </div>
              ))}
              </div>
              <div className="group-footer">
                <p className="group-note">Clasifican: 2 primeros + 4 mejores terceros</p>
              </div>
            </div>
          </div>          
        ))}
      </div>
    </div>
  );
}
