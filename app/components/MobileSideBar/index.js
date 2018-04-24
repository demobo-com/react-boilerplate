/**
*
* MobileSideBar
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Divider } from 'antd';
// import { Loader } from 'semantic-ui-react';

import TranslatedMessage from 'components/TranslatedMessage';
// import Button from 'components/Button';
import Avatar from 'components/Avatar';
import messages from './messages';
import './style.scss';

function MobileSideBar(props) {
  const { menuItems, open, isLogoutDone, isLoggedIn, authUser } = props;
  const sideBarClassName = open ? 'mobile-side-bar open' : 'mobile-side-bar';
  const avatar = isLoggedIn ? (<li className="avatar-line">
    {isLogoutDone && <Avatar url={authUser.logo} height={30} width={30} />}
    <span className="user-name">{authUser.firstName}&nbsp;{authUser.lastName}</span>
  </li>) : (
    <li className="avatar-line">
      <Avatar height={30} width={30} />
      <span className="user-name">
        <TranslatedMessage messages={messages} messageId="notLogIn" />
      </span>
    </li>
    );

  return (
    <div>
      {/* <Button label={<i className="fa fa-bars" aria-hidden="true"></i>} onClick={menuItems.button.onClick} /> */}
      {open &&
        <div className={sideBarClassName}>
          <div className="mobile-side-div" >
            <ul className="navbar-nav">
              {avatar}
              <Divider />
              {menuItems.children.map(({
                iconClassName = '',
                className = 'menu-line',
                isDivider = false,
                label,
                onClick,
                isShow = true,
              }, index) => {
                if (!isShow) return null;
                if (isDivider) { return <Divider key={`divider${index}`} />; } // eslint-disable-line react/no-array-index-key
                return (
                  <li key={label} className={className}>
                    <span // eslint-disable-line jsx-a11y/interactive-supports-focus
                      onClick={onClick}
                      role="button"
                    >
                      <i className={iconClassName} aria-hidden="true"></i>
                      <TranslatedMessage messages={messages} messageId={label} tagName="span" />
                    </span>
                    {/* { children || <Button type={type} onClick={onClick} icon={icon} label={label} style={buttonStyle} /> } */}
                  </li>
                );
              }
            )}
            </ul>
            <Divider />
            <p className="version-number">version 1.0.1</p>
          </div>
          <div // eslint-disable-line jsx-a11y/no-static-element-interactions
            className="mobile-shadow"
            onClick={menuItems.button.onClick}
          />
        </div>
      }
    </div>
  );
}

MobileSideBar.propTypes = {
  menuItems: PropTypes.object,
  open: PropTypes.bool,
  isLogoutDone: PropTypes.bool,
  isLoggedIn: PropTypes.bool,
  authUser: PropTypes.any,
  // open: PropTypes.bool,
  // refreshMobileStatus: PropTypes.func,
  // faq: PropTypes.string,
  // lanText: PropTypes.string,
  // changeLocaleLanguage: PropTypes.func,
  // showProfile: PropTypes.func,
  // showChangePassword: PropTypes.func,
  // showMyTrip: PropTypes.func,
  // showLogin: PropTypes.func,
  // showSignUp: PropTypes.func,
  // userLogout: PropTypes.func,
};

export default MobileSideBar;
