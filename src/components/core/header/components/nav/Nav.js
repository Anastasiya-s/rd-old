import React from 'react';

import styles from './styles.scss';

const Nav = () => (
    <ul className={styles.list}>
        <li className={styles.item}>
            <a className={styles.link} href="#">Преимущества</a>
        </li>
        <li className={styles.item}>
            <a className={styles.link} href="#">Отдых</a>
        </li>
        <li className={styles.item}>
            <a className={styles.link} href="#">Услуги</a>
        </li>
        <li className={styles.item}>
            <a className={styles.link} href="#">Как нас найти</a>
        </li>
    </ul>
);

export default Nav;
