// /js/data/tournamentData.js

export const tournamentData = {
  totalTeams: 24,
  totalMatches: 51,
  duration: 3,
  prizePool: 2700,
  dates: {
    start: '26 de Diciembre, 2025',
    end: '28 de Diciembre, 2025'
  },
  groups: [
    { id: 'A', name: 'Grupo A', teams: ['Utebo FC B Pulimas SL Agroveco Tecnocsas utebo', 'Equipo A2', 'Equipo A3', 'Equipo A4'] },
    { id: 'B', name: 'Grupo B', teams: ['Equipo B1', 'Equipo B2', 'Equipo B3', 'Equipo B4'] },
    { id: 'C', name: 'Grupo C', teams: ['Equipo C1', 'Equipo C2', 'Equipo C3', 'Equipo C4'] },
    { id: 'D', name: 'Grupo D', teams: ['Equipo D1', 'Equipo D2', 'Equipo D3', 'Equipo D4'] },
    { id: 'E', name: 'Grupo E', teams: ['Equipo E1', 'Equipo E2', 'Equipo E3', 'Equipo E4'] },
    { id: 'F', name: 'Grupo F', teams: ['Equipo F1', 'Equipo F2', 'Equipo F3', 'Equipo F4'] }
  ],
  activities: [
    { name: '1 vs 1', description: 'Competencia individual destacada', priority: 'high' },
    { name: 'Crossbar Challenge', description: 'Desafío de precisión', priority: 'medium' },
    { name: 'Concurso de Toques', description: 'Habilidad técnica en duplas', priority: 'medium' }
  ]
};
