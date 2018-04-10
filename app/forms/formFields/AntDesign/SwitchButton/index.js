/**
*
* SwitchButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TranslatedMessage from 'components/TranslatedMessage';
import formMessages from 'forms/messages';
import { Switch, Form } from 'antd';
import './style.scss';

const FormItem = Form.Item;

function SwitchButton(props) {
  const {
    hasLabel = true,
    style,
    input,
    // isRequired
    formItemLayout,
  } = props;
  const checked = input.value ? input.value : false;
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
      <Switch
        style={style}
        defaultChecked={checked}
        onChange={input.onChange}
      />
    </FormItem>
  );
}

SwitchButton.propTypes = {
  // isRequired: PropTypes.bool,
  hasLabel: PropTypes.bool,
  // messages: PropTypes.object,
  style: PropTypes.object,
  input: PropTypes.object,
  formItemLayout: PropTypes.object,
};

export default SwitchButton;
