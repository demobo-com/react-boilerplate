/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import NumberFormat from 'react-number-format';
import { Form } from 'antd';
import TranslatedMessage from 'components/TranslatedMessage';
import classNames from 'classnames';
import formMessages from 'forms/messages';
import './style.scss';

const FormItem = Form.Item;

let value;
// see doc in https://www.npmjs.com/package/react-number-format
function NumberInput(props) {
  const {
    // isRequired, hasLabelOverflow = true,
    formItemLayout,
    input, hasLabel = true,
    placeholder, className, numberFormat = {} } = props;
  const { dirty, touched, error } = props.meta;
  const errorMessage = (dirty || touched) && error && <div className="text-danger error">
    <TranslatedMessage messages={formMessages} messageId={error} tagName="span" />
  </div>;
  const divClassName = classNames({
    'number-input': true,
    [className]: true,
    'has-error': !!((dirty || touched) && error),
  });
  // const labelClassName = classNames({
  //   textOverflow: hasLabelOverflow,
  // });
  const errorStyle = ((dirty || touched) && error) ? { paddingBottom: '18px' } : {};
  const { valueType, ...numberFormatProps } = numberFormat;
  const { onChange, ...inputProps } = input;
  const onValueChange = (valueObject) => {
    // console.log('onValueChange', valueObject);
    // supported valueType: floatValue, value, formattedValue
    value = valueObject[valueType || 'value'];
    onChange(value);
  };
  const onBlur = (event) => {
    // console.log(e.target, d);
    const target = event.target;
    target.value = value || target.value;
    inputProps.onBlur(event);
  };
  const label = hasLabel ? (<TranslatedMessage
    messages={formMessages}
    messageId={input.name}
    tagName="span"
  />)
    : '';
  return (
    <FormItem
      className={divClassName}
      style={errorStyle}
      label={label}
      {...formItemLayout}
    >
      {/* {hasLabel && <ControlLabel className={labelClassName}>
        {isRequired && '*'}
        <TranslatedMessage messages={messages} messageId={input.name} /></ControlLabel>} */}
      <NumberFormat
        placeholder={placeholder}
        {...inputProps}
        onBlur={onBlur}
        {...numberFormatProps}
        className="number-block"
        onValueChange={onValueChange}
      />
      {/* <FormControl type="number" placeholder={placeholder} {...input} /> */}
      {errorMessage}
    </FormItem>
  );
}

NumberInput.propTypes = {
  // isRequired: PropTypes.bool,
  hasLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  formItemLayout: PropTypes.object,
  // hasLabelOverflow: PropTypes.bool,
  numberFormat: PropTypes.object,
};

export default NumberInput;
