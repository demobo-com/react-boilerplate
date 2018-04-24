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
import './style.scss';

const {
  isRequired,
  isEmail,
  isPassword,
  isPasswordLongEnough,
  isPasswordShortEnough,
  isRepeatPasswordSame,
} = formValidators;

const formFieldsObject = {
  email: {
    type: 'textInput',
    iconName: 'mail',
    validate: [isRequired, isEmail],
    hasLabel: false,
    placeholder: 'placeholderEmail',
  },
  password: {
    type: 'passwordInput',
    iconName: 'lock',
    validate: [isRequired, isPassword, isPasswordLongEnough, isPasswordShortEnough],
    hasLabel: false,
    placeholder: 'placeholderPassword',
  },
  repeatPassword: {
    type: 'passwordInput',
    iconName: 'key',
    validate: [isRequired, isRepeatPasswordSame],
    hasLabel: false,
    placeholder: 'placeholderRepeatPassword',
  },
};

function SignUpForm(props) {
  const { handleSubmit, submitting, isDone, ...otherProps } = props;
  const groups = {
    sample: pick(formFieldsObject, 'email', 'password', 'repeatPassword'),
  };
  const keys = Object.keys(groups);

  return (
    <form onSubmit={handleSubmit} className="sign-up-form">
      {Object.values(groups).map((group, i) =>
        <FormField.Group fieldsObject={group} key={keys[i]} {...otherProps} />
      )}
      <Button htmlType="submit" type="warning" width={'100%'} className="btn-submit" disabled={submitting} label="signUp" loading={!isDone} />
    </form>
  );
}

SignUpForm.defaultProps = {
  isDone: true,
};

SignUpForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  isDone: PropTypes.bool,
};

export default reduxForm({
  form: 'SignUpForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(SignUpForm);
