/**
*
* Header
*
*/

import React from 'react';

import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';
import './header.scss';

function Header() {
  return (
    <div className="header">
      <TranslatedMessage messages={messages} messageId="hello" />
    </div>
  );
}

Header.propTypes = {

};

export default Header;
