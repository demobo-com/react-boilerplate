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
    optionsbase,
    optionsperiod,
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
            name="period"
            options={optionsperiod}
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
            name="base"
            options={optionsbase}
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
  optionsbase: PropTypes.array,
  optionsperiod: PropTypes.array,
};

export default GridFilter;
