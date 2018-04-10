/**
*
* SignUpForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import pick from 'lodash/pick';

import Button from 'components/Button';
import formValidators from 'utils/formValidators';
import * as FormField from 'forms/formFields/AntDesign';

const { isRequired } = formValidators;

const formFieldsObject = {
  email: {
    type: 'textInput',
    iconName: 'mail',
    validate: [isRequired],
    hasLabel: false,
    placeholder: 'email',
  },
  password: {
    type: 'passwordInput',
    iconName: 'lock',
    validate: [isRequired],
    hasLabel: false,
    placeholder: 'password',
  },
  repeatPassword: {
    type: 'passwordInput',
    iconName: 'lock',
    validate: [isRequired],
    hasLabel: false,
    placeholder: 'repeatPassword',
  },
};

function SignUpForm(props) {
  const { handleSubmit, submitting, ...otherProps } = props;
  const groups = {
    sample: pick(formFieldsObject, 'email', 'password', 'repeatPassword'),
  };
  const keys = Object.keys(groups);

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      {Object.values(groups).map((group, i) =>
        <FormField.Group fieldsObject={group} key={keys[i]} {...otherProps} />
      )}
      <div className="text-center">
        <Button htmlType="submit" type="primary" disabled={submitting} label="hello" />
      </div>
    </form>
  );
}

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'SignUpForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(SignUpForm);
