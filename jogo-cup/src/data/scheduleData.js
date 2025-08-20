// /js/data/scheduleData.js

export const scheduleData = {
  friday: {
    title: 'Viernes - Fase de Grupos',
    date: '26 de Diciembre, 2025',
    matches: [
      { time: '17:00', field: 'Campo 1', teams: ['Grupo A - P1', 'Equipo A1 vs Equipo A2'], status: 'terminado', isActivity: false  },
      { time: '17:00', field: 'Campo 2', teams: ['Grupo B - P1', 'Equipo B1 vs Equipo B2'], status: 'terminado', isActivity: false  },
      { time: '18:00', field: 'Campo 1', teams: ['Grupo C - P1', 'Equipo C1 vs Equipo C2'], status: 'terminado', isActivity: false  },
      { time: '18:00', field: 'Campo 2', teams: ['Grupo D - P1', 'Equipo D1 vs Equipo D2'], status: 'terminado', isActivity: false  },
      { time: '19:00', field: 'Campo 1', teams: ['Grupo E - P1', 'Equipo E1 vs Equipo E2'], status: 'terminado', isActivity: false  },
      { time: '19:00', field: 'Campo 2', teams: ['Grupo F - P1', 'Equipo F1 vs Equipo F2'], status: 'terminado', isActivity: false  },
      { time: '20:00', field: 'Campo 1', teams: ['Grupo A - P2', 'Equipo A3 vs Equipo A4'], status: 'terminado', isActivity: false  },
      { time: '20:00', field: 'Campo 2', teams: ['Grupo B - P2', 'Equipo B3 vs Equipo B4'], status: 'terminado', isActivity: false  },
      { time: '21:00', field: 'Campo 1', teams: ['Grupo C - P2', 'Equipo C3 vs Equipo C4'], status: 'en vivo', isActivity: false  },
      { time: '21:00', field: 'Campo 2', teams: ['Grupo D - P2', 'Equipo D3 vs Equipo D4'], status: 'en vivo', isActivity: false  },
      { time: '22:00', field: 'Campo 1', teams: ['Grupo E - P2', 'Equipo E3 vs Equipo E4'], status: 'programado', isActivity: false  },
      { time: '22:00', field: 'Campo 2', teams: ['Grupo F - P2', 'Equipo F3 vs Equipo F4'], status: 'programado', isActivity: false  }
    ]
  },
  saturday: {
    title: 'Sábado - Fase de Grupos',
    date: '27 de Diciembre, 2025',
    matches: [
      { time: '10:00', field: 'Campo 1', teams: ['Grupo A - P3', 'Equipo A1 vs Equipo A3'], status: 'programado', isActivity: false  },
      { time: '10:00', field: 'Campo 2', teams: ['Grupo B - P3', 'Equipo B1 vs Equipo B3'], status: 'programado', isActivity: false  },
      { time: '11:00', field: 'Campo 1', teams: ['Grupo C - P3', 'Equipo C1 vs Equipo C3'], status: 'programado', isActivity: false  },
      { time: '11:00', field: 'Campo 2', teams: ['Grupo D - P3', 'Equipo D1 vs Equipo D3'], status: 'programado', isActivity: false  },
      { time: '12:00', field: 'Campo 1', teams: ['Grupo E - P3', 'Equipo E1 vs Equipo E3'], status: 'programado', isActivity: false  },
      { time: '12:00', field: 'Campo 2', teams: ['Grupo F - P3', 'Equipo F1 vs Equipo F3'], status: 'programado', isActivity: false  },
      { time: '13:00', field: 'Campo 2', teams: ['Actividad Especial', 'Crossbar Challenge'], status: 'actividad', isActivity: true },
      { time: '17:00', field: 'Campo 2', teams: ['Actividad Especial', 'Concurso de Toques'], status: 'actividad', isActivity: true }
    ]
  },
  sunday: {
    title: 'Domingo - Fase Final',
    date: '28 de Diciembre, 2025',
    matches: [
      { time: '09:45', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - Exhibición'], status: 'actividad', isActivity: true },
      { time: '10:00', field: 'Campo 1', teams: ['Octavos de Final', '1º Grupo A vs 4º Mejor Tercero'], status: 'programado', isActivity: false },
      { time: '14:00', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - Cuartos de Final'], status: 'actividad', isActivity: true },
      { time: '15:30', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - Semifinales'], status: 'actividad', isActivity: true },
      { time: '17:45', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - FINAL'], status: 'actividad', isActivity: true },
      { time: '18:00', field: 'Campo 1', teams: ['FINAL', 'Ganador Semi 1 vs Ganador Semi 2'], status: 'programado', isActivity: false  },
      { time: '19:00', field: 'Campo 1', teams: ['Ceremonia', 'Premiación y Cierre'], status: 'ceremonia', isActivity: true }
    ]
  }
};
