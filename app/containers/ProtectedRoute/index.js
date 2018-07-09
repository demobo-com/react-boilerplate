/**
 *
 * Auth
 * Higher Order Component that blocks navigation when the user is not logged in
 * and redirect the user to login page
 *
 * Wrap your protected routes to secure your container
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';

import auth from 'utils/auth';
import { selectIsLogoutDone } from 'containers/App/selectors';


class ProtectedRoute extends React.PureComponent {
  constructor(props) {
    super(props);

    this.savePreRoutePath = true;
  }

  componentWillReceiveProps(nextProps) {
    this.savePreRoutePath = this.props.isLogoutDone && !nextProps.isLogoutDone;
  }

  render() {
    const { component: Component, isLogoutDone, ...rest } = this.props;

    return (
      <Route
        {...rest}
        render={(props) => {
          const isLoggedIn = auth.getToken();
          if (isLoggedIn) return <Component {...props} />;

          const preRoutePath = this.savePreRoutePath ? props.location.pathname : '';
          auth.set(preRoutePath, 'preRoutePath');
          return <Redirect to={{ pathname: '/login', state: { preRoutePath: props.location.pathname, logout: !this.savePreRoutePath } }} />;
        }}
      />
    );
  }
}

ProtectedRoute.propTypes = {
  component: PropTypes.any,
  location: PropTypes.object,
  isLogoutDone: PropTypes.bool,
};

const mapStateToProps = createPropsSelector({
  isLogoutDone: selectIsLogoutDone,
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(ProtectedRoute);
