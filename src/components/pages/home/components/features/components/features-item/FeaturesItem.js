import React from 'react';

import styles from './styles.scss';

const FeaturesItem = ({ direction, img, title, text }) => (
    <div
        style={{ flexDirection: `${direction}` }}
        className={styles.item}
    >
        <div className={styles.imageWrapper}>
            <img
                className={styles.image}
                src={img}
            />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>{ title }</h3>
            <p className={styles.text}>{ text }</p>
        </div>
    </div>
);

export default FeaturesItem ;
