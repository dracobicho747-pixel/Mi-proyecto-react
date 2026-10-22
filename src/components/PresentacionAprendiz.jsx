import { useState } from "react";

function PresentacionAprendiz({ cursos = [] }) {
  const [nombre, setNombre] = useState("");
  const [cursoSeleccionado, setCursoSeleccionado] = useState("");

  return (
    <section style={estilos.contenedor}>
      <h2>Mi presentación</h2>
      
      <div style={estilos.campo}>
        <label>Escribe tu nombre: </label>
        <input 
          type="text" 
          placeholder="Ejemplo: Gabriel"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div style={estilos.campo}>
        <label>¿Qué curso te interesa? </label>
        {/* Menú desplegable con los cursos */}
        <select 
          value={cursoSeleccionado} 
          onChange={(e) => setCursoSeleccionado(e.target.value)}
        >
          <option value="">-- Selecciona un curso --</option>
          {cursos.map((curso, index) => (
            <option key={index} value={curso.nombre}>
              {curso.nombre}
            </option>
          ))}
        </select>
      </div>

      {nombre && cursoSeleccionado && (
        <p style={estilos.mensaje}>
          ¡Hola <strong>{nombre}</strong>! Has seleccionado el curso de <strong>{cursoSeleccionado}</strong>.
        </p>
      )}
    </section>
  );
}

const estilos = {
  contenedor: {
    padding: "20px",
    margin: "20px 0",
    border: "1px solid #ddd",
    borderRadius: "8px"
  },
  campo: {
    margin: "10px 0"
  },
  mensaje: {
    marginTop: "15px",
    color: "#003366",
    fontWeight: "bold"
  }
};

export default PresentacionAprendiz;
