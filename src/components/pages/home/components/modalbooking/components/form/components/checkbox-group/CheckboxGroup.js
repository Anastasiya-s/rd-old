import React from 'react';

import styles from './styles.scss';

class CheckboxGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

  handleChange = (event) => {
      const target = event.currentTarget;
      const valueArray = this.props.value || [];
      const labelClass = this.props.labelClass;

      if (target.checked) {
          valueArray.push({ id: target.id, name: target.name });
          target.className = ` ${styles.labelChecked}`;
      } else {
          valueArray.splice(valueArray.indexOf(target.id), 1);
          target.className = `${styles.input}`;
      }

      this.props.onChange(this.props.id, valueArray);
  }

  handleBlur = () => {
      this.props.onBlur(this.props.id, true);
  }

  render() {
      const {
          value,
          error,
          touched,
          label,
          name,
          className,
          children,
          groupLabel
      } = this.props;
      return (
          <div>
              <fieldset className={className}>
                  <legend className={styles.title}>{groupLabel}</legend>
                  {(React.Children.map(children, child => React.cloneElement(child, {
                      field: {
                          value: value.includes(child.props.id),
                          onChange: this.handleChange,
                          onBlur: this.handleBlur,
                          name: child.props.name
                      }
                  })))}
              </fieldset>
          </div>
      );
  }
}

export default CheckboxGroup;
