/**
 *
 * ProductPage Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import Loader from 'components/Loader';
// import TranslatedMessage from 'components/TranslatedMessage';
// import messages from './messages';
import ProductDetailTable from './components/ProductDetailTable';
import ProductCarInfo from './components/ProductCarInfo';
// import ProductCurrentInfo from './components/ProductCurrentInfo';
import { FUNDING_KEYS } from './constants';
import { makeSelectProductPage, selectProductRewriteNeed, selectFundingInfo } from './selectors';
import reducer from './reducer';
import sagas from './sagas';
import './style.scss';

const formatProduct = (product) => {
  const clone = Object.assign({}, product);
  clone.expectedAnnualYield = clone.crowdfunding;
  clone.crowdfunding = clone.fundingNeeded;
  return clone;
};

export class ProductPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { product, fundingInfo } = this.props;
    const isLoading = !(product && product.images && product.images.length);
    const formattedProduct = formatProduct(product);
    const formattedFundingInfo = formatProduct(fundingInfo);
    const content = isLoading ? <Loader /> : [
      // <ProductCurrentInfo product={product} key="ProductCurrentInfo" />,
      <ProductDetailTable data={formattedFundingInfo} keys={FUNDING_KEYS} key="ProductDetailTable" />,
      <ProductCarInfo product={formattedProduct} key="ProductCarInfo" />,
    ];
    return (
      <div className="product-page page-container">
        <Helmet
          title="Product"
          meta={[{ name: 'description', content: 'Product details' }]}
        />
        {content}
      </div>
    );
  }
}

ProductPage.propTypes = {
  // dispatch: PropTypes.func.isRequired,
  product: PropTypes.object,
  fundingInfo: PropTypes.object,
};

const mapStateToProps = createPropsSelector({
  productPage: makeSelectProductPage,
  product: selectProductRewriteNeed,
  fundingInfo: selectFundingInfo,
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'productPage', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(ProductPage);
