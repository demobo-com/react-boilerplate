/**
*
* ProductCurrentInfo Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';

// import TranslatedMessage from 'components/TranslatedMessage';
import CurrentInfo from './CurrentInfo';
import InvestmentForm from './InvestmentForm';
// import messages from './messages';
import './style.scss';

function ProductCurrentInfo(props) {
  const { product } = props;
  return (
    <div className="product-current-info">
      <CurrentInfo product={product} />
      <InvestmentForm product={product} />
    </div>
  );
}

ProductCurrentInfo.propTypes = {
  product: PropTypes.object,
};

export default ProductCurrentInfo;
