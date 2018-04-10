/**
*
* Button
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Button as AntButton } from 'antd';
// import styled from 'styled-components';

import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';
import './button.scss';
function Button(props) {
  const { label } = props;
  return (
    <AntButton className="button" {...props}>
      <TranslatedMessage messages={messages} messageId={label} />
    </AntButton>
  );
}

Button.propTypes = {
  label: PropTypes.string,
};

export default Button;
