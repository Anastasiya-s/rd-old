import React from 'react';

import { Button } from '@components/core/button';
import ModalWindow from '../modalbooking/ExampleModalWindow';


import styles from './styles.scss';

const Booking = () => (
    <div className={styles.container}>
        <h2 className={styles.title}>Запланируйте отличные выходные</h2>
        <p className={styles.text}>в компани семьи, друзей или коллег прямо сейчас</p>
        <p className={styles.callUs}>Позвоните нам по телефону:</p>
        <p className={styles.phone}>+375 222 21-76-91</p>
        <ModalWindow
            buttonText="Или забронируйте места"
            buttonStyles={styles.button}
        />
    </div>
);

export default Booking;
