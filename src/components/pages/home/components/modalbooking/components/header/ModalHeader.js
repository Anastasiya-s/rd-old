import React from 'react';

import { Title } from '@components/core/title';
import { CloseIcon } from './icons';

import styles from './styles.scss';

const ModalHeader = ({ onCloseClick }) => (
  <>
    <div id="form-modal" />
    <div className={styles.header}>
        <Title className={styles.title}>Бронирование</Title>
        <button
            onClick={onCloseClick}
            className={styles.button}
        >
            <CloseIcon
                className={styles.icon}
            />
        </button>
    </div>
  </>
);

export default ModalHeader;
