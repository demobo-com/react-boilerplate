/**
*
* Button
*
*/

import React from 'react';
import { Button as AntdButton } from 'antd';
import PropTypes from 'prop-types';
import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';

function Button(props) {
  const { label = "" } = props;
  const labelComponent = label ? <TranslatedMessage messages={messages} messageId={label} /> : null;
  return (
    <AntdButton {...props}>
      {labelComponent}
    </AntdButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
