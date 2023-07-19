import React from "react";
import Feature from "../../components/feature/Feature";
import "./features.css";
import { Link } from "react-router-dom";
import Boton from "../header/Boton";

const featuresData = [
  {
    title: "Chat GPT",
    text: `🤖 Accede a toda la información inimaginable 🤖 Herramienta ideal para obtener ideas 🤖 Ideal para estudios e investigaciones`,
  },
  {
    title: "Chat Bots",
    text: `🤖Resuelve Consultas   
    🤖  Brinda Soporte
    
    🤖 Eficiente y amigable
    
    🤖  Simplifica tareas 
    
    🤖 Te ahorra tiempo`,
  },
  {
    title: "Mid Journey",
    text: `🤖  Obten imágenes de alta calidad en pocos segundos creadas por Inteligencia Artificial
 
    🤖 Crea nuevas imágenes a partir de una ya existente
  
    🤖 Ideal para banners, logos y publicidad en general`,
  },
  {
    title: "Brand Mark",
    text: `🤖Diseña logotipos fácil y rápido
    
    🤖Obten fácil slogans para marketing
    
    🤖Diseña fácil un concepto de marca`,
  },
];

const Features = () => (
  <div className="gpt3__features section__padding" id="features">
    <div className="gpt3__features-heading">
      <h1 className="gradient__text">
        El futuro es ahora y solo necesitas darte cuenta. Da el paso hacia el
        futuro hoy mismo y haz que suceda.
      </h1>
      <p>
        No esperes más, ponte en contacto con nosotros para darte mayor
        información
      </p>
      <Link to={"https://wa.me/+51966477844"} target="_blank">
        <button
          style={{
            background: "#e95f40",
            border: "2px solid #FF4820",
            cursor: "pointer",
          }}
          type="button button-whatsapp"
        >
          <Boton />
        </button>
      </Link>
    </div>
    <div className="gpt3__features-container">
      {featuresData.map((item, index) => (
        <Feature title={item.title} text={item.text} key={item.title + index} />
      ))}
    </div>
  </div>
);

export default Features;
