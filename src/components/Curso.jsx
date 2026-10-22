import { useState } from "react";

function Curso({ nombre, descripcion, temas }) {
  // Estado para saber si la descripción está abierta/desplegada
  const [mostrarInfo, setMostrarInfo] = useState(false);

  return (
    <div style={estilos.card}>
      <h3>{nombre}</h3>

      {/* Botón único para desplegar u ocultar detalles */}
      <button 
        style={estilos.boton} 
        onClick={() => setMostrarInfo(!mostrarInfo)}
      >
        {mostrarInfo ? "Ocultar descripción 🔼" : "Ver descripción 🔽"}
      </button>

      {/* Solo se muestra la descripción si mostrarInfo es true */}
      {mostrarInfo && (
        <div style={estilos.detalles}>
          <p>{descripcion}</p>
          {temas && (
            <ul>
              {temas.map((tema, i) => (
                <li key={i}>{tema}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

const estilos = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "15px",
    margin: "10px 0",
    backgroundColor: "#fff"
  },
  boton: {
    padding: "8px 15px",
    backgroundColor: "#003366",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer"
  },
  detalles: {
    marginTop: "12px",
    paddingTop: "10px",
    borderTop: "1px solid #eee"
  }
};

export default Curso;