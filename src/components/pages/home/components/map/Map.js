import React from 'react';

import { Title } from '@components/core/title';

import styles from './styles.scss';

const Map = () => (
    <div className={styles.map}>
        <Title className={styles.title}>Как нас найти</Title>
        <div
            id="map"
            className={styles.container}
        />
    </div>
);
export default Map;
