/**
 *
 * MyAccountPage Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { selectAuthUserInfo } from 'containers/App/selectors';
import AccountLayoutContainer from 'containers/AccountLayoutContainer';
import Loader from 'components/Loader';
import {
  loadMyAccountAction,
} from './actions';
import {
  selectIsLoading,
} from './selectors';
import reducer from './reducer';
import sagas from './sagas';
import './style.scss';

export class MyAccountPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    const { loadMyAccount, userInfo } = this.props;
    if (userInfo.uid) {
      loadMyAccount(userInfo);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { loadMyAccount, userInfo } = this.props;
    const { userInfo: nextUserInfo } = nextProps;
    if (userInfo.uid !== nextUserInfo.uid) {
      loadMyAccount(nextUserInfo);
    }
  }

  renderAccountLayout() {
    if (this.props.isLoading) return <Loader />;

    return (
      <AccountLayoutContainer
        helmetTitle="myAccountPage"
        helmetContent="Description of myAccountPage"
      >
        这是我的账户
      </AccountLayoutContainer>
    );
  }

  render() {
    return (
      <div className="my-account-page">
        { this.renderAccountLayout() }
      </div>
    );
  }
}

MyAccountPage.propTypes = {
  isLoading: PropTypes.bool,
  userInfo: PropTypes.object,
  loadMyAccount: PropTypes.func,
};

const mapStateToProps = createPropsSelector({
  isLoading: selectIsLoading,
  userInfo: selectAuthUserInfo,
});

function mapDispatchToProps(dispatch) {
  return {
    loadMyAccount: (uid) => dispatch(loadMyAccountAction(uid)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myAccountPage', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(MyAccountPage);
