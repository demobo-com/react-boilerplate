/**
 *
 * LoginPage Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { Helmet } from 'react-helmet';
import { Row, Col } from 'antd';

import auth from 'utils/auth';
import { loginByUserAction, signupUserAction, userSendVerificationAction, hideNotificationAction } from 'containers/App/actions';
import { selectShowResend, selectIsShowNotification, selectIsDone, selectError, selectMsg } from 'containers/App/selectors';
import Loader from 'components/Loader';
import LoginForm from 'forms/LoginForm';
import SignUpForm from 'forms/SignUpForm';
import './style.scss';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.sendVerification = false;
  }
  onLogin = (formData) => {
    const preRoutePath = auth.get('preRoutePath');
    auth.clearAppStorage();
    auth.set(preRoutePath, 'preRoutePath');
    this.props.onLogin(formData);
  }

  renderLogIn() {
    const { showResend, isDone } = this.props;
    return (
      <LoginForm
        onSubmit={this.onLogin}
        onSendVerification={this.onSendVerification}
        showResend={showResend}
        isDone={isDone}
      />
    );
  }
  renderSignUp() {
    const { onSignUp, isDone } = this.props;
    return (
      <SignUpForm
        onSubmit={onSignUp}
        isDone={isDone}
      />
    );
  }
  renderChildren() {
    this.path = this.props.match.path;
    switch (this.path) {
      case '/signUp':
        return this.renderSignUp();
      default:
        return this.renderLogIn();
    }
  }
  renderLoginLayout() {
    return (
      <div className="login-layout">
        <Helmet
          title="login"
          meta={[
            { name: 'description', content: 'login page' },
          ]}
        />
        <Row type="flex" justify="center" >
          <Col span="18">
            { this.renderChildren() }
          </Col>
        </Row>
      </div>
    );
  }
  render() {
    return (
      <div className="login-page">
        { !this.props.isDone && <Loader /> }
        <div className="page-container" >
          { this.renderLoginLayout() }
        </div>
      </div>
    );
  }
}

LoginPage.propTypes = {
  match: PropTypes.object,
  showResend: PropTypes.bool,
  isDone: PropTypes.bool,
  onLogin: PropTypes.func,
  onSignUp: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  showResend: selectShowResend,
  isShowNotification: selectIsShowNotification,
  isDone: selectIsDone,
  error: selectError,
  msg: selectMsg,
});

function mapDispatchToProps(dispatch) {
  return {
    onLogin: (formData) => dispatch(loginByUserAction(formData.toJS())),
    onSignUp: (formData) => dispatch(signupUserAction(formData.toJS())),
    onSendVerification: (user) => dispatch(userSendVerificationAction(user)),
    hideNotification: () => dispatch(hideNotificationAction()),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  injectIntl,
  withConnect,
)(LoginPage);
