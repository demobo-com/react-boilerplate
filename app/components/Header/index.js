/**
*
* Header Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Button } from 'antd';
import classNames from 'classnames';
import { isMobile } from 'react-device-detect';

import HeaderMenu from 'components/HeaderMenu';
import './style.scss';
import DefaultLogoSrc from './logo.png';

function Header(props) {
  const { isFixed, logoSrc, onClick, menuItems } = props;
  const headerClassName = classNames({
    header: true,
    'header-fixed': isMobile && isFixed,
  });

  return (
    <Row type="flex" justify="space-between" className={headerClassName}>
      <div>
        <img // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
          src={logoSrc}
          className="logo"
          alt="logo"
          onClick={onClick}
        />
      </div>
      {
        isMobile
        ? <Button onClick={menuItems.button.onClick}><i className="fa fa-bars menu-side-icon"></i></Button>
        : <HeaderMenu menuItems={menuItems} width="100%" />
      }
    </Row>
  );
}

Header.defaultProps = {
  isFixed: false,
  logoSrc: DefaultLogoSrc,
  onClick: () => null,
  menuItems: [],
};

Header.propTypes = {
  isFixed: PropTypes.bool,
  logoSrc: PropTypes.string,
  onClick: PropTypes.func,
  menuItems: PropTypes.any,
};

export default Header;
