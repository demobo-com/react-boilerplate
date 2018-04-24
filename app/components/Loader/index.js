/* eslint-disable global-require */
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import loader from './loader.gif';
import './style.scss';

class Loader extends Component {
  shouldComponentUpdate() {
    return false;
  }

  render() {
    const { message = '' } = this.props;
    // TODO: modif gif
    return (
      <div className="loader">
        <img src={loader} alt="loader" className="loader-image" />
        <p>{message}</p>
      </div>
    );
  }
}

Loader.propTypes = {
  message: PropTypes.string,
};

export default Loader;
