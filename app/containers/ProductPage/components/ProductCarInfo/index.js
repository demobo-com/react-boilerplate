/**
*
* ProductCarInfo Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import mapValues from 'lodash/mapValues';
import Carousel from 'components/Carousel';
import TranslatedMessage from 'components/TranslatedMessage';
import Subtitle from 'components/Subtitle';
import DisplayColumn from 'components/DisplayColumn';
import { isMobile } from 'react-device-detect';
import './style.scss';

const translations = {
  year: { type: 'number', unit: 'years', withDelimiter: false },
  mileage: { type: 'number', unit: 'miles' },
  accident: { id: 'app.value.accident' },
  price: { type: 'number', unit: 'dollar' },
  paymentMethod: { id: 'app.value.paymentMethod' },
  remittance: { id: 'app.value.remittance' },
};

function translatedValues(value, key) {
  const translationProps = translations[key];
  if (translationProps) return <TranslatedMessage {...translationProps} value={value} />;
  return value;
}

function ProductCarInfo(props) {
  const { product } = props;
  const { productName, year, vin, mileage, accident = 'NO', price, images } = product;
  const imagesShown = isMobile ? 1 : 3;
  const makeModel = <TranslatedMessage id={`app.data.${productName}`} />;
  const data = { makeModel, year, vin, mileage, accident, price };
  const translatedData = mapValues(data, translatedValues);


  return (
    <div className="product-car-info">
      <Subtitle id="app.common.carInfo" />
      {images && images.length && <Carousel className="images" imageUrls={images} imagesShown={imagesShown} />}
      <DisplayColumn data={translatedData} />
    </div>
  );
}

ProductCarInfo.defaultProps = {
  product: {},
};

ProductCarInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductCarInfo;
