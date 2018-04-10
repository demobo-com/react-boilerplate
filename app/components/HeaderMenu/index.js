/**
*
* HeaderMenu Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Menu as AntdMenu } from 'antd';
import Button from 'components/Button';
import className from 'classnames';

// import TranslatedMessage from 'components/TranslatedMessage';
// import messages from './messages';
import './style.scss';

function HeaderMenu(props) {
  const { menuItems = [], mode = 'horizontal' } = props;
  return (
    <div className="header-menu">
      <AntdMenu mode={mode} >
        {
          menuItems.map(({ id, type = 'transparent', onClick, isShow = true, className: newClassName, children }) => {
            const itemClassName = className({
              hidden: !isShow,
              [newClassName]: newClassName,
            });
            return (
              <AntdMenu.Item key={id} className={itemClassName}>
                { children || <Button type={type} size="large" onClick={onClick} label={id} /> }
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
    id: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    isShow: PropTypes.bool,
    className: PropTypes.string,
    children: PropTypes.element,
  })),
};

export default HeaderMenu;
