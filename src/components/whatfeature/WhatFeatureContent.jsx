import styles from './whatfeaturecontent.module.css';

const WhatFeatureContent = ({title, images}) => {
  return (
    <div className={styles.item}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.images_container}>
            {
                images.map((image, ind) =>                             
                  <img  key={ind} src={image} height={135}  alt={image} />                
                )
            }
        </div>
    </div>
  )
}

export default WhatFeatureContent