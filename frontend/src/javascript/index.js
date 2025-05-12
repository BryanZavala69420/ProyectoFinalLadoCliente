import React from "react";
import { Link } from "react-router-dom";
import '../css/index.css';
import ListarItems2 from "../jsx/ListarItems2";

function Index() {
  const sesionActiva = localStorage.getItem("sesionIniciada") === "true";
  const usuarioNombre = localStorage.getItem("usuarioNombre");

  return (
    <div className="pagina">
      <header>
        <div className="titulo">
          <div className="top-bar">
            {sesionActiva ? (
              <>
                <button className="cerrar" onClick={() => {
                  localStorage.removeItem("sesionIniciada");
                  localStorage.removeItem("usuarioNombre");
                  window.location.reload();
                }}>Cerrar sesión</button>
                <p className="usuario-nombre">Usuario: {usuarioNombre}</p>
              </>
            ) : (
              <div className="botonesExtra">
                <Link to="/registrar" className="botonExtra1">Registrar</Link>
                <Link to="/sesion" className="botonExtra1">Iniciar Sesión</Link>
              </div>
            )}
          </div>
          <h1>Página principal</h1>
        </div>
      </header>

      <main className="contenido">
        <section className="titulo2">
          <h2>Checa nuestros productos!!</h2>
          <div className="accionesInferiores">
            <Link className="detallito" to="/items">Ver mas productos</Link>
            <Link className="contacto" to="/contacto">Contactanos</Link>
          </div>
        </section>

        <div>
          <ListarItems2 />
        </div>
      </main>

      <footer className="patas">
        <p>Todos los derechos reservados al equipo de la materia de Programación Web al lado del servidor</p>
      </footer>
    </div>
  );
}

export default Index;
