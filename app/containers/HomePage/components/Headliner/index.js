/**
*
* Headliner Stateless Component
*
*/

import React from 'react';
// import PropTypes from 'prop-types';
import TranslatedMessage from 'components/TranslatedMessage';
import image from './assets/react-boilerplate.png';
import './style.scss';

// const headlinerStyle = { backgroundImage: `url(${car})` };

function Headliner() {
  return (<div className="head-liner">
    <div className="text">
      <h1 className="name">
        <TranslatedMessage id="app.default.text1" />
      </h1>
      <div className="break-line"></div>
      <h2 className="title">
        <TranslatedMessage id="app.default.text2" tagName="pre" />
      </h2>
      <h3 className="sub-title">
        <TranslatedMessage id="app.default.text3" />
      </h3>
    </div>
    <img className="head-image" src={image} alt="alt" />
  </div>);
}

export default Headliner;
