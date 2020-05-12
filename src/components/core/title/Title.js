import React from 'react';
import classNames from 'classnames';

import styles from './styles.scss';

const Title = ({ className, color, children }) => (
    <h2 className={classNames(styles.title, className)} style={{ color: `${color}` }}>
        { children }
    </h2>
);

export default Title;
