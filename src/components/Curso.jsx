import { useState } from "react";

function Curso(props) {
    const [interesados, setInteresados] = useState(0);
    const [registrar, setRegistrar] = useState(0);

    function agregarInteresado() {
        setInteresados((prevInteresados) => prevInteresados + 1);
    }

    function agregarRegistrar() {
        setRegistrar((prevRegistrar) => prevRegistrar + 1);
    }

    function mostrarmensaje() {
        alert(`¡Bienvenido al curso de ${props.nombre}!`);
    }

    function inscribirme() {
        alert(`¡Inscrito al curso de ${props.nombre}!`);
    }

    return (
        <div>
            <h3>{props.nombre}</h3>
            <p>{props.descripcion}</p>

            <p>Personas interesadas: {interesados}</p>
            
            <p>Personas registradas: {registrar}</p>

            <button onClick={mostrarmensaje}>
                ver informacion
            </button>

            <button onClick={inscribirme}>
                inscribirme
            </button>

            <button onClick={agregarInteresado}>
                Me interesa
            </button>
            
            <button onClick={agregarRegistrar}>
                Registrado
            </button>
        </div>
    );
}

export default Curso;