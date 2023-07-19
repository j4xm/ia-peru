import React from 'react';
import chatgpt from '../../assets/iconos-svg/chatgpt.svg';
import midjourney from '../../assets/iconos-svg/midjourney.svg';
import chatbot from '../../assets/iconos-svg/chatbot.svg';
import brandmark from '../../assets/iconos-svg/brandmark.svg';
import './brand.css';

const Brand = () => {  

return (
<div className="gpt3__brand section__padding">
     <ul className="gpt3__brand__list">
        <li>
          <a href="#" className='chatgpt'>
            <img src={chatgpt} alt="chatgpt" height={75}  />
          </a>
        </li>
        <li>
          <a href="#" className='midjourney'>
            <img src={midjourney} alt="midjourney" height={35} />
          </a>
        </li>
        <li>
          <a href="#" className='chatbot'>
            <img src={chatbot} alt="chatbot" height={75} />
          </a>
        </li>
        <li>
          <a href="#" className='brandmark'>
            <img src={brandmark} alt="brandmark" height={8} />
          </a>
        </li>
        
      </ul>
  </div>

)
}

  

export default Brand;