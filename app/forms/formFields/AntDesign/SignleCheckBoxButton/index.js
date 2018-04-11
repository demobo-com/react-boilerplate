/**
*
* SignleRadioButton
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Checkbox, Form } from 'antd';
import TranslatedMessage from 'components/TranslatedMessage';
import formMessages from 'forms/messages';

import '../style.scss';

const FormItem = Form.Item;

function TextInput(props) { // eslint-disable-line react/prefer-stateless-function
  const {
    input,
    formItemLayout,
  } = props;
  return (
    <FormItem
      className="form-fields "
      {...formItemLayout}
    >
      <Checkbox onChange={input.onChange} checked={!!input.value}>
        <TranslatedMessage messages={formMessages} messageId={input.name} tagName="span" />
      </Checkbox>
    </FormItem>
  );
}

TextInput.propTypes = {
  formItemLayout: PropTypes.object,
  input: PropTypes.object,
};

export default TextInput;
