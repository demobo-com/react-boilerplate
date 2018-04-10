/**
*
* Header Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import HeaderMenu from 'components/HeaderMenu';
import './style.scss';
// import DefaultLogoSrc from './logo.png';

function Header(props) {
  const { logoSrc = '#', menuItems } = props;
  return (
    <div className="header">
      <div className="page-wrap">
        <Row type="flex" justify="space-between" gutter={0} >
          <Col>
            <img src={logoSrc} alt="logo" />
          </Col>
          <Col>
            <HeaderMenu menuItems={menuItems} />
          </Col>
        </Row>
      </div>
    </div>
  );
}

Header.propTypes = {
  logoSrc: PropTypes.string,
  menuItems: PropTypes.array,
};

export default Header;
