/**
*
* PerformanceDisplay Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import DisplayRow from 'components/DisplayRow';
// import TranslatedMessage from 'components/TranslatedMessage';
// import messages from './messages';
import './style.scss';

function PerformanceDisplay(props) {
  console.log('PerformanceDisplay props', props);
  const { performance = {} } = props;
  return (
    <div className="performance-display">
      <DisplayRow data={performance} />
    </div>
  );
}

PerformanceDisplay.propTypes = {
  performance: PropTypes.object,
};

export default PerformanceDisplay;
