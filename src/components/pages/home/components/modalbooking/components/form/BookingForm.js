import React from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import select from 'react-select';

import { Button } from '@components/core/button';

import { Input } from './components/input';
import { Checkbox } from './components/checkbox';
import { CheckboxGroup } from './components/checkbox-group';
import { Total } from './components/total';

import Debug from './components/validation/Debug';

import styles from './styles.scss';

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const validate = values => sleep(300).then(() => {
    const errors = {};


    if (!values.email) {
        errors.email = 'Required';
    }

    if (Object.keys(errors).length) {
        throw errors;
    }
});

const handleClick = () => {
    console.log('meoeir');
};


class BookingForm extends React.Component {
  state = {
      userName: '',
      phone: '',
      email: '',
      adults: 0,
      children: 0,
      arrivalDate: '',
      departureDate: '',
      arrivalTime: '',
      departureTime: '',
      detailsGroup: [],
      rooms: []
  };

  render() {
      console.log(this.values);
      return (
          <Formik
              initialValues={this.state}
              validate={validate}
              onSubmit={(values) => {
                  setTimeout(() => {
                      alert(JSON.stringify(values, null, 2));
                  }, 500);
              }}
              render={({
                  values,
                  touched,
                  errors,
                  dirty,
                  isSubmitting,
                  handleChange,
                  handleSubmit,
                  setFieldValue,
                  setFieldTouched
              }) => (
        <>
          <Form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.content}>
                  <Field
                      id="userName"
                      label="Ваше имя:"
                      name="userName"
                      type="text"
                      onChange={handleChange}
                      value={values.userName}
                      component={Input}
                  />
                  <Field
                      id="phone"
                      label="Ваш телефон:"
                      name="phone"
                      type="text"
                      onChange={handleChange}
                      value={values.phone}
                      component={Input}
                  />
                  <Field
                      id="email"
                      label="Ваш email:"
                      name="email"
                      type="text"
                      onChange={handleChange}
                      value={values.email}
                      component={Input}
                  />
                  <ErrorMessage name="email" />

                  <div className={styles.info}>
                      <Field
                          className={styles.amount}
                          id="adults"
                          label="Кол-во взрослых"
                          name="adults"
                          type="number"
                          onChange={handleChange}
                          value={values.adults}
                          component={Input}
                      />
                      <Field
                          className={styles.amount}
                          id="children"
                          label="Кол-во детей"
                          name="children"
                          type="number"
                          onChange={handleChange}
                          value={values.children}
                          component={Input}
                      />
                  </div>
              </div>

              <div className={styles.content}>
                  <div className={styles.info}>
                      <Field
                          className={styles.date}
                          label="Дата заезда"
                          name="arrivalDate"
                          type="date"
                          component={Input}
                      />
                      <Field
                          className={styles.date}
                          label="Дата выезда"
                          name="departureDate"
                          type="date"
                          component={Input}
                      />
                  </div>
                  <div className={styles.info}>
                      <Field
                          className={styles.date}
                          label="Время заезда"
                          name="arrivalTime"
                          type="time"
                          component={Input}
                      />
                      <Field
                          className={styles.date}
                          label="Время выезда"
                          name="departureTime"
                          type="time"
                          component={Input}
                      />
                  </div>
                  <CheckboxGroup
                      id="detailsGroup"
                      groupLabel="Выберите дополнительные услуги"
                      value={values.detailsGroup}
                      touched={touched.detailsGroup}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      className={styles.oneColumn}
                  >
                      <Field
                          component={Checkbox}
                          id="detail1"
                          name="Баня"
                          label="Баня"
                      />
                      <Field
                          component={Checkbox}
                          id="detail2"
                          name="Мангал"
                          label="Мангал"
                      />
                      <Field
                          component={Checkbox}
                          id="detail3"
                          name="Ночёвка"
                          label="Ночёвка"
                      />
                  </CheckboxGroup>
                  <CheckboxGroup
                      id="rooms"
                      groupLabel="Выберите варианты проживания"
                      value={values.rooms}
                      touched={touched.rooms}
                      onChange={setFieldValue}
                      onBlur={setFieldTouched}
                      className={styles.twoColumns}
                  >
                      <Field
                          component={Checkbox}
                          name="rooms"
                          id="room1"
                          label="2-х местный номер"
                      />
                      <Field
                          component={Checkbox}
                          name="rooms"
                          id="room4"
                          label="4-х местный люкс"
                      />
                      <Field
                          component={Checkbox}
                          name="rooms"
                          id="room3"
                          label="2-х местный люкс"
                      />
                      <Field
                          component={Checkbox}
                          name="rooms"
                          id="room2"
                          label="4-х местный номер"
                      />
                  </CheckboxGroup>
              </div>
          </Form>
          {/* <Debug /> */}
          <Total details={this.state} />
          <Button className="totalButton" type="submit" onClick={handleSubmit}>Забронировать</Button>
        </>
              )
              }
          />
      );
  }
}

export default BookingForm;
