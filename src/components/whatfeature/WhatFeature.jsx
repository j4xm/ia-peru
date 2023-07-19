import React from 'react';
import styles from './whatfeature.module.css';

const WhatFeature = ({ title, images }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.imagesContainer}>
        {images.map((image, ind) => (
          <div key={ind} className={styles.imageItem}>
            <img src={image} height={135} width={240} alt={image} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default WhatFeature;
