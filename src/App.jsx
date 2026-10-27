import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css"; 

import Header from "./components/Header";
import Navbar from "./components/Navbar";
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

  return (
    <BrowserRouter>
      <Header />
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos cursos={cursos} />} />
          <Route path="/registro" element={<Registro cursos={cursos} />} />
          <Route path="/UsuarioApi" element={<UsuarioApi />} />
          <Route
            path="/administrar-cursos"
            element={<GestionCursos cursos={cursos} setCursos={setCursos} />}
          />
          
          
          <Route path="/aprendiz" element={<Aprendiz />} />
          <Route path="/instructores" element={<Instructores />} />
          <Route path="/fichas" element={<Fichas />} />
          <Route path="/competencia" element={<Competencia />} />
          <Route path="/evaluaciones" element={<Evaluaciones />} />
          <Route path="*" element={<h2>Página no encontrada</h2>} />

          
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;