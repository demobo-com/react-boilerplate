import { createGetSelector } from 'reselect-immutable-helpers';
import { createSelector } from 'reselect';
import Immutable, { fromJS } from 'immutable';
import { neededMoney, percentage } from 'utils/helpers';
import { FUNDING_KEYS_SELECTORS } from './constants';
/**
 * Direct selector to the productPage state domain
 */
export const selectProductPageDomain = (state) => state.get('productPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by ProductPage
 */

export const makeSelectProductPage = () => createSelector(
  selectProductPageDomain,
  (substate) => substate.toJS()
);

export const selectProduct = createGetSelector(selectProductPageDomain, 'product', Immutable.Map());

export const selectFundingInfo = createSelector(
  selectProduct,
  (product) => {
    const productInfo = product.toJS();
    let fundingInfo = {};
    FUNDING_KEYS_SELECTORS.map((key) => {
      fundingInfo[key] = productInfo[key];
      return fundingInfo;
    });
    const fundingNeeded = Math.floor((Number(fundingInfo.price) * 0.7) / Number(fundingInfo.fundingBase)) * Number(fundingInfo.fundingBase);
    fundingInfo = Object.assign({}, {
      productName: fundingInfo.vin,
      expectedAnnualYield: fundingInfo.fundingBase,
      crowdfunding: fundingInfo.fundingInterestRate,
      investmentPeriod: fundingInfo.fundingPeriod,
      paymentMethod: 'bank check',
      min: fundingInfo.fundingBase,
      max: Number(Number(fundingNeeded) - Number(fundingInfo.fundingCollected)),
      fundingNeeded: Number(fundingNeeded),
      investmentRate: fundingInfo.fundingRating,
      investmentBase: fundingInfo.fundingBase,
      remittance: 'bank check',
    });
    return fromJS(fundingInfo);
  }
);

export const selectProductRewriteNeed = createSelector(
  selectProduct,
  (product) => {
    const productInfo = product.toJS();
    const newFundingNeeded = neededMoney(productInfo.price, productInfo.fundingBase);
    productInfo.fundingNeeded = Number(newFundingNeeded);
    productInfo.poolAmount = (Number(newFundingNeeded) - Number(productInfo.fundingCollected));
    productInfo.percentage = percentage(productInfo.price, productInfo.fundingBase, productInfo.fundingCollected);
    return fromJS(productInfo);
  }
);
