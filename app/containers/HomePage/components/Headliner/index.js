/**
*
* Headliner Stateless Component
*
*/

import React from 'react';

import TranslatedMessage from 'components/TranslatedMessage';
import './style.scss';

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
        <TranslatedMessage id="app.default.text5" />
      </h3>
    </div>
  </div>);
}

export default Headliner;
