/**
*
* Button
*
*/

import React from 'react';
import { Button as AntdButton } from 'antd';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Button(props) {
  const { label } = props;
  return (
    <AntdButton {...props}>
      <FormattedMessage {...messages.hello} />
    </AntdButton>
  );
}

Button.propTypes = {

};

export default Button;
