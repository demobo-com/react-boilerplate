/**
*
* Footer
*
*/

import React from 'react';

import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';
import { Layout, Icon } from 'antd';
const { Footer: AntFooter } = Layout;
import './footer.scss';

function Footer() {
  return (
    <AntFooter className="footer">
      <div className="content clearfloat">
        <div className="Message">
          <div className="logo">
            <img src=""/>
          </div>
          <div className="contact">
            <h3>
              <TranslatedMessage messages={messages} messageId="contact" />
            </h3>
            <div className="tel">
              <Icon type="phone" /> 001-626--202-3397
            </div>
            <div className="address">
              <Icon type="environment" /> 3350-scott-Blvd, Santa Clara, CA
            </div>
            <div className="email">
              <Icon type="mail" /> CFO@lendingcar.com
            </div>
          </div>
          <div className="team">
            <h3>
              <TranslatedMessage messages={messages} messageId="team" />
            </h3>
            <img src=""/>
          </div>
          <div className="copyright">
            Copyrights &copy;LendingCar. All rights reserved;
          </div>
        </div>
      </div>
    </AntFooter>
  );
}

Footer.propTypes = {

};

export default Footer;
