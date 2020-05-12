import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Footer = () => (
    <div className={styles.contacts}>
        <div className={styles.wrapper}>
            <div className={styles.contact}>
                <p className={styles.text}>Могилёвский р-н, д. Фойно, ул. Садовая 3</p>
            </div>
            <div className={styles.contact}>
                <p className={classNames(styles.phone, styles.border)}>+375 222 21-76-91</p>
                <p className={classNames(styles.phone, styles.border)}>+375 245 33-76-96</p>
                <p className={styles.phone}>+375 252 21-34-89</p>
            </div>
        </div>
    </div>
);

export default Footer;
