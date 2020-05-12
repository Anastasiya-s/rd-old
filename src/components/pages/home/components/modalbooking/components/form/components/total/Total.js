import React from 'react';

import { Button } from '@components/core/button';
import { DetailItem } from './components/detail-item';

import styles from './styles.scss';

const Total = ({ details }) => (
    <div className={styles.total}>
        <div className={styles.wrapper}>
            <ul className={styles.content}>
                <li className={styles.title}>
                    <DetailItem details={details.detailsGroup} />
                </li>
            </ul>
            <p className={styles.totalPrice}>Итого: 4509&nbsp;&#8381;</p>
        </div>
    </div>
);

export default Total;
