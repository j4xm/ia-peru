import React from 'react';
import WhatFeature from '../../components/whatfeature/WhatFeature';
import './whatGPT3.css';

import chatgpt4 from "../../assets/images/chatgpt4.png";
import chatgpt3 from "../../assets/images/chatgpt3.jpg";
import chatgpt2 from "../../assets/images/chatgpt2.png";
import chatgpt1 from "../../assets/images/chatgpt1.webp";

import chatbot1 from "../../assets/images/chatbot1.png";
import chatbot2 from "../../assets/images/chatbot2.webp";

import midjourney1 from "../../assets/images/midjourney1.png";
import midjourney2 from "../../assets/images/midjourney2.jpg";

import brandmark1 from "../../assets/images/brandmark1.jpg";
import brandmark2 from "../../assets/images/brandmark2.png";
import WhatFeatureContent from '../../components/whatfeature/WhatFeatureContent';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <WhatFeature title={'Chat GPT'} images={[chatgpt3, chatgpt2, chatgpt1, chatgpt4]} />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">Las posibilidades están más allá de tu imaginación.</h1>
      <p>Explora nuestra librería</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <div className='gpt3__whatgpt3-container__item'>
              <WhatFeatureContent title={'ChatBots'} images={[chatbot1, chatbot2]} />

      </div>
      <div className='gpt3__whatgpt3-container__item'>
              <WhatFeatureContent title = {'MidJourney'} images={[midjourney1, midjourney2]}  />

      </div>
      <div className='gpt3__whatgpt3-container__item'>
              <WhatFeatureContent title={'BrandMark'} images={[brandmark1, brandmark2]} />

      </div>
    </div>
  </div>
);

export default WhatGPT3;