import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Checkbox = ({
    field: { value, name, onChange, onBlur },
    form: { errors,touched, setFieldValue },
    id,
    label,
    groupLabel,
    className,
    labelClass
}) => (
    <label className={classnames({ labelClass }, styles.label)}>
        <input
            type="checkbox"
            id={id}
            name={name}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            className={classnames(styles.input)}
        />
        {label}
    </label>
);

export default Checkbox;
