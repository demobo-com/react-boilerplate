/**
*
* Avatar
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'antd';

import MyAvatar from 'components/Avatar';
import TranslatedMessage from 'components/TranslatedMessage';
import formMessages from 'forms/messages';
import '../style.scss';

const FormItem = Form.Item;

function Avatar(props) { // eslint-disable-line react/prefer-stateless-function
  const { input, hasLabel = true, formItemLayout, width, height, className } = props;
  const label = hasLabel ? (<TranslatedMessage
    messages={formMessages}
    messageId={input.name}
  />)
    : '';
  const avatarProps = {
    url: input.value,
    width,
    height,
    className,
  };
  return (
    <FormItem
      label={label}
      {...formItemLayout}
    >
      <MyAvatar name={input.name} {...avatarProps} />
    </FormItem>
  );
}

Avatar.propTypes = {
  input: PropTypes.object,
  hasLabel: PropTypes.bool,
  formItemLayout: PropTypes.object,
  width: PropTypes.number,
  height: PropTypes.number,
  className: PropTypes.string,
};

export default Avatar;
