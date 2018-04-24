/**
*
* LoginForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reduxForm, formValueSelector } from 'redux-form/immutable';
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
};

function LoginForm(props) {
  const { handleSubmit, submitting, user, isDone, showResend, onSendVerification, ...otherProps } = props;
  const groups = {
    sample: pick(formFieldsObject, 'email', 'password'),
  };
  const keys = Object.keys(groups);
  const onSendEmail = () => {
    onSendVerification(user);
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      {Object.values(groups).map((group, i) => (
        <FormField.Group fieldsObject={group} key={keys[i]} {...otherProps} />
        ))
      }
      <Button htmlType="submit" type="warning" width={'100%'} className="btn-submit" disabled={submitting} loading={!showResend && !isDone} label="logIn" />
      { showResend && <Button type="warning" width={'100%'} className="btn-submit" onClick={onSendEmail} disabled={submitting} loading={showResend && !isDone} label="sendVerificationEmail" /> }
    </form>
  );
}

LoginForm.defaultProps = {
  isDone: true,
  showResend: false,
  onSendVerification: () => null,
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  user: PropTypes.object,
  isDone: PropTypes.bool,
  showResend: PropTypes.bool,
  onSendVerification: PropTypes.func,
};

const form = reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LoginForm);

const selector = formValueSelector('LoginForm');

export default connect((state) => ({
  user: selector(state, 'email', 'password'),
}))(form);
