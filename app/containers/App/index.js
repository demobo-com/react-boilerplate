/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { push } from 'react-router-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { getSameBoolean } from 'utils/helpers';
import { notification } from 'antd';
import { isMobile } from 'react-device-detect';

import MobileSideBar from 'components/MobileSideBar';
import Loader from 'components/Loader';
import Header from 'components/Header';
import Footer from 'components/Footer';
import UserDropdown from 'components/UserDropdown';
import HomePage from 'containers/HomePage/Loadable';
import ProductPage from 'containers/ProductPage/Loadable';
import ProductsPage from 'containers/ProductsPage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage';
import MyAccountPage from 'containers/MyAccountPage';
import MyProfilePage from 'containers/MyProfilePage';
import { changeLocaleAction } from 'containers/LanguageProvider/actions';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import * as FirebaseApi from 'apis/firebase';
import getExploreName from 'utils/getExploreName';
import {
  logoutByUserAction,
  loggedInByUserAction,
} from './actions';
import {
  selectIsLoggedIn,
  selectIsLogoutDone,
  selectAuthUserInfo,
} from './selectors';
import reducer from './reducer';
import sagas from './sagas';
import './style.scss';

notification.config({
  top: '50%',
  duration: 3,
});

window.alert = (title = 'Error', message = '错误信息', type = 'error') => {
  const typeList = ['success', 'error', 'info', 'warning'];
  if (!typeList.includes(type)) {
    console.error('alert类型不正确!,正确类型有success, error, info, warning');
  }
  const key = new Date().getTime();
  notification[type]({
    key,
    message: title,
    description: message,
  });
  return key;
};

window.alert.close = (key) => {
  notification.close(key);
};

export class App extends React.Component {
  constructor(props) {
    super(props);

    window.linkTo = this.props.linkTo;
    window.checkLogin = this.checkLogin;
    this.exploreName = getExploreName();
    this.state = {
      sideBarOpen: false,
      navbarFixed: false,
    };
  }

  componentDidMount() {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      this.refreshSecurityToken();
      this.securityTimer = setInterval(this.refreshSecurityToken, (1000 * 60 * 50));
    }

