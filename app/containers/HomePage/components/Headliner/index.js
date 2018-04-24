/**
*
* Headliner Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TranslatedMessage from 'components/TranslatedMessage';
import Button from 'components/Button';
import head from './assets/head.png';
import './style.scss';

// const headlinerStyle = { backgroundImage: `url(${car})` };

function Headliner(props) {
  const { linkTo } = props;
  return (<div className="head-liner">
    <div className="text">
      <h1 className="name">
        <TranslatedMessage id="app.components.Headliner.name" />
      </h1>
      <div className="break-line"></div>
      <h2 className="title">
        <TranslatedMessage id="app.components.Headliner.title" tagName="pre" />
        <Button label="fundNow" type="primary" className="title-button" onClick={() => linkTo('/products')} />
      </h2>
      <h3 className="sub-title">
        <TranslatedMessage id="app.components.Headliner.subTitle" />
      </h3>
    </div>
    <img className="head-image" src={head} alt="head-img" />
  </div>);
}

Headliner.propTypes = {
  linkTo: PropTypes.func,
};

export default Headliner;
