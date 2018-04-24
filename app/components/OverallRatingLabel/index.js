/**
*
* OverallRatingLabel Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import TranslatedMessage from 'components/TranslatedMessage';

import './style.scss';

function OverallRatingLabel(props) {
  return (
    <div className="overall-rating-label">
      <div className="title">
        <TranslatedMessage id="app.common.rating" />
      </div>
      <div className="rating">{props.rating}</div>
    </div>
  );
}

OverallRatingLabel.propTypes = {
  rating: PropTypes.string,
};

export default OverallRatingLabel;
