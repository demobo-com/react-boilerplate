/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form } from 'antd';
// import TranslatedMessage from 'components/TranslatedMessage';
// import classNames from 'classnames';
import '../style.scss';

const FormItem = Form.Item;

function TextInput(props) { // eslint-disable-line react/prefer-stateless-function
  // const { isRequired, input, type, hasLabel = true, messages, placeholder, className, meta: { dirty, touched, error }, isFieldArray = false, hasLabelOverflow = true } = props;
  const { input, hasLabel = true, placeholder } = props;

  return (
    <FormItem
      // TODO: 翻译
      label={hasLabel ? input.name : ''}
    >
      <Input placeholder={placeholder} onChange={input.onChange} />
    </FormItem>
  );
}

TextInput.propTypes = {
  // isRequired: PropTypes.bool,
  input: PropTypes.object,
  // type: PropTypes.string,
  hasLabel: PropTypes.bool,
  // messages: PropTypes.object,
  placeholder: PropTypes.string,
  // className: PropTypes.string,
  // meta: PropTypes.object,
  // hasLabelOverflow: PropTypes.bool,
  // isFieldArray: PropTypes.bool,
};

export default TextInput;
