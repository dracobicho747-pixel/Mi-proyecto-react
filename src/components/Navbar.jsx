// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/cursos">Cursos</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/administrar-cursos">Administrar cursos</Link>
      <Link to="/UsuarioApi">UsuarioApi</Link>
      <Link to="/aprendiz">Aprendiz</Link>
      <Link to="/instructores">Instructores</Link>
      <Link to="/fichas">Fichas</Link>
      <Link to="/competencia">Competencia</Link>
      <Link to="/evaluaciones">Evaluaciones</Link>
    </nav>
  );
}

export default Navbar;