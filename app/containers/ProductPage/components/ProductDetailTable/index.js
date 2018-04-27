/**
*
* ProductDetailTable Stateless Component
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import pick from 'lodash/pick';
import mapValues from 'lodash/mapValues';
import Subtitle from 'components/Subtitle';
import DisplayColumn from 'components/DisplayColumn';
import TranslatedMessage from 'components/TranslatedMessage';
import './style.scss';

function slicedObject(object, start, end) {
  const result = {};
  Object.keys(object).forEach((key, index) => {
    const inRange = index >= start && index < end;
    if (inRange) {
      result[key] = object[key];
    }
  });
  return result;
}

const translations = {
  expectedAnnualYield: { type: 'number', unit: 'percent' },
  crowdfunding: { type: 'number', unit: 'dollar' },
  investmentPeriod: { type: 'number', unit: 'days' },
  min: { type: 'number', unit: 'dollar' },
  max: { type: 'number', unit: 'dollar' },
  investmentBase: { type: 'number', unit: 'dollar' },
  paymentMethod: { id: 'app.value.paymentMethod' },
  remittance: { id: 'app.value.remittance' },
};

function translatedValues(value, key) {
  const translationProps = translations[key];
  if (translationProps) return <TranslatedMessage id="app.value.none" value={value} />;
  return value;
}

function ProductDetailTable(props) {
  const keys = props.keys || Object.keys(props.data);
  const data = props.keys ? pick(props.data, props.keys) : props.data;
  const translatedData = mapValues(data, translatedValues);
  const { length } = keys;
  const dataHead = slicedObject(translatedData, 0, length / 2);
  const dataTail = slicedObject(translatedData, length / 2, length + 1);
  return (
    <div className="product-detail-table">
      <Subtitle id="app.common.productDetail" />
      <div className="table">
        <Row type="flex">
          <Col style={{ flex: 1 }}>
            <DisplayColumn data={dataHead} hasStripe keyAlign="left" valueAlign="center" />
          </Col>
          <Col style={{ flex: 1 }}>
            <DisplayColumn data={dataTail} hasStripe keyAlign="center" valueAlign="right" />
          </Col>
        </Row>
      </div>
    </div>
  );
}


ProductDetailTable.propTypes = {
  data: PropTypes.object,
  keys: PropTypes.array,
};

export default ProductDetailTable;
