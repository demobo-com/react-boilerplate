/**
*
* UserDropdown Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown } from 'antd';
import { isMobile } from 'react-device-detect';


import Avatar from 'components/Avatar';
import HeaderMenu from 'components/HeaderMenu';
import './style.scss';

function UserDropdown(props) {
  const { userImgSrc = '' } = props;
  const menu = <HeaderMenu {...props} mode="vertical" />;
  const avater = <Avatar url={userImgSrc} width={40} height={40} />;
  return (
    <div className="user-dropdown">
      {!isMobile ?
        <Dropdown overlay={menu} placement="bottomCenter">
          { avater }
        </Dropdown> :
        { avater }
    }
    </div>
  );
}

UserDropdown.propTypes = {
  userImgSrc: PropTypes.string,
};

export default UserDropdown;
