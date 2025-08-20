'use client'

import { useState, useEffect } from "react";
import { FaCalendar, FaTrophy, FaAward, FaUserCheck, FaVideo, FaEuroSign } from "react-icons/fa";
import { FaUsers, FaBolt, FaNewspaper  } from "react-icons/fa6";

interface TabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Tabs({ activeTab, setActiveTab }: TabsProps) {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Solo se ejecuta en el navegador
    setIsAdmin(localStorage.getItem('admin') === 'true');
  }, []);

  const tabs = [
    { id: "overview", label: "Resumen", icon: <FaTrophy /> },
    { id: "groups", label: "Grupos", icon: <FaUsers /> },
    { id: "schedule", label: "Calendario", icon: <FaCalendar /> },
    { id: "activities", label: "Actividades", icon: <FaBolt /> },
    { id: "results", label: "Resultados", icon: <FaAward /> },
    { id: "under16", label: "Sub-16", icon: <FaUserCheck /> },
    { id: "streaming", label: "En Vivo", icon: <FaVideo /> },
    { id: "budget", label: "Economía", icon: <FaEuroSign /> },
    { id: "documents", label: "Documentos", icon: <FaNewspaper /> },
  ];

  // Filtramos el tab de presupuesto si no es admin
  const restrictedTabs = ['budget'/*, 'documents'*/]; // tabs que solo ven los admins
  const visibleTabs = tabs.filter(tab => !restrictedTabs.includes(tab.id) || isAdmin);
  return (
    <div className="tabs-container">
      <div className="tabs-list">
        {visibleTabs.map((tab) => (
          <button
            key={tab.id}
            className={`tab-trigger ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => setActiveTab(tab.id)}
          >
            <i className="iconos_tab">{tab.icon}</i>
            {tab.label}
          </button>
        ))}
      </div>
    </div>
  );
}
