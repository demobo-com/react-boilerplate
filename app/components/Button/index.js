/**
*
* Button
*
*/

import React from 'react';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Button(props) {
  return (
    <button {...props}>
      <FormattedMessage {...messages.header} />
    </button>
  );
}

Button.propTypes = {

};

export default Button;
