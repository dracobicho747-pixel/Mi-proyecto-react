import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Curso from "./components/Curso.jsx";
import Footer from "./components/Footer.jsx";
import RegistroAprendiz from "./components/RegistroAprendiz.jsx";
import PresentacionAprendiz from "./components/PresentacionAprendiz";

function App() {
  // Lista de cursos para renderizar de forma limpia usando .map()
  const listaCursos = [
    { nombre: "Desarrollo Web", descripcion: "Aprende a crear páginas web modernas y atractivas." },
    { nombre: "Bases de Datos", descripcion: "Aprende a gestionar y manipular bases de datos." },
    { nombre: "Inteligencia Artificial", descripcion: "Aprende a desarrollar soluciones basadas en inteligencia artificial." },
    { nombre: "Programación con Java", descripcion: "Aprende a desarrollar aplicaciones y soluciones mediante Java." },
    { nombre: "Curso de Python", descripcion: "Aprende a programar con Python." }
  ];

  return (
    <div>
      <Header />
      <Navbar />

      <main id="inicio">
        <h2>Bienvenidos a nuestro portal de formación</h2>

        {/* Sección de Cursos */}
        <section id="cursos">
          <h2>Nuestros cursos</h2>
          <p>
            Ofrecemos una variedad de cursos para ayudarte a desarrollar tus
            habilidades y alcanzar tus metas profesionales.
          </p>

          <div className="cursos-grid">
            {listaCursos.map((curso, index) => (
              <Curso
                key={index}
                nombre={curso.nombre}
                descripcion={curso.descripcion}
              />
            ))}
          </div>
        </section>

        {/* Sección Sobre Nosotros */}
        <section id="nosotros">
          <h2>Sobre nosotros</h2>
          <p>
            Somos un centro de formación comprometido con el desarrollo de
            nuestros estudiantes y la excelencia educativa.
          </p>
        </section>

        {/* Sección Contacto */}
        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Puedes contactarnos a través de nuestro correo electrónico o número
            de teléfono para más información sobre nuestros cursos.
          </p>
        </section>
      </main>

      <RegistroAprendiz />
      <PresentacionAprendiz cursos={listaCursos} />
      <Footer />
    </div>
  );
}

export default App;