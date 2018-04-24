// import React from 'react';
import { createGetSelector } from 'reselect-immutable-helpers';
import { createSelector } from 'reselect';
// import TranslatedMessage from 'components/TranslatedMessage';
import Immutable, { fromJS } from 'immutable';
import {
  // mapValues,
  camelCase,
  orderBy,
} from 'lodash';
import { neededMoney, percentage } from 'utils/helpers';
/**
 * Direct selector to the productsPage state domain
 */
export const selectProductsPageDomain = (state) => state.get('productsPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductsPage
 */

export const makeSelectProductsPage = () => createSelector(
  selectProductsPageDomain,
  (substate) => substate.toJS()
);

export const selectEveryProducts = createGetSelector(selectProductsPageDomain, 'products', Immutable.Map());

export const selectProductFilter = createGetSelector(selectProductsPageDomain, 'productFilter', Immutable.Map());

export const selectproductsSorting = createGetSelector(selectProductsPageDomain, 'productsSorting', Immutable.Map());

export const selectIsLoading = createGetSelector(selectProductsPageDomain, 'isLoading');

export const selectAllProducts = createSelector(
  selectEveryProducts,
  (products) => {
    const isShow = (product) => product.get('availability') !== 'deleted' && product.get('availability') !== 'sold';
    const newProducts = {};
    const productsInfo = products.toJS();
    const keys = Object.keys(productsInfo);
    keys.map((key) => {
      const fundingNeeded = neededMoney(productsInfo[key].price, productsInfo[key].fundingBase);
      newProducts[key] = Object.assign({}, productsInfo[key], {
        percentage: percentage(productsInfo[key].price, productsInfo[key].fundingBase, productsInfo[key].fundingCollected),
        fundingNeeded,
      });
      return newProducts;
    });
    return fromJS(newProducts)
      .filter(isShow);
  }
);

function createFilterOptionsFor(optionKey, inventory) {
  const inventoryObject = inventory.toJS();
  const hash = {};
  const constructHash = (car) => {
    // I changed the value of the id to ensure the normal use of the function(filter color id is '').
    const carOption = car[optionKey] ? car[optionKey].toString().toLowerCase().replace(/\s/g, '') : 'other';
    const carName = car[optionKey] || 'other';
    hash[carOption] = hash[carOption] || {
      id: carOption,
      name: carName,
      count: 0,
    };
    hash[carOption].count += 1;
  };
  Object.values(inventoryObject).forEach(constructHash);
  const ordered = Object.values(hash);
  return fromJS(ordered);
}

export const selectFilterColors = createSelector(
  selectAllProducts,
  createFilterOptionsFor.bind(this, 'color')
);

export const selectFilterProducts = createSelector(
  selectAllProducts,
  selectProductFilter,
  (products, productFilter) => {
    const filter = productFilter.toJS();
    const keys = Object.keys(filter) || [];
    const filterProduct = (product, key) => {
      const productKeyValue = camelCase(product.get(key)) || 'other';
      const filterSelectedArray = filter[key];
      const show = filterSelectedArray.length ? filterSelectedArray.includes(productKeyValue) : true;
      return show;
    };
    const isShow = (product) => keys.map((key) => filterProduct(product, key)).every((d) => d);
    return products
      .filter(isShow);
  }
);

// const translations = {
//   expectedAnnualYield: { type: 'number', unit: 'percent' },
//   crowdfunding: { type: 'number', unit: 'dollar' },
//   fundingPeriod: { type: 'number', unit: 'days' },
//   min: { type: 'number', unit: 'dollar' },
//   max: { type: 'number', unit: 'dollar' },
//   investmentBase: { type: 'number', unit: 'dollar' },
//   paymentMethod: { id: 'app.value.paymentMethod' },
//   remittance: { id: 'app.value.remittance' },
// };
// function translatedValues(value, key) {
//   const translationProps = translations[key];
//   if (translationProps) return <TranslatedMessage {...translationProps} value={value} />;
//   return value;
// }
// export const selectTranslatedFilterProducts = createSelector(
//   selectFilterProducts,
//   (products) => products.map((product) => fromJS(mapValues(product.toJS(), translatedValues)))
// );

export const selectSortingProducts = createSelector(
  selectFilterProducts,
  selectproductsSorting,
  (products, orderType) => handleOrders(products, orderType)
);

export const makeSelectFilterOptions = (filterKey) => createSelector(
  selectAllProducts,
  createFilterOptionsFor.bind(this, filterKey)
);

function handleOrders(products, orderType) {
  const productsInfo = Object.values(products.toJS());
  const productsInfoWithKey = [];
  productsInfo.map((product) => {
    productsInfoWithKey.push(Object.assign({}, product, {
      key: product.id,
    }));
    return productsInfoWithKey;
  });
  const orderTypeInfo = typeof orderType === 'object' ? orderType.toJS() : orderType;
  let productsData = [];
  switch (orderTypeInfo) {
    case 'interestAscending':
      productsData = orderBy(productsInfoWithKey, ['fundingInterestRate'], ['asc']);
      break;
    case 'interestDescending':
      productsData = orderBy(productsInfoWithKey, ['fundingInterestRate'], ['desc']);
      break;
    case 'ratingAscending':
      productsData = orderBy(productsInfoWithKey, ['fundingRating'], ['asc']);
      break;
    case 'ratingDescending':
      productsData = orderBy(productsInfoWithKey, ['fundingRating'], ['desc']);
      break;
    default:
      productsData = productsInfoWithKey;
      break;
  }
  return fromJS(productsData);
}
