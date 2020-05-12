import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Contacts = () => (
    <div className={styles.list}>
        <div className={classNames(styles.item, styles.border)}>
            <p className={styles.text}>Могилёвский район</p>
            <p className={styles.text}>д. Фойно, ул. Садовая 3</p>
        </div>
        <div className={styles.item}>
            <p className={styles.text}>+375 222 21-76-91</p>
            <p className={styles.text}>+375 245 33-76-96</p>
            <p className={styles.text}>+375 252 21-34-89</p>
        </div>
    </div>
);

export default Contacts;
