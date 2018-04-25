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
import { isMobile } from 'react-device-detect';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';

// import TranslatedMessage from 'components/TranslatedMessage';
import Loader from 'components/Loader';
import { loadProductAction } from 'containers/ProductPage/actions';

import GridFilter from './components/GridFilter';
import GridFilterMobile from './components/GridFilterMobile';
import ProductsTable from './components/ProductsTable';
// import messages from './messages';
import {
  makeSelectProductsPage,
  // selectAllProducts,
  // makeSelectFilterOptions,
  selectIsLoading,
  selectProductFilter,
  selectFilterProducts,
  // selectTranslatedFilterProducts,
  selectSortingProducts,
  selectproductsSorting,
} from './selectors';
import reducer from './reducer';
import { changeFilterAction, changeFilterProducts } from './actions';
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
    // console.log('ProductsPage props', this.props);
    const { isLoading, sortingProducts, sortingType } = this.props;
    const filter = isMobile ? <GridFilterMobile {...this.props} /> : <GridFilter {...this.props} />;
    let container;
    if (isLoading) container = <Loader />;
    else {
      container = (
        <div className="products-page-content">
          {filter}
          <ProductsTable {...this.props} products={this.getProductsInfo()} sortingProducts={sortingProducts} sortingType={sortingType} onProductClick={this.onProductClick} />
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
  // dispatch: PropTypes.func.isRequired,
  linkTo: PropTypes.func,
  loadProduct: PropTypes.func,
  products: PropTypes.object,
  sortingProducts: PropTypes.any,
  isLoading: PropTypes.bool,
  sortingType: PropTypes.any,
  // changeSorting: PropTypes.func,
  // changeFilter: PropTypes.func,
};

const mapStateToProps = createPropsSelector({
  productsPage: makeSelectProductsPage,
  sortingType: selectproductsSorting,
  products: selectFilterProducts,
  // translatedProducts: selectTranslatedFilterProducts,
  sortingProducts: selectSortingProducts,
  productFilter: selectProductFilter,
  isLoading: selectIsLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    changeSorting: (sortingName) => dispatch(changeFilterProducts(sortingName)),
    changeFilter: (filter) => dispatch(changeFilterAction(filter)),
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
