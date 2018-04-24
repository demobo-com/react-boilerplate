/**
*
* Subtitle Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TranslatedMessage from 'components/TranslatedMessage';

import './style.scss';

function Subtitle(props) {
  return (
    <div className="subtitle">
      <div className="subtitle-line"></div>
      <TranslatedMessage id={props.id} />
      <div className="subtitle-line"></div>
    </div>
  );
}

Subtitle.propTypes = {
  id: PropTypes.string,
};

export default Subtitle;
