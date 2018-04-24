/**
 *
 * MyProfilePage Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import ProfileForm from 'forms/ProfileForm';
import AccountLayoutContainer from 'containers/AccountLayoutContainer';
import selectMyProfilePage from './selectors';
import reducer from './reducer';
import sagas from './sagas';
import './style.scss';

export class MyProfilePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { location } = this.props;
    const { state = {} } = location;

    return (
      <div className="my-profile-page">
        <AccountLayoutContainer
          helmetTitle="myProfilePage"
          helmetContent="Description of MyInvestmentsPage"
        >
          <ProfileForm {...this.props} showErrors={state.showErrors} />
        </AccountLayoutContainer>
      </div>
    );
  }
}

MyProfilePage.propTypes = {
  location: PropTypes.object,
};

const mapStateToProps = createPropsSelector({
  myProfilePage: selectMyProfilePage,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'myProfilePage', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(MyProfilePage);
