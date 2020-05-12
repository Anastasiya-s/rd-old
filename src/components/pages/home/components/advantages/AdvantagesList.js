import React from 'react';

import styles from './styles.scss';

import armchair from './img/armchair.png';
import cutlery from './img/cutlery.png';
import fence from './img/fence.png';
import parking from './img/parking.png';

const AdvantagesList = () => (
    <ul className={styles.list}>
        <li className={styles.item}>
            <img
                className={styles.image}
                src={fence}
            />
            <p className={styles.text}>
          Закрытая<br /> территория
            </p>
        </li>
        <li className={styles.item}>
            <img
                className={styles.image}
                src={cutlery}
            />
            <p className={styles.text}>
          Домашняя<br />кухня
            </p>
        </li>
        <li className={styles.item}>
            <img
                className={styles.image}
                src={parking}
            />
            <p className={styles.text}>
          Удобный подъезд <br /> и паркинг
            </p>
        </li>
        <li className={styles.item}>
            <img
                className={styles.image}
                src={armchair}
            />
            <p className={styles.text}>
          Уютная <br /> обстановка
            </p>
        </li>
    </ul>
);

export default AdvantagesList;
