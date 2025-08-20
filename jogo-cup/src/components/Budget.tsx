import { useEffect, useState } from "react";
import { budgetData } from "../data/bugedData"; // ojo al nombre del archivo
import { balanceData } from "../data/balanceData"; // ojo al nombre del archivo
import { ReactNode } from "react";
import { TbPigMoney } from "react-icons/tb";
import { MdCurrencyExchange } from "react-icons/md";
import { GiReceiveMoney, GiPayMoney  } from "react-icons/gi";

import { 
  FaEuroSign,FaBalanceScale , FaTrophy, FaUsers, FaShieldAlt, FaUtensils, FaBullhorn, FaFileAlt, FaMoneyBillAlt, FaCalendarDay } from "react-icons/fa";

interface Category {
  title: string;
  amount: number;
  percentage: number;
  color: string;
  icon: ReactNode;
}

interface Gastos {
  title: string;
  category: string;
  amount: number;
  date: string;
  color: string;
  person: string;
  colorname: string;
}

interface Ingresos {
  title: string;
  level: string;
  amount: number;
  date: string;
  person: string;
  color: string;
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}

export default function Budget() {
  const [total, setTotal] = useState<number>(0);
  const [categories, setCategories] = useState<Category[]>([]);
  const [gastos, setGastos] = useState<Gastos[]>([]);
  const [ingresos, setIngresos] = useState<Ingresos[]>([]);
  const [balanceTotal, setBalanceTotal] = useState<number>(0);
  const [selectedTab, setSelectedTab] = useState<"presupuesto" | "gastos">("presupuesto");
  const [isModalOpenIngreso, setIsModalOpenIngreso] = useState(false);
  const [isModalOpenGasto, setIsModalOpenGasto] = useState(false);


const openModalIngreso = () => {
  setIsModalOpenIngreso(true);
};

const openModalGasto = () => {
  setIsModalOpenGasto(true);
};

const closeModalGasto = () => {
  setIsModalOpenGasto(false);
};

const closeModalIngreso = () => {
  setIsModalOpenIngreso(false);
};

const handleSubmitIngreso = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  closeModalIngreso();
};

const handleSubmitGasto = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  closeModalGasto();
};

useEffect(() => {
  // cargamos los datos desde budgetData
  setTotal(budgetData.total);
  setCategories(budgetData.categories);
  setBalanceTotal(balanceData.total);
  setGastos(balanceData.gastos);
  setIngresos(balanceData.ingresos);
}, []);

useEffect(() => {
  if (isModalOpenGasto || isModalOpenIngreso) {
    // Bloquea el scroll
    document.body.style.overflow = "hidden";
  } else {
    // Restaura el scroll
    document.body.style.overflow = "auto";
  }

  // Cleanup por si el componente se desmonta
  return () => {
    document.body.style.overflow = "auto";
  };
}, [isModalOpenGasto, isModalOpenIngreso]);

