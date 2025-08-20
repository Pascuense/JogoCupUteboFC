// /js/data/budgetData.js
import { FaTrophy, FaUsers, FaShieldAlt, FaUtensils, FaBullhorn, FaFileAlt, FaMoneyBillAlt  } from "react-icons/fa";

export const budgetData = {
  total: 15750,
  categories: [
    { title: 'Premios y Reconocimientos', amount: 2700, percentage: 17.1, color: '#eab308', icon: <FaTrophy /> },
    { title: 'Arbitraje y Oficiales', amount: 3200, percentage: 20.3, color: '#3b82f6', icon: <FaUsers /> },
    { title: 'Instalaciones y Equipamiento', amount: 2800, percentage: 17.8, color: '#10b981', icon: <FaShieldAlt /> },
    { title: 'Catering y Hospitalidad', amount: 2500, percentage: 15.9, color: '#f97316', icon: <FaUtensils /> },
    { title: 'Marketing y Promoción', amount: 1800, percentage: 11.4, color: '#8b5cf6', icon: <FaBullhorn /> },
    { title: 'Seguros y Licencias', amount: 1200, percentage: 7.6, color: '#ef4444', icon: <FaFileAlt  /> },
    { title: 'Gastos Varios y Contingencia', amount: 1550, percentage: 9.8, color: '#6b7280', icon: <FaMoneyBillAlt /> }
  ]
};
