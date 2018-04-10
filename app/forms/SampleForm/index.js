/**
*
* SampleForm
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

function SampleForm(props) {
  const { handleSubmit, submitting, ...otherProps } = props;
  const groups = {
    sample: pick(formFieldsObject, 'sampleTextInput', 'sampleNumberInput', 'sampleSelectInput', 'sampleSwitch'),
  };
  const keys = Object.keys(groups);

  return (
    <form onSubmit={handleSubmit} className="sample-form">
      {Object.values(groups).map((group, i) =>
        <FormField.Group fieldsObject={group} key={keys[i]} {...otherProps} />
      )}
      <div className="text-center">
        <Button htmlType="submit" type="primary" disabled={submitting} label="hello" />
      </div>
    </form>
  );
}

SampleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
};

export default reduxForm({
  form: 'SampleForm',
  destroyOnUnmount: false,
  enableReinitialize: true,
})(SampleForm);
