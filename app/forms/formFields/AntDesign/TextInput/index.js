/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Input, Form, Icon } from 'antd';
import { injectIntl } from 'react-intl';
import classNames from 'classnames';

import TranslatedMessage, { formatMessage } from 'components/TranslatedMessage';
import formMessages from 'forms/messages';
import '../style.scss';

const FormItem = Form.Item;

function TextInput(props) { // eslint-disable-line react/prefer-stateless-function
  const {
    input, hasLabel = true, placeholder, className,
    formItemLayout, type, iconName, intl,
    meta: { dirty, touched, error },
    initialized,
    showErrors,
  } = props;
  const label = hasLabel ? <TranslatedMessage messages={formMessages} messageId={input.name} tagName="span" /> : '';
  const errorMessage = ((initialized && showErrors) || dirty || touched) && error && <div className="text-error">
    <TranslatedMessage messages={formMessages} messageId={error} />
  </div>;
  const newClassName = classNames({
    'form-fields': true,
    [className]: className,
  });

  return (
    <FormItem
      label={label}
      className={newClassName}
      {...formItemLayout}
    >
      <a href={`#${input.name}`} className="anchor">#</a>
      {errorMessage}
      <Input
        prefix={<Icon type={iconName} />}
        type={type === 'passwordInput' ? 'password' : null}
        placeholder={formatMessage(intl, formMessages, placeholder)}
        {...input}
      />
    </FormItem>
  );
}

TextInput.propTypes = {
  intl: PropTypes.object,
  input: PropTypes.object,
  meta: PropTypes.object,
  hasLabel: PropTypes.bool,
  className: PropTypes.string,
  formItemLayout: PropTypes.object,
  iconName: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  initialized: PropTypes.bool,
  showErrors: PropTypes.bool,
};

export default injectIntl(TextInput);
