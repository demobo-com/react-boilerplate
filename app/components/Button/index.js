/**
*
* Button
*
*/

import React from 'react';
// import styled from 'styled-components';

import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';
import { Button as AntButton } from 'antd';
import './button.scss';
function Button(props) {
  console.log(props.className);
  return (
     <AntButton type={props.type} className={props.className}>
       <TranslatedMessage messages={messages} messageId={props.text} />
     </AntButton>
  );
}

Button.propTypes = {

};

export default Button;
