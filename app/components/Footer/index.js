/**
*
* Footer
*
*/

import React from 'react';
import { Layout, Icon } from 'antd';
import { isMobile } from 'react-device-detect';

import './style.scss';
import DefaultLogoSrc from './logo.png';
const { Footer: AntFooter } = Layout;

function Footer() {
  return (
    <AntFooter className="footer">
      <div className="footer-content">
        <div className="MessageWrapper">
          {!isMobile && <div className="logo">
            <img src={DefaultLogoSrc} alt="login" />
          </div>}
          <div className="message">
            <div className="contact">
              <div className="tel">
                <Icon type="phone" />&nbsp;&nbsp;001-626--202-3397
              </div>
              <div className="address">
                <Icon type="environment" />&nbsp;&nbsp;3350 Scott Blvd, Santa Clara, CA
              </div>
              <div className="email">
                <Icon type="mail" />&nbsp;&nbsp;oc@overseascredits.com
              </div>
            </div>
            <div className="copyright">
              Copyrights &copy;LendingCar. All rights reserved;
            </div>
          </div>
        </div>
      </div>
    </AntFooter>
  );
}

Footer.propTypes = {

};

export default Footer;
