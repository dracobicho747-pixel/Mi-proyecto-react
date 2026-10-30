// src/pages/registro.jsx
import { useState } from "react";

function Registro({ cursos, setAprendices, aprendices }) {
    const [nombre, setNombre] = useState("");
    const [correo, setCorreo] = useState("");
    const [mensaje, setMensaje] = useState("");

    function registrarAprendiz(evento) {
        evento.preventDefault();

        // 1. Creamos el objeto del nuevo aprendiz
        const nuevoAprendiz = {
            id: Date.now(),
            name: nombre,
            email: correo,
            address: { city: "Ciénaga" } // Puedes ajustarlo o pedirlo en el formulario
        };

        // 2. Lo agregamos al estado global que viene de App.jsx
        setAprendices([...aprendices, nuevoAprendiz]);

        setMensaje("¡Aprendiz registrado con éxito!");
        setNombre("");
        setCorreo("");
    }

    return (
        <section style={{ padding: "1rem", maxWidth: "500px", margin: "0 auto" }}>
            <h2>Registrar nuevo aprendiz</h2>
            
            <form onSubmit={registrarAprendiz} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                <div>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Nombre completo: </label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        required
                        placeholder="Escribe tu nombre"
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>
                
                <div>
                    <label style={{ display: "block", marginBottom: "0.5rem" }}>Correo electrónico: </label>
                    <input
                        type="email"
                        value={correo}
                        onChange={(e) => setCorreo(e.target.value)}
                        required
                        placeholder="correo@ejemplo.com"
                        style={{ width: "100%", padding: "0.5rem" }}
                    />
                </div>

                <button 
                    type="submit" 
                    style={{ padding: "0.75rem", backgroundColor: "#007bff", color: "white", border: "none", cursor: "pointer", borderRadius: "4px" }}
                >
                    Registrar
                </button>
            </form>

            {mensaje && <p style={{ marginTop: "1rem", fontWeight: "bold", color: "green" }}>{mensaje}</p>}
        </section>
    );
}

export default Registro;