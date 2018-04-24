/**
*
* KeyValuePill Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TranslatedMessage from 'components/TranslatedMessage';
// import messages from './messages';
import './style.scss';

function KeyValuePill({ keyName, value, size }) {
  const className = classNames({
    'key-value-pill': true,
    [size]: true,
  });
  return (
    <div className={className}>
      <div className="key">
        <TranslatedMessage id={keyName} />
      </div>
      <div className="value">{value}</div>
    </div>
  );
}
KeyValuePill.defaultProps = {
  keyName: 'app.common.rating',
  value: 'A+',
  size: 'medium',
};
KeyValuePill.propTypes = {
  keyName: PropTypes.string,
  value: PropTypes.string,
  size: PropTypes.string,
};

export default KeyValuePill;
