import { useEffect, useRef, useState } from "react";
import { documentsData } from "../data/documentsData"; // ojo al nombre del archivo
import { ReactNode } from "react";
import { FaClock, FaCheckCircle  } from "react-icons/fa";
import { FaFileCircleCheck, FaFileCircleQuestion } from "react-icons/fa6";
import { AiOutlineLike, AiOutlineDislike  } from "react-icons/ai";
import { IoMdDownload } from "react-icons/io";


interface Pendientes {
  title: string;
  description: string;
  date: string;
  numberTicks: number;
  numberCross: number;
  person: string;
}

interface Aceptados {
  title: string;
  description: string;
  date: string;
  person: string;
}

export default function Documents() {
  const [pendientes, setPendientes] = useState<Pendientes[]>([]);
  const [aceptados, setAceptados] = useState<Aceptados[]>([]);
  const [selectedTab, setSelectedTab] = useState<"pendientes" | "aceptados">("pendientes");
  const [isModalOpenSubida, setIsModalOpenSubida] = useState(false);
  const [fileName, setFileName] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement | null>(null);

const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setFileName(e.target.files[0].name);
  } else {
    setFileName("");
  }
};

const handleRemoveFile = () => {
  setFileName(""); // limpiamos el nombre en la UI
  if (fileInputRef.current) {
    fileInputRef.current.value = ""; // limpiamos el input file real
  }
};

const openModalSubida = () => {
  setIsModalOpenSubida(true);
};

const closeModalSubida = () => {
  setIsModalOpenSubida(false);
};

const handleSubmitSubida = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  closeModalSubida();
};


useEffect(() => {
  // cargamos los datos desde documentsData
  setPendientes(documentsData.pendientes);
  setAceptados(documentsData.aceptados);
}, []);

useEffect(() => {
  if (isModalOpenSubida) {
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
}, [isModalOpenSubida]);

return (
  <div className="tab-content animate-fade-in">
    {/* Botones de control */}
    <div className="schedule-controls">
      <button
        className={`btn ${selectedTab === "pendientes" ? "btn-primary active" : "btn-outline"}`}
        onClick={() => setSelectedTab("pendientes")}
      >
        <i><FaClock /></i>
        Pendientes
      </button>
      <button
        className={`btn ${selectedTab === "aceptados" ? "btn-primary active" : "btn-outline"}`}
        onClick={() => setSelectedTab("aceptados")}
      >
        <i><FaCheckCircle  /></i>
        Aceptados
      </button>
    </div>

    {isModalOpenSubida && (
      <div className="modal-overlay"   
        onClick={closeModalSubida} // clic en el fondo cierra el modal
        style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', overflow: 'auto', backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000 }}>
        <div className="modal-content"     
        onClick={(e) => e.stopPropagation()} // ✨ evita cerrar al hacer clic dentro
        >
          <h1 className="gradient-text">Subir nuevo archivo</h1>
          <form onSubmit={handleSubmitSubida} className="modal-form">
            <label>
              <input type="text" name="title" placeholder="Título" required />
            </label>
            <label>
              <input type="text" name="description" placeholder="Descripción" required />
            </label>
            <label>
              <input type="text" name="person" placeholder="Responsable" required />
            </label>
            <label>
              <input type="text" name="date" placeholder="Fecha" required />
            </label>
            <label className="custom-file-upload">
                <input 
                    ref={fileInputRef}
                    type="file" 
                    name="file" 
                    accept=".pdf,.doc,.docx,.jpg,.png" 
                    required 
                    onChange={handleFileChange} 
                />
                📂 Seleccionar archivo
            </label>
            {fileName && (
                <div className="file-info">
                <span className="file-name">{fileName}</span>
                <p 
                style={{ cursor: "pointer", display: "inline" }} 
                onClick={handleRemoveFile}
                >
                ❌
                </p>
               </div>
            )}
            <button type="submit">Guardar</button>
            <button type="button" onClick={closeModalSubida}>Cancelar</button>
          </form>
        </div>
      </div>
    )}

    {/* CONTENIDO SEGÚN LA TAB SELECCIONADA */}
    {selectedTab === "pendientes" && (
      <>
        <div className="jogo-card schedule-card">
          <div className="card-header-documents">
            <h3 className="card-title jogo-primary">
              <FaFileCircleQuestion /> Documentos pendientes
            </h3>
            <button className="add-btn-documents" onClick={() => openModalSubida()}>+</button>
          </div>
          <div className="card-content match-group">
            <div className="matches-container" id="matchesContainer">
                {pendientes.map((item, index) => (
                <div className={`gastos-card Colaborador-card`} key={index}>
                  {/* Columna izquierda */}
                  <div className="gastos-left">
                    <p className="documents-title">{item.title}</p>
                    <p className="documents-description">{item.description}</p>
                    <p className="documents-person">Subido por {item.person} el {item.date}</p>
                  </div>

                  {/* Columna derecha */}
                  <div className="gastos-right">
                    <div className="documents-likes">
                        <IoMdDownload className="icono_download" /> 
                        {item.numberTicks}
                        <AiOutlineLike className="iconos_like" /> 
                        {item.numberCross} 
                        <AiOutlineDislike className="iconos_like" />
                    </div>
                  </div>
                </div>
                ))}
            </div>
            </div>
        </div>
      </>
    )}

    {selectedTab === "aceptados" && (
      <div>
        <div className="jogo-card schedule-card">
          <div className="card-header text-center">
            <h3 className="card-title jogo-primary">
              <FaFileCircleCheck /> Documentos aceptados previamente
            </h3>
          </div>
          <div className="card-content match-group">
            <div className="matches-container" id="matchesContainer">
                {aceptados.map((item, index) => (
                <div className={`gastos-card Aceptados-card`} key={index}>
                  {/* Columna izquierda */}
                  <div className="gastos-left">
                    <p className="documents-title-green">{item.title}</p>
                    <p className="documents-description">{item.description}</p>
                    <p className="documents-person">Subido por {item.person} el {item.date}</p>
                  </div>

                  {/* Columna derecha */}
                  <div className="gastos-right">
                    <div className="budget-amount win"><IoMdDownload className="icono_download"/><FaCheckCircle className="iconos_check"/></div>
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
