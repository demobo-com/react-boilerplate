/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Icon } from 'antd';
import { injectIntl } from 'react-intl';
import TranslatedMessage, { formatMessage } from 'components/TranslatedMessage';
import formMessages from 'forms/messages';

import '../style.scss';

const FormItem = Form.Item;

function TextInput(props) { // eslint-disable-line react/prefer-stateless-function
  const {
    input, hasLabel = true, placeholder,
    formItemLayout, type, iconName, intl,
    meta: { dirty, touched, error },
  } = props;
  const label = hasLabel ? (<TranslatedMessage
    messages={formMessages}
    messageId={input.name}
    tagName="span"
  />)
    : '';
  const errorMessage = (dirty || touched) && error && <div className="text-error">
    <TranslatedMessage messages={formMessages} messageId={error} tagName="span" />
  </div>;
  return (
    <FormItem
      label={label}
      className="form-fields "
      {...formItemLayout}
    >
      {errorMessage}
      <Input
        prefix={<Icon type={iconName} />}
        type={type === 'passwordInput' ? 'password' : null}
        placeholder={formatMessage(intl, formMessages, placeholder)}
        onChange={input.onChange}
      />
    </FormItem>
  );
}

TextInput.propTypes = {
  formItemLayout: PropTypes.object,
  input: PropTypes.object,
  type: PropTypes.string,
  iconName: PropTypes.string,
  hasLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  intl: PropTypes.object,
  meta: PropTypes.object,
};

export default injectIntl(TextInput);
