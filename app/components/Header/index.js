/**
*
* Header Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';

import Menu from 'components/Menu';
import './header.scss';

function Header(props) {
  const { logoSrc, menuItems } = props;
  return (
    <div className="header">
      <div className="page-wrap">
        <Row type="flex" justify="space-between">
          <Col>
            <img src={logoSrc} alt="logo" />
          </Col>
          <Col>
            <Menu menuItems={menuItems} />
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