return (
  <div className="tab-content animate-fade-in">
    {/* Botones de control */}
    <div className="schedule-controls">
      <button
        className={`btn ${selectedTab === "presupuesto" ? "btn-primary active" : "btn-outline"}`}
        onClick={() => setSelectedTab("presupuesto")}
      >
        <i><TbPigMoney /></i>
        Presupuesto
      </button>
      <button
        className={`btn ${selectedTab === "gastos" ? "btn-primary active" : "btn-outline"}`}
        onClick={() => setSelectedTab("gastos")}
      >
        <i><MdCurrencyExchange /></i>
        Gastos/Ingresos
      </button>
    </div>

    {isModalOpenGasto && (
      <div className="modal-overlay"   
        onClick={closeModalGasto} // clic en el fondo cierra el modal
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }}>
        <div className="modal-content">
          <h1 className="gradient-text">Añadir Nuevo Gasto</h1>
          <form onSubmit={handleSubmitGasto} className="modal-form">
            <label>
              <input type="text" name="title" placeholder="Título" required />
            </label>
            <label>
              <input type="text" name="category" placeholder="Categoría" required />
            </label>
            <label>
              <input type="text" name="person" placeholder="Responsable" required />
            </label>
            <label>
              <input type="number" name="amount" placeholder="€" required />
            </label>
            <label>
              <input type="text" name="date" placeholder="Fecha" required />
            </label>
            <button type="submit">Guardar</button>
            <button type="button" onClick={closeModalGasto}>Cancelar</button>
          </form>
        </div>
      </div>
    )}

    {isModalOpenIngreso && (
      <div className="modal-overlay"   
        onClick={closeModalIngreso} // clic en el fondo cierra el modal
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }}>
        <div className="modal-content">
          <h1 className="gradient-text">Añadir Nuevo Ingreso</h1>
          <form onSubmit={handleSubmitIngreso} className="modal-form">
            <label>
              <input type="text" name="title" placeholder="Título" required />
            </label>
            <label>
              <input type="text" name="level" placeholder="Nivel" required />
            </label>
            <label>
              <input type="text" name="person" placeholder="Responsable" required />
            </label>
            <label>
              <input type="number" name="amount" placeholder="€" required />
            </label>
            <label>
              <input type="text" name="date" placeholder="Fecha" required />
            </label>
            <button type="submit">Guardar</button>
            <button type="button" onClick={closeModalIngreso}>Cancelar</button>
          </form>
        </div>
      </div>
    )}

    {/* CONTENIDO SEGÚN LA TAB SELECCIONADA */}
    {selectedTab === "presupuesto" && (
      <>
        <div className="jogo-card">
          <div className="card-header text-center">
            <h3 className="card-title jogo-primary">
              <FaEuroSign /> Presupuesto del Torneo
            </h3>
            <div className="budget-total">
              <div className="total-amount jogo-accent">
                {total.toLocaleString("es-ES")}€
              </div>
              <p className="total-desc">Inversión total para el evento</p>
            </div>
          </div>
        </div>
        <div className="budget-grid">
          {categories.map((item, index) => (
            <div className="jogo-card budget-card" key={index}>
              <div className="card-content">
                <div className="budget-header">
                  <div className="budget-icon" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <span
                    className="badge"
                    style={{ background: item.color, color: "white" }}
                  >
                    {item.percentage}%
                  </span>
                </div>
                <h4 className="budget-category jogo-primary">{item.title}</h4>
                <div className="budget-amount jogo-accent">
                  {formatCurrency(item.amount)}
                </div>
                <div className="budget-bar">
                  <div
                    className="budget-fill"
                    style={{
                      background: item.color,
                      width: `${item.percentage}%`,
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </>
    )}

    {selectedTab === "gastos" && (
      <div>
        <div className="jogo-card">
          <div className="card-header text-center">
            <h3 className="card-title jogo-primary">
              <FaBalanceScale /> 
              Balance general
            </h3>
            <div className="budget-total">
              <div className="total-amount jogo-accent">
                {balanceTotal.toLocaleString("es-ES")}€
              </div>
              <p className="total-desc">Dinero actual del que disponemos</p>
            </div>
          </div>
        </div>
        <div className="budget-grid">
          <div className="jogo-card balance-card">
            <div className="card-header-balance text-center">
              <h4 className="card-title-balance jogo-primary"><GiPayMoney /> Gastos</h4>
              <button className="add-btn" onClick={() => openModalGasto()}>+</button>
            </div>
            <div className="card-content-balance">
              {gastos.map((item, index) => (
                <div className={`gastos-card ${item.colorname}-card`} key={index}>
                  {/* Columna izquierda */}
                  <div className="gastos-left">
                    <div className="balance-header">
                      <span
                        className="badge"
                        style={{ background: item.color, color: "white" }}
                      >
                        {item.category}
                      </span>
                    </div>
                    <p className="budget-title" style={{ color: item.color }}>{item.title}</p>
                    <p className="budget-person">{item.person}</p>
                  </div>

                  {/* Columna derecha */}
                  <div className="gastos-right">
                    <div className="budget-amount lost">{formatCurrency(item.amount)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tarjeta Ingresos */}
          <div className="jogo-card balance-card">
            <div className="card-header-balance text-center">
              <h4 className="card-title-balance jogo-primary"><GiReceiveMoney /> Ingresos</h4>
              <button className="add-btn" onClick={() => openModalIngreso()}>+</button>
            </div>
            <div className="card-content-balance">
              {ingresos.map((item, index) => (
                <div className={`gastos-card ${item.level}-card`} key={index}>
                  {/* Columna izquierda */}
                  <div className="gastos-left">
                    <div className="balance-header">
                      <span
                        className="badge"
                        style={{ background: item.color, color: "white" }}
                      >
                        {item.level}
                      </span>
                    </div>
                    <p className="budget-title" style={{ color: item.color }}>{item.title}</p>
                    <p className="budget-person">{item.person}</p>
                  </div>

                  {/* Columna derecha */}
                  <div className="gastos-right">
                    <div className="budget-amount win">{formatCurrency(item.amount)}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
);
}
