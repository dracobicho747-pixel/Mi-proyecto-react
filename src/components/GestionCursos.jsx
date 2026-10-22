import { useState } from "react";

function GestionCursos({cursos, setCursos}) {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");
    const [informacion, setInformacion] = useState("");
    const [idEditado, setIdEditado] = useState (null);
    const [mensaje, setMensaje] = useState("");


    function limpiarFormulario(){
        setNombre("");
        setDescripcion("");
        setInformacion("");
        setIdEditado(null);
    }

    function manejarEnvio(evento){
        evento.preventDefault

        if nombre.trim() ==="" ||
            descripcion.trim() ==="" ||
            informacion.trim() === ||
        
    )

    }
}