    if (isMobile) window.addEventListener('scroll', this.onScroll);
  }

  componentWillUnmount() {
    if (isMobile) window.removeEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (this.state.navbarFixed && scrollTop < 80) {
      this.setState({
        navbarFixed: false,
      });
    } else if (!this.state.navbarFixed && scrollTop > 80) {
      this.setState({
        navbarFixed: true,
      });
    }
  };

  onToggleSideBar = () => this.setState({ sideBarOpen: !this.state.sideBarOpen });

  onClick = (link) => () => {
    linkTo(link);
    if (isMobile && link !== '/') this.onToggleSideBar();
  };

  onToggleLanguage = () => {
    const newLocale = (this.props.locale === 'en') ? 'zh' : 'en';
    this.props.changeLocale(newLocale);
  }

  onlogOut = () => {
    if (isMobile) this.onToggleSideBar();
    this.props.logout();
  };

  getUserDropDownMenuItems() {
    const { authUser } = this.props;
    const { onClick } = this;

    return {
      userImgSrc: authUser.logo,
      width: '160px',
      height: '40px',
      menuStyle: {
        border: '1px solid #e0e0e0',
        borderRadius: '3px',
        overFlow: 'hidden',
      },
      menuItems: [
        {
          label: 'myAccount',
          onClick: onClick('/myAccount'),
        },
        {
          label: 'accountManagement',
          onClick: onClick('/myProfile'),
        },
        {
          isDivider: true,
          label: 'divider',
        },
        {
          label: 'logOut',
          onClick: this.props.logout,
        },
      ],
    };
  }

  getHeaderMenuItems = () => {
    const { locale, isLoggedIn } = this.props;
    const { onClick, onToggleLanguage } = this;
    return [
      {
        label: 'home',
        onClick: onClick('/'),
      },
      {
        label: 'crowdFund',
        onClick: onClick('/products'),
      },
      {
        label: locale === 'zh' ? 'en' : 'zh',
        onClick: onToggleLanguage,
      },
      {
        label: 'logIn',
        isShow: !isLoggedIn,
        onClick: onClick('/logIn'),
      },
      {
        label: 'signUp',
        isShow: !isLoggedIn,
        onClick: onClick('/signUp'),
        type: 'warning',
      },
      {
        label: 'user',
        isShow: isLoggedIn,
        children: <UserDropdown {...this.getUserDropDownMenuItems()} />,
      },
    ];
  }

  getMobileHeaderMenuItems = () => {
    const { locale, isLoggedIn } = this.props;
    const { onToggleSideBar, onClick, onToggleLanguage, onlogOut } = this;
    return {
      button: {
        label: 'mobile-Menu',
        onClick: onToggleSideBar,
      },
      children: [
        {
          label: 'crowdFund',
          onClick: onClick('/products'),
          iconClassName: 'fa fa-car',
        },
        {
          isDivider: true,
          label: 'divider',
        },
        {
          label: 'myAccount',
          isShow: isLoggedIn,
          onClick: onClick('/myAccount'),
          iconClassName: 'anticon anticon-bank',
        },
        {
          label: 'accountManagement',
          isShow: isLoggedIn,
          onClick: onClick('/myProfile'),
          iconClassName: 'anticon anticon-setting',
        },
        {
          isShow: isLoggedIn,
          isDivider: true,
          label: 'divider',
        },
        {
          label: locale === 'zh' ? 'en' : 'zh',
          onClick: onToggleLanguage,
          iconClassName: 'fa fa-globe',
        },
        {
          label: 'signUp',
          isShow: !isLoggedIn,
          onClick: onClick('/signUp'),
          type: 'warning',
          iconClassName: 'fa fa-user-plus',
        },
        {
          label: 'logOut',
          isShow: isLoggedIn,
          onClick: onlogOut,
          className: 'login-line',
          iconClassName: 'fa fa-power-off',
        },
        {
          label: 'logIn',
          isShow: !isLoggedIn,
          onClick: onClick('/logIn'),
          className: 'login-line',
          iconClassName: 'fa fa-sign-in',
        },
      ],
    };
  }

  checkLogin = () => {
    const isLoginedIn = localStorage.accessToken;
    if (!isLoginedIn) {
      sessionStorage.setItem('preRoutePath', location.pathname);
      this.props.linkTo('/login');
    }
    return isLoginedIn;
  };

  refreshSecurityToken = () => {
    FirebaseApi.initAuth()
      .then((user) => {
        if (user) {
          if (!getSameBoolean(user.emailVerified)) {
            // TODO: email not verified error message
            window.alert('Warning', 'Email is not verified, please contact support', 'info'); // TODO: why this.container is undefined
          }
          this.props.loggedIn(user);
        } else {
          this.props.logout();
        }
        return user;
      });
  }

  renderHeader = () => {
    const menuItems = isMobile ? this.getMobileHeaderMenuItems() : this.getHeaderMenuItems();
    return (
      <Header
        onClick={this.onClick('/')}
        menuItems={menuItems}
        isFixed={this.state.navbarFixed}
      />
    );
  }

  renderMobileSideBar = () => {
    const isShow = isMobile && this.state.sideBarOpen;
    if (!isShow) return '';

    return (
      <MobileSideBar
        onClick={this.onClick('/')}
        menuItems={this.getMobileHeaderMenuItems()}
        isLogoutDone={this.props.isLogoutDone}
        open={this.state.sideBarOpen}
        authUser={this.props.authUser}
        {...this.props}
      />
    );
  }

  render() {
    return (
      <div className={`app ${this.exploreName}`}>
        <div className="app-wrap">
          { !this.props.isLogoutDone && <Loader /> }
          { this.renderMobileSideBar() }
          <div className="app-main">
            { this.renderHeader() }
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route exact path="/product/:productId" component={ProductPage} />
              <Route exact path="/products" component={ProductsPage} />
              <Route exact path="/logIn" component={LoginPage} />
              <Route exact path="/signUp" component={LoginPage} />
              <Route exact path="/myAccount" component={MyAccountPage} />
              <Route exact path="/myProfile" component={MyProfilePage} />

              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        <div className="footer-main">
          <Footer />
        </div>
      </div>
    );
  }
}

App.defaultProps = {
  authUser: {},
};

App.propTypes = {
  linkTo: PropTypes.func,
  locale: PropTypes.string,
  isLoggedIn: PropTypes.bool,
  isLogoutDone: PropTypes.bool,
  changeLocale: PropTypes.func,
  loggedIn: PropTypes.func,
  logout: PropTypes.func,
  authUser: PropTypes.any,
};


const mapStateToProps = createPropsSelector({
  locale: makeSelectLocale(),
  isLoggedIn: selectIsLoggedIn,
  isLogoutDone: selectIsLogoutDone,
  authUser: selectAuthUserInfo,
});

function mapDispatchToProps(dispatch) {
  return {
    linkTo: (link) => dispatch(push(link)),
    changeLocale: (languageLocale) => dispatch(changeLocaleAction(languageLocale)),
    loggedIn: (user) => dispatch(loggedInByUserAction(user)),
    logout: () => dispatch(logoutByUserAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps, null, { pure: false });

const withReducer = injectReducer({ key: 'app', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(App);
