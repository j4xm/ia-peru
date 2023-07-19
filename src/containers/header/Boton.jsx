import Lottie from 'lottie-react';

import whatsapp from "../../assets/lotties/whatsapp.json"


const Boton = () => {
  return (
    <div>
      <Lottie
        animationData={whatsapp} 
        loop
        autoplay
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  );
};

export default Boton;
