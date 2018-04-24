import React from 'react';
import PropTypes from 'prop-types';
import { Row, Progress } from 'antd';
import { isMobile } from 'react-device-detect';
import CarImage from 'components/CarImage';
import TranslatedMessage from 'components/TranslatedMessage';
import DisplayRow from 'components/DisplayRow';
import DisplayColumn from 'components/DisplayColumn';
import OverallRatingLabel from 'components/OverallRatingLabel';
// import messages from './messages';
import './style.scss';

const renderCarInfo = (product) => {
  const { make, year, model,
    // carType,
    fundingRating } = product;
  const makeId = `app.make.${make}`;
  return (
    <div className="current-wrapper">
      <div className="info0">
        <TranslatedMessage id={makeId} />&nbsp;
        {year} {model}
      </div>
      <OverallRatingLabel rating={fundingRating} />
    </div>
  );
};

const renderFundingInfo = (product) => {
  const { fundingInterestRate, fundingPeriod, fundingNeeded, fundingBase } = product;
  const data = { fundingInterestRate, fundingPeriod, fundingNeeded, fundingBase };
  return <DisplayRow data={data} />;
};

const renderPercentage = (product) => {
  // const { fundingNeeded, fundingCollected } = product;
  const { percentage } = product;
  return <Progress className="info2" percent={percentage} status="active" />;
};

const renderFundingTable = (product) => {
  const { fundingHeadCount, fundingCollected, poolAmount, fundingEndDate } = product;
  const data1 = { fundingHeadCount, fundingCollected: <TranslatedMessage value={fundingCollected} type="number" unit="dollar" /> };
  const data2 = { poolAmount: <TranslatedMessage value={poolAmount} type="number" unit="dollar" />, fundingEndDate };
  return (<Row className="info3" justify="space-between" type="flex">
    <DisplayColumn className="column" data={data1} />
    <DisplayColumn className="column" data={data2} />
  </Row>);
};

const renderCarImage = (productImage) => <CarImage className="current-info-image" url={productImage} width="320" height="240" />;

const CurrentInfo = (props) => {
  const { product } = props;
  const productImage = product.images ? product.images[0] : null;
  return (
    <Row type="flex" justify="space-between" className="current-info">
      <div className="current-info-text">
        {renderCarInfo(product)}
        {renderFundingInfo(product)}
        {renderPercentage(product)}
        {renderFundingTable(product)}
      </div>
      {productImage && !isMobile && renderCarImage(productImage)}
    </Row>
  );
};

CurrentInfo.propTypes = {
  product: PropTypes.object,
};

export default CurrentInfo;
