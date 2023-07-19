import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

import './header.css';
import Boton from './Boton';
import { Link } from 'react-router-dom';

const Header = () => {

return (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Hagamos algo increíble con Inteligencia Artificial</h1>
      <p>Aprende Inteligencia Artificial a tu propio ritmo y con un instructor personal: Cursos adaptados para todas las edades, descubre nuevas habilidades y potencia tu conocimiento en el fascinante mundo de la IA.</p>

      <div className="gpt3__header-content__input">
        <h2>{`Adquiere habilidades innovadoras que impulsarán tus actividades al siguiente nivel. Más información al whatsapp ->`}</h2>
        <Link to={'https://wa.me/+51966477844'} target="_blank" >
        <button type="button button-whatsapp">
          <Boton />
        </button>
        </Link>
        
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>Muchas personas ya están aprendiendo con nosotros.</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);
}
export default Header;