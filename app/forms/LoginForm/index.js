/**
*
* LoginForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import pick from 'lodash/pick';

import Button from 'components/Button';
import formValidators from 'utils/formValidators';
import * as FormField from 'forms/formFields/AntDesign';
import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';

const { isRequired } = formValidators;

const formFieldsObject = {
  sampleTextInput: {
    type: 'textInput',
    validate: [isRequired],
    hasLabel: false,
    placeholder: 'sampleTextInput',
  },
  sampleNumberInput: {
    type: 'numberInput',
    validate: [isRequired],
    hasLabel: false,
    placeholder: 'sampleNumberInput',
  },
  sampleSelectInput: {
    type: 'selectInput',
    validate: [isRequired],
    placeholder: 'sampleSelectInput',
    formItemLayout: {
      labelCol: { span: 24 },
      wrapperCol: { span: 6 },
    },
    options: [
      { label: 'Hello', value: 'hello' },
      { label: 'World', value: 'world' },
    ],
  },
  sampleSwitch: {
    type: 'switchButton',
    validate: [isRequired],
    placeholder: 'sampleSwitch',
    formItemLayout: {
      labelCol: { span: 24 },
      wrapperCol: { span: 6 },
    },
  },
};

function LoginForm(props) {
  const { handleSubmit, submitting, ...otherProps } = props;
  const groups = {
    sample: pick(formFieldsObject, 'sampleTextInput', 'sampleNumberInput', 'sampleSelectInput', 'sampleSwitch'),
  };
  const keys = Object.keys(groups);

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <TranslatedMessage messages={messages} messageId="header" />
      {Object.values(groups).map((group, i) =>
        <FormField.Group fieldsObject={group} key={keys[i]} {...otherProps} />
      )}
      <div className="text-center">
        <Button htmlType="submit" type="primary" disabled={submitting} label="hello" />
      </div>
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
