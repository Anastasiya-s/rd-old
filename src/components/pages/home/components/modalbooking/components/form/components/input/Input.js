import React from 'react';
import classnames from 'classnames';

import styles from './styles.scss';

const Input = (field, form, ...props) => (
  <>
    <label className={classnames(field.className, styles.label)}>
        {field.label}
        <input
            className={styles.field}
            type={field.type}
            name={field.name}
            onChange={field.onChange}
            value={field.value}
            id={field.id}
        />
    </label>
  </>
);

export default Input ;
