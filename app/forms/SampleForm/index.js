/**
*
* SampleForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import pick from 'lodash/pick';

import formValidators from 'utils/formValidators';
import * as FormField from 'components/Form/AntDesignFormField';
import Button from 'components/Button';
import TranslatedMessage from 'components/TranslatedMessage';
import formMessages from 'forms/messages';

const { isRequired } = formValidators;

const formFieldsObject = {
  firstName: {
    type: 'text',
    validate: [isRequired],
  },
  lastName: {
    type: 'text',
    validate: [isRequired],
  },
  age: {
    type: 'number',
    validate: [isRequired],
  },
};

function SampleForm(props) {
  const { handleSubmit, submitting, ...otherProps } = props;
  const groups = {
    name: pick(formFieldsObject, 'firstName', 'lastName'),
    other: pick(formFieldsObject, 'age'),
  };
  const keys = Object.keys(groups);
  return (
    <form onSubmit={handleSubmit}>
      {Object.values(groups).map((group, i) =>
        <FormField.Group fieldsObject={group} key={keys[i]} messages={formMessages} {...otherProps} />
      )}
      <div className="text-center">
        <Button type="submit" className="btn-brand-selected" disabled={submitting} label="hello" />
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
