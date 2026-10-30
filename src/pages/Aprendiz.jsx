// src/pages/Aprendiz.jsx
function Aprendiz({ aprendices, cargando }) {
  return (
    <section style={{ padding: "1rem" }}>
      <h2>Lista de Aprendices (API + Registrados)</h2>

      {cargando && <p>Cargando información...</p>}

      {!cargando && aprendices.length === 0 && (
        <p>No hay aprendices registrados todavía.</p>
      )}

      {!cargando && aprendices.length > 0 && (
        <div style={{ display: "grid", gap: "1rem", marginTop: "1rem" }}>
          {aprendices.map((aprendiz) => (
            <article key={aprendiz.id} style={{ border: "1px solid #ccc", padding: "1rem", borderRadius: "8px" }}>
              <h3>{aprendiz.name}</h3>
              <p><strong>Correo:</strong> {aprendiz.email}</p>
              <p><strong>Ciudad:</strong> {aprendiz.address?.city || "Ciudad no especificada"}</p>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default Aprendiz;