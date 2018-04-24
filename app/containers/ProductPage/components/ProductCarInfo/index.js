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
// import messages from './messages';
import './style.scss';

const translations = {
  accident: { id: 'app.value.accident' },
  paymentMethod: { id: 'app.value.paymentMethod' },
  remittance: { id: 'app.value.remittance' },
  price: { type: 'number', unit: 'dollar' },
  mileage: { type: 'number', unit: 'miles' },
  year: { type: 'number', unit: 'years', withDelimiter: false },
};

function translatedValues(value, key) {
  const translationProps = translations[key];
  if (translationProps) return <TranslatedMessage {...translationProps} value={value} />;
  return value;
}

function ProductCarInfo(props) {
  const { product } = props;
  const { make, year, model, vin, mileage, accident = 'NO', price, images } = product;
  const makeModel = (
    <span>
      <TranslatedMessage id={`app.make.${make}`} /> {year} {model}
    </span>
  );
  // const makeModel = { make, year, model };
  const data = { makeModel, year, vin, mileage, accident, price };
  const translatedData = mapValues(data, translatedValues);
  const imagesShown = isMobile ? 1 : 3;
  return (
    <div className="product-car-info">
      <Subtitle id="app.common.carInfo" />
      {images && images.length && <Carousel className="images" imageUrls={images} imagesShown={imagesShown} />}
      <DisplayColumn data={translatedData} className="" />
    </div>
  );
}

ProductCarInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductCarInfo;
