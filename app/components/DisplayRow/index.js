/**
*
* DisplayRow Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import TranslatedMessage from 'components/TranslatedMessage';
import { FormattedNumber } from 'react-intl';
// import messages from './messages';
import './style.scss';

const unitIds = {
  totalVolume: 'app.values.dollar',
  totalUsers: 'app.values.none',
  totalCars: 'app.values.none',
  investors: 'app.values.none',
  totalCompany: 'app.values.none',

  fundingInterestRate: 'app.values.percent',
  fundingPeriod: 'app.values.day',
  fundingNeeded: 'app.values.dollar',
  fundingBase: 'app.values.dollar',
};

function DisplayRow(props) {
  const { data, type, hasDivider, dividerStyle } = props;
  const [keys, values] = [Object.keys(data), Object.values(data)];
  const pairClassName = classNames({
    pair: true,
    hasDivider,
    dividerStyle,
    vertical: type === 'vertical',
    horizontal: type === 'horizontal',
    sloid: dividerStyle === 'solid',
    dotted: dividerStyle === 'dotted',
    dashed: dividerStyle === 'dashed',
  });
  return (
    <div className="display-row">
      {keys.map((key, index) => {
        const keyId = `app.data.${key}`;
        return (
          <div key={key} className={pairClassName}>
            <span className="value">
              <TranslatedMessage id={unitIds[key]} values={{ value: <span className="number"><FormattedNumber value={values[index]} /></span> }} />
            </span>
            <span className="key">
              <TranslatedMessage id={keyId} />
            </span>
          </div>
        );
      })}
    </div>
  );
}
DisplayRow.defaultProps = {
  data: {},
  type: 'vertical',
  hasDivider: false,
  dividerStyle: 'solid',
};
DisplayRow.propTypes = {
  data: PropTypes.object,
  type: PropTypes.string,
  hasDivider: PropTypes.bool,
  dividerStyle: PropTypes.string,
};

export default DisplayRow;
