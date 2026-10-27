import { useEffect, useState } from "react";

function UsuarioApi() {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsuarios(data);
        setCargando(false);
      })
      .catch((error) => console.error("Error al cargar datos:", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Lista de Usuarios (API)</h2>
      {cargando ? (
        <p>Cargando datos...</p>
      ) : (
        <ul>
          {usuarios.map((usuario) => (
            <li key={usuario.id}>{usuario.name} - {usuario.email}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default UsuarioApi;
 
        
        
    
