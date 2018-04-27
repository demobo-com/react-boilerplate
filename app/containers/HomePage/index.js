/**
 *
 * HomePage Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import Headliner from './components/Headliner';
import IntroductionModule from './components/IntroductionModule';
import PerformanceDisplay from './components/PerformanceDisplay';
import { makeSelectHomePage, selectPerformance } from './selectors';
import reducer from './reducer';
import sagas from './sagas';
import './style.scss';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log('HomePage props', this.props);
    const { performance } = this.props;
    return (
      <div className="home-page">
        <Helmet
          title="Home"
          meta={[{ name: 'description', content: 'Home' }]}
        />
        <Headliner linkTo={this.props.linkTo} />
        <PerformanceDisplay performance={performance} />
        <IntroductionModule {...this.props} />
      </div>
    );
  }
}

HomePage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  performance: PropTypes.object,
  linkTo: PropTypes.func,
};

const mapStateToProps = createPropsSelector({
  homePage: makeSelectHomePage,
  performance: selectPerformance,
  locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    linkTo: (link) => dispatch(push(link)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'homePage', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(HomePage);
