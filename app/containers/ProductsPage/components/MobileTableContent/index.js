/**
*
* MobileTableContent Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Row, Icon, Col } from 'antd';

import TranslatedMessage from 'components/TranslatedMessage';
import OverallRatingLabel from 'components/OverallRatingLabel';
import './style.scss';

function MobileTableContent(props) {
  const { product, onClick } = props;
  return (
    <div // eslint-disable-line
      className="mobile-table-content"
      onClick={() => onClick(product)}
    >
      <Row justify="space-between" type="flex" className="table-title-row">
        <div className="mobile-table-title">
          <TranslatedMessage id={`app.data.${product.productName}`} />&nbsp;
        </div>
        <OverallRatingLabel rating={product.fundingRating} />
        <Icon type="right" className="icon-right" />
      </Row>
      <Row justify="start" type="flex" className="mobile-table-detail">
        <Col className="detail-text">
          <p>
            <TranslatedMessage type="number" unit="percent" value={product.fundingInterestRate} />
          </p>
          <span className="detail-note">
            <TranslatedMessage id={'app.common.anualInterestRate'} />
          </span>
        </Col>
        <Col>
          <span className="detail-label">
            <TranslatedMessage id={'app.data.fundingPeriod'} />
          </span>&nbsp;&nbsp;
          <span className="note-text">
            <TranslatedMessage type="number" unit="days" value={product.fundingPeriod} />
          </span>
        </Col>
      </Row>
    </div>
  );
}

MobileTableContent.propTypes = {
  product: PropTypes.object,
  onClick: PropTypes.func,
};

export default MobileTableContent;
