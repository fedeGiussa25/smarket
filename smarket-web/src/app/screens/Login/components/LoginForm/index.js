import React from 'react';
import { reduxForm, Form, Field } from 'redux-form';

import { LOGIN_MODAL_FORM } from './constants';

import './styles.scss';

function LoginForm({ handleSubmit }) {
    return (
      <Form onSubmit={handleSubmit}>
          <div className="container">
            <div className="field">
              <text className="label">{'Usuario'}</text>
              <Field
                name="user"
                component="input"
                className="text-box"
              />
            </div>
            <div className="field">
              <text className="label">{'Contraseña'}</text>
              <Field
                name="password"
                component="input"
                className="text-box"
              />
            </div>
          </div>
          <div className="button-container">
            <button className="button" type="submit">{'Ingresar'}</button>
          </div>
      </Form>
    );
  }

export default reduxForm({
  form: LOGIN_MODAL_FORM,
  destroyOnUnmount: true
})(LoginForm);
