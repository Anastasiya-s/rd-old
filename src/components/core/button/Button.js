import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';


const Button = ({ className, type, children, onClick }) => (
    <button
        className={classNames(styles.button, className)}
        onClick={onClick}
        type={type}
    >
        {children}
    </button>
);

Button.defaultProps = {
    type: 'button'
};

export default Button;
