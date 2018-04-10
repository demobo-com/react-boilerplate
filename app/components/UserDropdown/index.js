/**
*
* UserDropdown Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Avatar } from 'antd';

import HeaderMenu from 'components/HeaderMenu';
// import TranslatedMessage from 'components/TranslatedMessage';
// import messages from './messages';
import './style.scss';

function UserDropdown(props) {
  const { menuItems = [] } = props;
  const menu = <HeaderMenu menuItems={menuItems} mode="vertical" />;

  return (
    <div className="logo-dropdown">
      <Dropdown overlay={menu} trigger={['click']} placement="bottomCenter">
        <Avatar icon="user" size="large" />
      </Dropdown>
    </div>
  );
}

UserDropdown.propTypes = {
  menuItems: PropTypes.array,
};

export default UserDropdown;
