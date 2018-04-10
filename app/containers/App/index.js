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
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Switch, Route } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import Header from 'components/Header';
import UserDropdown from 'components/UserDropdown';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import LoginPage from 'containers/LoginPage';
import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import { makeSelectIsLoggedIn } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class App extends React.Component {
  getUserDropDownMenuItems() {
    return ([
      {
        id: 'logOut',
      },
    ]);
  }

  getHeaderMenuItems() {
    const { locale, isLoggedIn } = this.props;
    return {
      logoSrc: '#',
      menuItems: [
        {
          id: 'home',
          // onClick: ,
        },
        {
          id: 'crowdFund',
          // onClick: action('crowdFund was clicked'),
        },
        {
          id: locale === 'zh' ? 'zh' : 'en',
          // onClick: action('english was clicked'),
        },
        {
          id: 'logIn',
          isShow: !isLoggedIn,
          // onClick: action('logIn was clicked'),
        },
        {
          id: 'signUp',
          isShow: !isLoggedIn,
          // onClick: action('signUp was clicked'),
          type: 'primary',
        },
        {
          id: 'user',
          isShow: isLoggedIn,
          children: <UserDropdown menuItems={this.getUserDropDownMenuItems()} />,
        },
      ],
    };
  }

  render() {
    // console.log(111, makeSelectIsLoggedIn)
    return (
      <div>
        <Header {...this.getHeaderMenuItems()} />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/logIn" component={LoginPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  locale: PropTypes.string,
  isLoggedIn: PropTypes.bool,
};


const mapStateToProps = createStructuredSelector({
  locale: makeSelectLocale(),
  isLoggedIn: makeSelectIsLoggedIn,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'app', reducer });

const withSaga = injectSaga({ key: 'app', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(App);
