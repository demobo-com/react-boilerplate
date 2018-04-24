/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Button as AntButton } from 'antd';
import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';

import './style.scss';

function Button(props) {
  const { hasBorder, ...buttonProps } = props;
  const { label, type, width, height, disabled, style, children, className } = props;
  const labelComponent = label ? <TranslatedMessage messages={messages} messageId={label} /> : null;
  const buttonClassName = classNames({
    [className]: true,
    'button-component': true,
    highlight: type === 'highlight',
    disabled,
    'has-border': hasBorder,
  });
  // const divStyle = { width };
  const buttonStyle = { width, height, ...style };
  return (
    <AntButton {...buttonProps} className={buttonClassName} style={buttonStyle}>
      {labelComponent}
      {children}
    </AntButton>
  );
}
Button.defaultProps = {
  style: {},
  className: '',
  type: '',
  label: '',
  width: '',
  height: '',
  disabled: false,
  hasBorder: false,
};
Button.propTypes = {
  style: PropTypes.object,
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  disabled: PropTypes.bool,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
  hasBorder: PropTypes.bool,
};

export default Button;
