// src/App.jsx
import { useState, useEffect } from "react"; // 1. Importamos useEffect
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import GestionCursos from "./components/GestionCursos";

import Inicio from "./pages/inicio";
import Cursos from "./pages/cursos";
import Registro from "./pages/registro";
import UsuarioApi from "./pages/UsuarioApi";
import Aprendiz from "./pages/Aprendiz"; 
import Instructores from "./pages/Instructores";
import Fichas from "./pages/Fichas";
import Competencia from "./pages/Competencia";
import Evaluaciones from "./pages/Evaluaciones";

function App() {
  const [cursos, setCursos] = useState([
    {
      id: 1,
      nombre: "Diseño Web",
      descripcion: "Creación de interfaces modernas y atractivas.",
      informacion: "Aprenderás HTML, CSS y fundamentos de diseño web.",
    },
    {
      id: 2,
      nombre: "Desarrollo de Software",
      descripcion: "Construcción de aplicaciones tecnológicas.",
      informacion: "Aprenderás programación y desarrollo de aplicaciones.",
    },
    {
      id: 3,
      nombre: "Bases de Datos",
      descripcion: "Diseño y administración de datos.",
      informacion: "Aprenderás modelado, normalización y SQL.",
    },
  ]);

  // 2. Estado de aprendices
  const [aprendices, setAprendices] = useState([]);
  const [cargando, setCargando] = useState(true);

  // 3. Consultamos la API al cargar la aplicación por primera vez
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((respuesta) => respuesta.json())
      .then((datos) => {
        setAprendices(datos); // Cargamos los usuarios de la API en el estado
      })
      .catch((error) => console.error("Error al cargar aprendices:", error))
      .finally(() => setCargando(false));
  }, []);

  return (
    <Router>
      <Header />
      <Navbar />

      <main style={{ padding: "2rem" }}>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos cursos={cursos} />} />
          
          {/* Pasamos aprendices y setAprendices al registro */}
          <Route 
            path="/registro" 
            element={<Registro cursos={cursos} setAprendices={setAprendices} aprendices={aprendices} />} 
          />
          
          {/* Pasamos la lista y el estado de carga a la página de Aprendiz */}
          <Route 
            path="/aprendiz" 
            element={<Aprendiz aprendices={aprendices} cargando={cargando} />} 
          />
          
          <Route 
            path="/administrar-cursos" 
            element={<GestionCursos cursos={cursos} setCursos={setCursos} />} 
          />
          <Route path="/UsuarioApi" element={<UsuarioApi />} />
          <Route path="/instructores" element={<Instructores />} />
          <Route path="/fichas" element={<Fichas />} />
          <Route path="/competencia" element={<Competencia />} />
          <Route path="/evaluaciones" element={<Evaluaciones />} />
          
          <Route path="*" element={<h2>Página no encontrada</h2>} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;