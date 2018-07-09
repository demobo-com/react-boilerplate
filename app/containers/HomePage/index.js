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

import { makeSelectLocale } from 'containers/LanguageProvider/selectors';
import Headliner from './components/Headliner';
import './style.scss';

export class HomePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="home-page">
        <Helmet
          title="Home"
          meta={[{ name: 'description', content: 'Home' }]}
        />
        <Headliner linkTo={this.props.linkTo} />
      </div>
    );
  }
}

HomePage.propTypes = {
  linkTo: PropTypes.func,
};

const mapStateToProps = createPropsSelector({
  locale: makeSelectLocale(),
});

function mapDispatchToProps(dispatch) {
  return {
    linkTo: (link) => dispatch(push(link)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose(
  withConnect,
)(HomePage);
