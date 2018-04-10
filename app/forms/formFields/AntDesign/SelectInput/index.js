/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';
import TranslatedMessage from 'components/TranslatedMessage';
import formMessages from 'forms/messages';
import '../style.scss';

const FormItem = Form.Item;
const Option = Select.Option;

function SelectInput(props) { // eslint-disable-line react/prefer-stateless-function
  const { input, hasLabel = true, options, formItemLayout } = props;

  const label = hasLabel ? (<TranslatedMessage
    messages={formMessages}
    messageId={input.name}
    tagName="span"
  />)
    : '';
  return (
    <FormItem
      label={label}
      {...formItemLayout}
    >
      <Select defaultValue={input.value} onChange={input.onChange}>
        {
          options && options.map((option) =>
            <Option value={option.value} key={option.value}>{option.label}</Option>
          )
        }
      </Select>
    </FormItem>
  );
}

SelectInput.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  hasLabel: PropTypes.bool,
  formItemLayout: PropTypes.object,
  // placeholder: PropTypes.string,
};

export default SelectInput;
