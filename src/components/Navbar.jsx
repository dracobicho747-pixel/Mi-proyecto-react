import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      {
       
      }
      <Link to="/">Inicio</Link>
      <Link to="/cursos">Cursos</Link>
      <Link to="/registro">Registro</Link>
      <Link to="/administrar-cursos">Administrar cursos</Link>
    </nav>
  );
}

export default Navbar;
