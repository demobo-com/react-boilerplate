/**
*
* SelectTagsInput
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';
import classNames from 'classnames';
import { injectIntl } from 'react-intl';
import { fromJS } from 'immutable';

import TranslatedMessage, { formatMessage } from 'components/TranslatedMessage';
import messages from 'forms/messages';

import './style.scss';

const FormItem = Form.Item;
const Option = Select.Option;

function SelectTagsInput(props) {
  const {
    input,
    hasLabel = true,
    placeholder,
    className,
    formItemLayout,
    intl,
    meta: { dirty, touched, error },
  } = props;

  const label = hasLabel ? <TranslatedMessage messages={messages} messageId={input.name} /> : '';

  const newClassName = classNames({
    'select-tags-input': true,
    [className]: className,
  });

  const onChange = (value) => {
    input.onChange(fromJS(value));
  };

  const errorMessage = (dirty || touched) && error && <div className="text-error">
    <TranslatedMessage messages={messages} messageId={error} />
  </div>;

  const FiledPlaceholder = formatMessage(intl, messages, placeholder);
  const children = [];
  if (input.value && input.value.length > 0) {
    input.value.map((value) =>
      children.push(<Option key={value}>{value}</Option>)
    );
  } else {
    children.push(<Option key="noData"></Option>);
  }
  const defaultValue = input.value ? input.value.toJS() : [];

  return (
    <FormItem
      label={label}
      className={newClassName}
      {...formItemLayout}
    >
      <Select
        mode="tags"
        style={{ width: '100%' }}
        placeholder={FiledPlaceholder}
        onChange={(value) => onChange(value)}
        defaultValue={defaultValue}
      >
        {children}
      </Select>
      {errorMessage}
    </FormItem>
  );
}
SelectTagsInput.propTypes = {
  formItemLayout: PropTypes.object,
  input: PropTypes.object,
  hasLabel: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  intl: PropTypes.object,
  meta: PropTypes.object,
};

export default injectIntl(SelectTagsInput);
