import React from 'react';
import "./About.css";
const About = () => {
  return (
    <div className="about-container">
      <h1 className='title'>APLICACIÓN DE VIDEOJUEGOS</h1>
      <p>
        Esta es una aplicación de un  (SPA) construida con React, Node.js y PostgreSQL. 
        Permite obtener información de videojuegos a través de una API externa y también crear tus propios videojuegos mediante un formulario y almacenarlos en la base de datos.
      </p>
      <h2 className='title1'>Características</h2>
      <ul>
        <li>Visualización de videojuegos desde una API externa</li>
        <li>Creación de nuevos videojuegos mediante un formulario</li>
        <li>Almacenamiento de videojuegos en una base de datos PostgreSQL</li>
        <li>Rutas y navegación con React Router</li>
        <li>Componentes reutilizables</li>
        <li>Estilización con CSS</li>
        <li>Filtros para ordenar videojuegos por nombre alfabeticamente y por su rating</li>
        <li>Búsqueda de videojuegos por nombre</li>
        <li>Integración de Redux para el manejo del estado</li>
      </ul>
      <h2 className='title2'>Tecnologías utilizadas</h2>
      <ul>
        <li>React</li>
        <li>Node.js</li>
        <li>PostgreSQL</li>
        <li>React Router</li>
        <li>Axios (para realizar peticiones HTTP)</li>
        <li>Styled CSS</li>
        <li>Redux (para el manejo del estado)</li>
        <li> VSCODE</li>
      </ul>
    </div>
  );
};

export default About;
