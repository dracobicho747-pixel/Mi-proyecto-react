import { useState } from "react";

function GestionCursos({ cursos, setCursos }) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [informacion, setInformacion] = useState("");
    const [idEditado, setIdEditado] = useState(null);
    const [mensaje, setMensaje] = useState("");

    function limpiarFormulario() {
        setNombre("");
        setDescripcion("");
        setInformacion("");
        setIdEditado(null);
    }

    // AQUÍ ESTÁ EL CÓDIGO NUEVO
    function manejarEnvio(evento) {
        evento.preventDefault();

        // 1. Validar campos vacíos
        if (
            nombre.trim() === "" ||
            descripcion.trim() === "" ||
            informacion.trim() === ""
        ) {
            setMensaje("Todos los campos son obligatorios.");
            return;
        }

        // 2. Crear el nuevo objeto del curso con ID único
        const nuevoCurso = {
            id: Date.now(), 
            nombre: nombre,
            descripcion: descripcion,
            informacion: informacion
        };

        // 3. Agregar el nuevo curso a la lista global de App.jsx
        setCursos([...cursos, nuevoCurso]);

        // 4. Notificar al usuario y limpiar el formulario
        setMensaje("¡Curso agregado con éxito!");
        limpiarFormulario();
    }

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
            <h2>Gestión de Cursos</h2>
            
            {mensaje && (
                <p style={{ color: mensaje.includes("obligatorios") ? "red" : "green" }}>
                    {mensaje}
                </p>
            )}

            <form onSubmit={manejarEnvio}>
                <div style={{ marginBottom: "10px" }}>
                    <label>Nombre del Curso:</label>
                    <input 
                        type="text" 
                        value={nombre} 
                        onChange={(e) => setNombre(e.target.value)} 
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Descripción:</label>
                    <textarea 
                        value={descripcion} 
                        onChange={(e) => setDescripcion(e.target.value)} 
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <div style={{ marginBottom: "10px" }}>
                    <label>Información Adicional:</label>
                    <textarea 
                        value={informacion} 
                        onChange={(e) => setInformacion(e.target.value)} 
                        style={{ width: "100%", padding: "8px", marginTop: "5px" }}
                    />
                </div>

                <button type="submit" style={{ padding: "10px 15px", cursor: "pointer" }}>
                    {idEditado ? "Guardar Cambios" : "Agregar Curso"}
                </button>
            </form>
        </div>
    );
}

export default GestionCursos;
