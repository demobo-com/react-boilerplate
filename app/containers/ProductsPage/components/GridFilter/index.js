/**
*
* GridFilter Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
// import { pick } from 'lodash';
import { Row } from 'antd';

import TranslatedMessage from 'components/TranslatedMessage';
import FilterComponent from '../FilterComponent';
// import messages from './messages';
import './style.scss';

function GridFilter(props) {
  const {
    changeFilter,
    optionsAvailability,
    optionsFundingBase,
    optionsFundingPeriod,
    productFilter,
  } = props;
  return (
    <div className="grid-filter">
      <div className="filters">
        <Row justify="start" type="flex">
          <div className="title">
            <TranslatedMessage id="app.components.GridFilter.row1" />
          </div>
          <FilterComponent
            name="fundingPeriod"
            options={optionsFundingPeriod}
            filter={productFilter}
            changeFilter={changeFilter}
          />
        </Row>
        <Row justify="start" type="flex">
          <div className="title">
            <TranslatedMessage id="app.components.GridFilter.row1" />
          </div>
          <FilterComponent
            name="availability"
            options={optionsAvailability}
            filter={productFilter}
            changeFilter={changeFilter}
          />
        </Row>
        <Row justify="start" type="flex">
          <div className="title">
            <TranslatedMessage id="app.components.GridFilter.row1" />
          </div>
          <FilterComponent
            name="fundingBase"
            options={optionsFundingBase}
            filter={productFilter}
            changeFilter={changeFilter}
          />
        </Row>
      </div>
    </div>
  );
}

GridFilter.propTypes = {
  productFilter: PropTypes.object,
  changeFilter: PropTypes.func,
  optionsAvailability: PropTypes.array,
  optionsFundingBase: PropTypes.array,
  optionsFundingPeriod: PropTypes.array,
};

export default GridFilter;
