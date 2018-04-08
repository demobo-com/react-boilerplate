/**
*
* SwitchButton
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import { ControlLabel } from 'react-bootstrap';
// import TranslatedMessage from 'components/TranslatedMessage';
// import classNames from 'classnames';
// import Switch from 'rc-switch';
import { Switch, Form } from 'antd';
import './style.scss';

const FormItem = Form.Item;

function SwitchButton(props) {
  // const { hasLabel = true, className, style,
  //   input, messages, customOptions,
  //   hasLabelOverflow = true, isRequired } = props;
  const {
    hasLabel = true,
    // className,
    style,
    input,
    // messages,
    // customOptions,
    // hasLabelOverflow = true,
    // isRequired
  } = props;
  // const labelClassName = classNames({
  //   textOverflow: hasLabelOverflow,
  // });
  // const checked = customOptions ? input.value === '' || customOptions[0].value === input.value : input.value;
  // const onChangeHandler = (value) => {
  //   const newValue = customOptions ? customOptions[value ? 0 : 1].value : value;
  //   input.onChange(newValue);
  // };
  //
  // const renderLabel = () => {
  //   if (!hasLabel) return null;
  //   if (customOptions) {
  //     return customOptions[checked ? 0 : 1].label;
  //   }
  //   return (<ControlLabel className={labelClassName}>
  //     {isRequired && '*'}
  //     <TranslatedMessage messages={messages} messageId={input.name} />
  //   </ControlLabel>);
  // };
  const checked = input.value ? input.value : false;
  return (
    <FormItem
      // TODO: 翻译
      label={hasLabel ? input.name : ''}
    >
      {/* {renderLabel()} */}
      <Switch
        style={style}
        defaultChecked={checked}
        onChange={input.onChange}
        // checkedChildren={'Yes'}
        // unCheckedChildren={'No'}
      />
    </FormItem>
  );
}

SwitchButton.propTypes = {
  // customOptions: PropTypes.array,
  // isRequired: PropTypes.bool,
  hasLabel: PropTypes.bool,
  // messages: PropTypes.object,
  // className: PropTypes.string,
  style: PropTypes.object,
  input: PropTypes.object,
  // hasLabelOverflow: PropTypes.bool,
};

export default SwitchButton;
