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
  const { userImgSrc } = props;

  return (
    <div className="user-dropdown">
      {
        !isMobile
        ? <Dropdown overlay={<HeaderMenu {...props} mode="vertical" />} placement="bottomCenter">
          <Avatar url={userImgSrc} width={40} height={40} />
        </Dropdown>
        : <Avatar url={userImgSrc} width={40} height={40} />
      }
    </div>
  );
}

UserDropdown.defaultProps = {
  userImgSrc: '',
};

UserDropdown.propTypes = {
  userImgSrc: PropTypes.string,
};

export default UserDropdown;
