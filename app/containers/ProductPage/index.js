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
import ProductCarInfo from './components/ProductCarInfo';
import { selectIsLoading, selectProduct } from './selectors';
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
    const { isLoading, product } = this.props;
    const formattedProduct = formatProduct(product);

    const content = isLoading ? <Loader /> : <ProductCarInfo product={formattedProduct} key="ProductCarInfo" />;
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
  isLoading: PropTypes.bool,
  product: PropTypes.object,
};

const mapStateToProps = createPropsSelector({
  isLoading: selectIsLoading,
  product: selectProduct,
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
