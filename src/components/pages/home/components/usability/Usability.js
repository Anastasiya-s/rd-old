import React from 'react';
import classNames from 'classnames';

import { Title } from '@components/core/title';

import styles from './styles.scss';

const Usabitily = () => (
    <div className={styles.usability}>
        <Title className={styles.header}>Почему отдыхать у нас приятно?</Title>
        <div className={styles.container}>
            <div className={styles.leftColumn}>
                <img className={styles.image} src={require('./img/galery1.jpg')} />
                <div className={styles.content}>
                    <h3 className={styles.title}>Дом с банкетным залом</h3>
                    <p className={styles.text}>на 50-60 персон</p>
                </div>
            </div>
            <div className={styles.rightColumn}>
                <div className={styles.rightColumnItem}>
                    <div className={classNames(styles.rightColumnContent, styles.pseudoLeft)}>
                        <h3 className={styles.title}>Просторная кухня</h3>
                        <p className={styles.text}>с посудой и бытовой техникой</p>
                    </div>
                    <img className={styles.rightColumnImage} src={require('./img/galery3.jpg')} />
                </div>
                <div className={styles.rightColumnItem}>
                    <img className={styles.rightColumnImage} src={require('./img/galery2.jpg')} />
                    <div className={classNames(styles.rightColumnContent, styles.pseudoRight)}>
                        <h3 className={styles.title}>2-4 местные номера</h3>
                        <p className={styles.text}>3 номера со всеми удобствами,WI-FI</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default Usabitily;
