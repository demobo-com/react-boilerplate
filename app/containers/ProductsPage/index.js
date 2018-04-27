/**
 *
 * ProductsPage Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { push } from 'react-router-redux';
import { createPropsSelector } from 'reselect-immutable-helpers';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';


import Loader from 'components/Loader';
import { loadProductAction } from 'containers/ProductPage/actions';
import ProductsTable from './components/ProductsTable';
import {
  selectIsLoading,
  selectAllProducts,
} from './selectors';
import reducer from './reducer';
import sagas from './sagas';
import './style.scss';

export class ProductsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  onProductClick = (product) => {
    this.props.loadProduct(product.id);
    this.props.linkTo(`/product/${product.id}`);
  }

  getProductsInfo = () => {
    const newProducts = Object.values(this.props.products);
    const productsInfo = newProducts.map((newProduct) =>
      Object.assign({}, newProduct, {
        image: newProduct.images ? newProduct.images[0] : null,
        key: newProduct.id,
      }));
    return productsInfo;
  }

  render() {
    const { isLoading } = this.props;
    let container;
    if (isLoading) container = <Loader />;
    else {
      container = (
        <div className="products-page-content">
          <ProductsTable
            {...this.props}
            products={this.getProductsInfo()}
            onProductClick={this.onProductClick}
          />
        </div>
      );
    }

    return (
      <div className="products-page">
        <Helmet
          title="Products"
          meta={[{ name: 'description', content: 'Crowd Fund Products' }]}
        />
        {container}
      </div>
    );
  }
}

ProductsPage.propTypes = {
  linkTo: PropTypes.func,
  isLoading: PropTypes.bool,
  products: PropTypes.array,
  loadProduct: PropTypes.func,
};

const mapStateToProps = createPropsSelector({
  isLoading: selectIsLoading,
  products: selectAllProducts,
});

function mapDispatchToProps(dispatch) {
  return {
    linkTo: (link) => dispatch(push(link)),
    loadProduct: (productId) => dispatch(loadProductAction(productId)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps, null, { pure: false });

const withReducer = injectReducer({ key: 'productsPage', reducer });

const withSagas = sagas.map((saga) => injectSaga(saga));

export default compose(
  withReducer,
  ...withSagas,
  withConnect,
)(ProductsPage);
