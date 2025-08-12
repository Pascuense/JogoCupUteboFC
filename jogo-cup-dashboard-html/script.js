// JOGO CUP Dashboard - JavaScript

// Datos del torneo
const tournamentData = {
  totalTeams: 24,
  totalMatches: 51,
  duration: 3,
  prizePool: 2700,
  dates: {
    start: '26 de Diciembre, 2025',
    end: '28 de Diciembre, 2025'
  },
  groups: [
    { id: 'A', name: 'Grupo A', teams: ['Equipo A1', 'Equipo A2', 'Equipo A3', 'Equipo A4'] },
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

// Datos de horarios
const scheduleData = {
  friday: {
    title: 'Viernes - Fase de Grupos',
    date: '26 de Diciembre, 2025',
    matches: [
      { time: '17:00', field: 'Campo 1', teams: ['Grupo A - P1', 'Equipo A1 vs Equipo A2'], status: 'programado' },
      { time: '17:00', field: 'Campo 2', teams: ['Grupo B - P1', 'Equipo B1 vs Equipo B2'], status: 'programado' },
      { time: '18:00', field: 'Campo 1', teams: ['Grupo C - P1', 'Equipo C1 vs Equipo C2'], status: 'programado' },
      { time: '18:00', field: 'Campo 2', teams: ['Grupo D - P1', 'Equipo D1 vs Equipo D2'], status: 'programado' },
      { time: '19:00', field: 'Campo 1', teams: ['Grupo E - P1', 'Equipo E1 vs Equipo E2'], status: 'programado' },
      { time: '19:00', field: 'Campo 2', teams: ['Grupo F - P1', 'Equipo F1 vs Equipo F2'], status: 'programado' },
      { time: '20:00', field: 'Campo 1', teams: ['Grupo A - P2', 'Equipo A3 vs Equipo A4'], status: 'programado' },
      { time: '20:00', field: 'Campo 2', teams: ['Grupo B - P2', 'Equipo B3 vs Equipo B4'], status: 'programado' },
      { time: '21:00', field: 'Campo 1', teams: ['Grupo C - P2', 'Equipo C3 vs Equipo C4'], status: 'programado' },
      { time: '21:00', field: 'Campo 2', teams: ['Grupo D - P2', 'Equipo D3 vs Equipo D4'], status: 'programado' },
      { time: '22:00', field: 'Campo 1', teams: ['Grupo E - P2', 'Equipo E3 vs Equipo E4'], status: 'programado' },
      { time: '22:00', field: 'Campo 2', teams: ['Grupo F - P2', 'Equipo F3 vs Equipo F4'], status: 'programado' }
    ]
  },
  saturday: {
    title: 'Sábado - Fase de Grupos',
    date: '27 de Diciembre, 2025',
    matches: [
      { time: '10:00', field: 'Campo 1', teams: ['Grupo A - P3', 'Equipo A1 vs Equipo A3'], status: 'programado' },
      { time: '10:00', field: 'Campo 2', teams: ['Grupo B - P3', 'Equipo B1 vs Equipo B3'], status: 'programado' },
      { time: '11:00', field: 'Campo 1', teams: ['Grupo C - P3', 'Equipo C1 vs Equipo C3'], status: 'programado' },
      { time: '11:00', field: 'Campo 2', teams: ['Grupo D - P3', 'Equipo D1 vs Equipo D3'], status: 'programado' },
      { time: '12:00', field: 'Campo 1', teams: ['Grupo E - P3', 'Equipo E1 vs Equipo E3'], status: 'programado' },
      { time: '12:00', field: 'Campo 2', teams: ['Grupo F - P3', 'Equipo F1 vs Equipo F3'], status: 'programado' },
      { time: '13:00', field: 'Campo 2', teams: ['Actividad Especial', 'Crossbar Challenge'], status: 'actividad', isActivity: true },
      { time: '17:00', field: 'Campo 2', teams: ['Actividad Especial', 'Concurso de Toques'], status: 'actividad', isActivity: true }
    ]
  },
  sunday: {
    title: 'Domingo - Fase Final',
    date: '28 de Diciembre, 2025',
    matches: [
      { time: '09:45', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - Exhibición'], status: 'actividad', isActivity: true },
      { time: '10:00', field: 'Campo 1', teams: ['Octavos de Final', '1º Grupo A vs 4º Mejor Tercero'], status: 'programado' },
      { time: '14:00', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - Cuartos de Final'], status: 'actividad', isActivity: true },
      { time: '15:30', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - Semifinales'], status: 'actividad', isActivity: true },
      { time: '17:45', field: 'Campo 1', teams: ['Actividad Especial', '1 vs 1 - FINAL'], status: 'actividad', isActivity: true },
      { time: '18:00', field: 'Campo 1', teams: ['FINAL', 'Ganador Semi 1 vs Ganador Semi 2'], status: 'programado' },
      { time: '19:00', field: 'Campo 1', teams: ['Ceremonia', 'Premiación y Cierre'], status: 'ceremonia', isActivity: true }
    ]
  }
};

// Datos de presupuesto
const budgetData = {
  total: 15750,
  categories: [
    {
      title: 'Premios y Reconocimientos',
      amount: 2700,
      percentage: 17.1,
      color: '#eab308',
      icon: 'fas fa-trophy'
    },
    {
      title: 'Arbitraje y Oficiales',
      amount: 3200,
      percentage: 20.3,
      color: '#3b82f6',
      icon: 'fas fa-users'
    },
    {
      title: 'Instalaciones y Equipamiento',
      amount: 2800,
      percentage: 17.8,
      color: '#10b981',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Catering y Hospitalidad',
      amount: 2500,
      percentage: 15.9,
      color: '#f97316',
      icon: 'fas fa-utensils'
    },
    {
      title: 'Marketing y Promoción',
      amount: 1800,
      percentage: 11.4,
      color: '#8b5cf6',
      icon: 'fas fa-bullhorn'
    },
    {
      title: 'Seguros y Licencias',
      amount: 1200,
      percentage: 7.6,
      color: '#ef4444',
      icon: 'fas fa-shield-alt'
    },
    {
      title: 'Gastos Varios y Contingencia',
      amount: 1550,
      percentage: 9.8,
      color: '#6b7280',
      icon: 'fas fa-calculator'
    }
  ]
};

// Variables globales
let currentTab = 'overview';
let currentDay = 'friday';
let lastUpdate = new Date();

// Inicialización
document.addEventListener('DOMContentLoaded', function() {
  initializeTabs();
  initializeClock();
  generateGroups();
  generateSchedule();
  generateBudget();
  initializeResults();
  
  // Actualizar resultados cada 30 segundos
  setInterval(updateResults, 30000);
});

// Gestión de pestañas
function initializeTabs() {
  const tabTriggers = document.querySelectorAll('.tab-trigger');
  const tabContents = document.querySelectorAll('.tab-content');
  
  tabTriggers.forEach(trigger => {
    trigger.addEventListener('click', function() {
      const tabId = this.getAttribute('data-tab');
      
      // Remover clase active de todos los triggers y contents
      tabTriggers.forEach(t => t.classList.remove('active'));
      tabContents.forEach(c => c.classList.remove('active'));
      
      // Añadir clase active al trigger y content seleccionado
      this.classList.add('active');
      document.getElementById(tabId).classList.add('active');
      
      currentTab = tabId;
    });
  });
}

// Reloj en tiempo real
function initializeClock() {
  function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
    document.getElementById('currentTime').textContent = timeString;
  }
  
  updateClock();
  setInterval(updateClock, 1000);
}

// Generar grupos
function generateGroups() {
  const container = document.getElementById('groupsContainer');
  
  tournamentData.groups.forEach(group => {
    const groupCard = document.createElement('div');
    groupCard.className = 'jogo-card group-card';
    
    groupCard.innerHTML = `
      <div class="card-header">
        <div class="group-header">
          <h3 class="group-title jogo-primary">${group.name}</h3>
          <span class="badge badge-blue">${group.teams.length} equipos</span>
        </div>
      </div>
      <div class="card-content">
        <div class="teams-list">
          ${group.teams.map(team => `
            <div class="team-item">
              <span class="team-name">${team}</span>
              <div class="team-stats">
                <span class="team-points">0 pts</span>
                <div class="team-indicator"></div>
              </div>
            </div>
          `).join('')}
        </div>
        <div class="group-footer">
          <p class="group-note">Clasifican: 2 primeros + 4 mejores terceros</p>
        </div>
      </div>
    `;
    
    container.appendChild(groupCard);
  });
}

// Generar horarios
function generateSchedule() {
  const dayButtons = document.querySelectorAll('[data-day]');
  
  dayButtons.forEach(button => {
    button.addEventListener('click', function() {
      const day = this.getAttribute('data-day');
      
      // Actualizar botones
      dayButtons.forEach(b => {
        b.classList.remove('btn-primary', 'active');
        b.classList.add('btn-outline');
      });
      this.classList.remove('btn-outline');
      this.classList.add('btn-primary', 'active');
      
      // Actualizar contenido
      updateScheduleContent(day);
      currentDay = day;
    });
  });
  
  // Cargar día inicial
  updateScheduleContent('friday');
}

function updateScheduleContent(day) {
  const data = scheduleData[day];
  const titleElement = document.getElementById('scheduleTitle');
  const dateElement = document.getElementById('scheduleDate');
  const matchesContainer = document.getElementById('matchesContainer');
  
  titleElement.innerHTML = `<i class="fas fa-calendar"></i> ${data.title}`;
  dateElement.textContent = data.date;
  
  matchesContainer.innerHTML = data.matches.map(match => `
    <div class="match-item ${match.isActivity ? 'activity' : ''}">
      <div class="match-info">
        <div class="match-time">
          <div class="match-time-value jogo-primary">${match.time}</div>
        </div>
        <div class="match-field">
          <i class="fas fa-map-marker-alt"></i>
          <span>${match.field}</span>
        </div>
        <div class="match-teams">
          <div class="match-title">${match.teams[0]}</div>
          <div class="match-desc">${match.teams[1]}</div>
        </div>
      </div>
      <div class="match-status">
        <span class="badge ${getStatusBadgeClass(match.status)}">
          <i class="${getStatusIcon(match.status)}"></i>
          ${getStatusText(match.status)}
        </span>
      </div>
    </div>
  `).join('');
}

function getStatusBadgeClass(status) {
  switch (status) {
    case 'programado': return 'badge-blue';
    case 'actividad': return 'badge-yellow';
    case 'ceremonia': return 'badge-gray';
    default: return 'badge-gray';
  }
}

function getStatusIcon(status) {
  switch (status) {
    case 'programado': return 'fas fa-clock';
    case 'actividad': return 'fas fa-bolt';
    case 'ceremonia': return 'fas fa-calendar';
    default: return 'fas fa-clock';
  }
}

function getStatusText(status) {
  switch (status) {
    case 'programado': return 'Programado';
    case 'actividad': return 'Actividad';
    case 'ceremonia': return 'Ceremonia';
    default: return status;
  }
}

// Generar presupuesto
function generateBudget() {
  const container = document.getElementById('budgetGrid');
  
  budgetData.categories.forEach(category => {
    const budgetCard = document.createElement('div');
    budgetCard.className = 'jogo-card budget-card';
    
    budgetCard.innerHTML = `
      <div class="card-content">
        <div class="budget-header">
          <div class="budget-icon" style="color: ${category.color}">
            <i class="${category.icon}"></i>
          </div>
          <span class="badge" style="background: ${category.color}; color: white;">
            ${category.percentage}%
          </span>
        </div>
        <h4 class="budget-category jogo-primary">${category.title}</h4>
        <div class="budget-amount jogo-accent">${formatCurrency(category.amount)}</div>
        <div class="budget-bar">
          <div class="budget-fill" style="background: ${category.color}; width: ${category.percentage}%"></div>
        </div>
      </div>
    `;
    
    container.appendChild(budgetCard);
  });
}

// Inicializar resultados
function initializeResults() {
  updateResults();
}

// Actualizar resultados
function updateResults() {
  lastUpdate = new Date();
  document.getElementById('lastUpdate').textContent = formatTime(lastUpdate);
  
  // Simular partidos en curso
  const currentMatches = [
    {
      id: 1,
      teams: ['Equipo A1', 'Equipo A2'],
      score: [2, 1],
      time: '35\'',
      field: 'Campo 1',
      status: 'playing'
    },
    {
      id: 2,
      teams: ['Equipo B1', 'Equipo B2'],
      score: [0, 0],
      time: '12\'',
      field: 'Campo 2',
      status: 'playing'
    }
  ];
  
  const container = document.getElementById('currentMatches');
  container.innerHTML = currentMatches.map(match => `
    <div class="live-match">
      <div class="match-info">
        <div class="match-status">
          <span class="badge live-badge">EN VIVO</span>
          <p class="match-field">${match.field}</p>
        </div>
        <div class="match-teams-live">
          <div class="team-name">${match.teams[0]}</div>
          <div class="match-score">
            <div class="score-value jogo-primary">${match.score[0]} - ${match.score[1]}</div>
            <div class="score-time">${match.time}</div>
          </div>
          <div class="team-name">${match.teams[1]}</div>
        </div>
      </div>
    </div>
  `).join('');
}

// Función para refrescar resultados manualmente
function refreshResults() {
  updateResults();
}

// Utilidades
function formatCurrency(amount) {
  return new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);
}

function formatTime(date) {
  return date.toLocaleTimeString('es-ES', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

// Efectos adicionales
document.addEventListener('DOMContentLoaded', function() {
  // Añadir efectos de hover a las cards
  const cards = document.querySelectorAll('.jogo-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-4px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0) scale(1)';
    });
  });
  
  // Animación de entrada para elementos
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
      }
    });
  }, observerOptions);
  
  // Observar todas las cards
  cards.forEach(card => {
    observer.observe(card);
  });
});

// Funciones de navegación adicionales
function showTab(tabId) {
  const tabTrigger = document.querySelector(`[data-tab="${tabId}"]`);
  if (tabTrigger) {
    tabTrigger.click();
  }
}

// Exportar funciones globales
window.refreshResults = refreshResults;
window.showTab = showTab;

