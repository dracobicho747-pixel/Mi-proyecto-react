import Header from "./components/Header.jsx";
import Navbar from "./components/Navbar.jsx";
import Curso from "./components/Curso.jsx";
import Footer from "./components/Footer.jsx";
import RegistroAprendiz from "./components/RegistroAprendiz.jsx";
import PresentacionAprendiz from "./components/PresentacionAprendiz";
function App() {
  function saludar() {
    alert("¡bienvenido al centro nacional colombo aleman!");
  }

  return (
    <div>
      <Header />
      <Navbar />

      <main id="inicio">
        <h2>Bienvenidos a nuestro portal de formacion</h2>

        <button onClick={saludar}>
          Haz click aqui
        </button>

        <section id="cursos">
          <h2>Nuestros cursos</h2>
          <p>
            Ofrecemos una variedad de cursos para ayudarte a desarrollar tus
            habilidades y alcanzar tus metas profesionales.
          </p>

          <Curso
            nombre="Desarrollo Web"
            descripcion="Aprende a crear páginas web modernas y atractivas."
          />

          <Curso
            nombre="Bases de Datos"
            descripcion="Aprende a gestionar y manipular bases de datos."
          />

          <Curso
            nombre="Inteligencia Artificial"
            descripcion="Aprende a desarrollar soluciones basadas en inteligencia artificial."
          />

          <Curso
            nombre="Programación con Java"
            descripcion="Aprende a desarrollar aplicaciones y soluciones mediante Java."
          />

          <Curso
            nombre="Curso de Python"
            descripcion="Aprende a programar con Python."
          />
        </section>

        <section id="nosotros">
          <h2>Sobre nosotros</h2>
          <p>
            Somos un centro de formación comprometido con el desarrollo de
            nuestros estudiantes y la excelencia educativa.
          </p>
        </section>

        <section id="contacto">
          <h2>Contacto</h2>
          <p>
            Puedes contactarnos a través de nuestro correo electrónico o número
            de teléfono para más información sobre nuestros cursos.
          </p>
        </section>
      </main>

      <RegistroAprendiz />
      
      
      <PresentacionAprendiz />

      <Footer />
    </div>
  );
}

export default App;