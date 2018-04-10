/**
*
* LoginForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import pick from 'lodash/pick';
import { Row, Col } from 'antd';

import Button from 'components/Button';
import formValidators from 'utils/formValidators';
import * as FormField from 'forms/formFields/AntDesign';
// import TranslatedMessage from 'components/TranslatedMessage';
// import messages from './messages';
import './style.scss';

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
};

function LoginForm(props) {
  const { handleSubmit, submitting, ...otherProps } = props;
  const groups = {
    sample: pick(formFieldsObject, 'email', 'password'),
  };
  const keys = Object.keys(groups);

  return (
    <form onSubmit={handleSubmit} className="login-form">
      { Object.values(groups).map((group, i) => (
        <FormField.Group fieldsObject={group} key={keys[i]} {...otherProps} />
        ))
      }
      <Row type="type" justify="end">
        <Col span="24">
          <Button type="transparnt" label="forgetPassword" />
        </Col>
      </Row>
      <Button htmlType="submit" type="primary" className="btn-login" disabled={submitting} label="LogIn" />
    </form>
  );
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'LoginForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(LoginForm);
