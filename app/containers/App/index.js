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
import sagas from './sagas';

export class App extends React.Component {
  getUserDropDownMenuItems() {
    return ([
      {
        id: 'logOut',
        link: '/logOut',
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
          onClick: this.linkTo('/home'),
        },
        {
          id: 'crowdFund',
          onClick: this.linkTo('/crowdFund'),
        },
        {
          id: locale === 'zh' ? 'zh' : 'en',
          onClick: this.linkTo('/crowdFund'),
        },
        {
          id: 'logIn',
          isShow: !isLoggedIn,
          onClick: this.linkTo('/logIn'),
        },
        {
          id: 'signUp',
          isShow: !isLoggedIn,
          onClick: this.linkTo('/signUp'),
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

  linkTo(link) {
    return () => this.props.history.push(link);
  }

  render() {
    return (
      <div>
        <Route path="/" render={(props) => <Header {...this.getHeaderMenuItems()} {...props} />} />

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
  history: PropTypes.object,
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

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(App);
