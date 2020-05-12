import React from 'react';
import { Debug } from './Debug';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const Validation = (values) => {
  return sleep(300).then(() => {
    let errors = {};

    if (['admin', 'null', 'god'].includes(values.username)) {
      errors.username = 'Nice try';
    }

    if (!values.username) {
      errors.username = 'Required';
    }

    if (Object.keys(errors).length) {
      throw errors;
    }
  });
};

export default Validation;
