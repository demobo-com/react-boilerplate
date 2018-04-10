/**
 *
 * LoginPage Container
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import LoginLayout from 'components/LoginLayout';
import { formatMessage } from 'components/TranslatedMessage';
import LoginForm from 'forms/LoginForm';
import messages from './messages';
import makeSelectLoginPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import './style.scss';

export class LoginPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  getLoginLayoutData() {
    return ({
      // onChange:
      tabPanes: [
        {
          key: 'enterpriseInvestor',
          iconType: 'usergroup-add',
          children: <LoginForm />,
        },
        {
          key: 'personInvestor',
          iconType: 'user',
          children: <LoginForm />,
        },
      ],
    });
  }

  render() {
    const { intl } = this.props;
    return (
      <div className="login-page">
        <Helmet
          title={formatMessage(intl, messages, 'loginPage')}
          meta={[
            { name: 'description', content: 'Description of LoginPage' },
          ]}
        />
        <LoginLayout {...this.getLoginLayoutData()} />
      </div>
    );
  }
}

LoginPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  intl: intlShape.isRequired,
};

const mapStateToProps = createStructuredSelector({
  loginPage: makeSelectLoginPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'loginPage', reducer });

const withSaga = injectSaga({ key: 'loginPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
  injectIntl,
)(LoginPage);
