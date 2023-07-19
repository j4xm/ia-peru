import React from 'react';
import possibilityImage from '../../assets/possibility.png';
import './possibility.css';
import { Link } from 'react-router-dom';
import Boton from '../header/Boton';

const Possibility = () => (
  <div className="gpt3__possibility section__padding" id="possibility">
    <div className="gpt3__possibility-image">
      <img src={possibilityImage} alt="possibility" />
    </div>
    <div className="gpt3__possibility-content">
      <h4>Contáctanos y descubre el potencial de la IA</h4>
      <h1 className="gradient__text">Las posibilidades están <br /> mas allá de tu imaginación</h1>
      <p>Potencial ilimitado: Incrementa tus ventas, atrae más clientes y optimiza tu tiempo. A través de nuestros cursos de ChatGPT, creación de Bots, generación de imágenes con IA y gestión de redes sociales, podrás potenciar y automatizar tu negocio para obtener resultados excepcionales.</p>
      <h4>No esperes más, ponte en contacto con nosotros</h4>
      <Link to={"https://wa.me/+51966477844"} target="_blank">
      <button style={{background: '#e95f40', border: '2px solid #FF4820', cursor: 'pointer'}} type="button button-whatsapp">
        <Boton />
      </button>
    </Link>
    </div>
  </div>
);

export default Possibility;