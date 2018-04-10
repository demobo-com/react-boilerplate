/**
*
* TestForm
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form/immutable';
import { Button, Form } from 'antd';
import pick from 'lodash/pick';
import { injectIntl, intlShape } from 'react-intl';
import * as FormField from 'components/Form/AntDesignFormField';
// import { isRequired } from 'utils/validators';
// import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';

const formFieldsObject = {
  // sampleRadioInputName: {
  //   type: 'radioInput',
  //   validate: [isRequired],
  //   // customOptions: [{ display: 'option1', value: 100 }, { display: 'option2', value: -2.9 }],
  //   // customOptions: ['international', 'foreign', 'unitedStates'],
  //   customOptions: [{
  //     display: 'Yes, I need collision protection',
  //     value: 'international',
  //     description: '*Covers car damage from collision, theft or vandalism',
  //     valueUnit: '/Month',
  //   }, {
  //     display: 'No, I will use my own insurance',
  //     value: 'unitedStates',
  //     description: '*Please bring your insurance for the leasing vehicle when you pick up at counter',
  //   }],
  //   className: 'col-sm-12',
  //   displayedOption: 'display',
  //   onChanged() {},
  // },
  // driverLicenseType: {
  //   type: 'select',
  //   validate: [isRequired],
  //   customOptions: ['international', 'foreign', 'unitedStates'],
  //   className: 'col-sm-4',
  // },
  text: {
    type: 'textInput',
    // validate: [isRequired],
    placeholder: 'MM/DD/YYYY',
    formItemLayout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 16, offset: 4 },
    },
  },
  number: {
    type: 'numberInput',
    // validate: [isRequired, isValidEmail],
    placeholder: 'XX:XX PM',
  },
  switch: {
    type: 'switchButton',
    // validate: [isRequired, isValidEmail],
    // placeholder: 'XX:XX PM',
    formItemLayout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 16, offset: 4 },
    },
  },
  select: {
    type: 'selectInput',
    options: [
      { label: 'Hello', value: 'hello' },
      { label: 'World', value: 'world' },
    ],
    formItemLayout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 16, offset: 4 },
    },
    // validate: [isRequired, isValidEmail],
    // placeholder: 'XX:XX PM',
  },
  avatar1: {
    type: 'avatar',
    icon: 'user',
    formItemLayout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 16, offset: 4 },
    },
    // validate: [isRequired, isValidEmail],
  },
  avatar2: {
    type: 'avatar',
    userName: 'Useret',
    formItemLayout: {
      labelCol: { span: 4 },
      wrapperCol: { span: 16, offset: 4 },
    },
    // validate: [isRequired, isValidEmail],
  },
};

class TestForm extends React.Component {// eslint-disable-line react/prefer-stateless-function

  render() {
    const { handleSubmit, submitting, intl, ...otherProps } = this.props;
    const groups = [
      pick(formFieldsObject, 'text', 'switch', 'select'),
      pick(formFieldsObject, 'avatar1', 'avatar2'),
    ];

    return (
      <Form onSubmit={handleSubmit} >
        {groups.map((group) => (
          <div key={group}>
            <FormField.Group fieldsObject={group} {...otherProps} intl={intl} messages={messages} />
          </div>
        )
        )}

        <div>
          <Button type="primary" htmlType="submit" disabled={submitting}>
            Test submit{/* <TranslatedMessage messageId="submit" tagName="span" {...otherProps} /> */}
          </Button>
        </div>
      </Form>
    );
  }
}

TestForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool,
  intl: intlShape.isRequired,
  change: PropTypes.func,
};

export default injectIntl(reduxForm({
  form: 'TestForm',
  // destroyOnUnmount: false,
  // enableReinitialize: true,
})(TestForm));
