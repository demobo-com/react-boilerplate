/**
*
* HeaderMenu Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Menu as AntdMenu } from 'antd';
import Button from 'components/Button';
import classNames from 'classnames';

import './style.scss';

function HeaderMenu(props) {
  const { menuItems = [], mode = 'horizontal', height = '', width = '', menuStyle = {} } = props;
  return (
    <div className="header-menu">
      <AntdMenu mode={mode} style={menuStyle}>
        {
          menuItems.map(({ isDivider = false, buttonStyle = {}, label, type = 'default', onClick, icon, isShow = true, children }) => {
            if (isDivider) return <AntdMenu.Divider key={label} />;

            const menuItemClassName = classNames({
              hidden: !isShow,
            });
            return (
              <AntdMenu.Item key={label} className={menuItemClassName} >
                { children || <Button type={type} onClick={onClick} width={width} height={height} icon={icon} label={label} style={buttonStyle} /> }
              </AntdMenu.Item>
            );
          })
        }
      </AntdMenu>
    </div>
  );
}

HeaderMenu.propTypes = {
  mode: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    isDivider: PropTypes.bool,
    buttonStyle: PropTypes.object,
    label: PropTypes.string,
    type: PropTypes.string,
    icon: PropTypes.string,
    onClick: PropTypes.func,
    isShow: PropTypes.bool,
    children: PropTypes.element,
  })),
  width: PropTypes.string,
  height: PropTypes.string,
  menuStyle: PropTypes.object,
};

export default HeaderMenu;
