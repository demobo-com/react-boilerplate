/**
*
* AccountLayout Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

function AccountLayout(props) {
  const { header, leftChildren, rightChildren } = props;
  const renderHeader = () => {
    if (!header) return '';
    return (
      <div className="account-layout-header">
        { header }
      </div>
    );
  };

  return (
    <div className="account-layout">
      { renderHeader() }
      <div className="account-layout-main">
        <div className="account-layout-left">
          { leftChildren }
        </div>
        <div className="account-layout-right">
          { rightChildren }
        </div>
      </div>
    </div>
  );
}

AccountLayout.defaultProps = {
  header: '',
  leftChildren: '',
  rightChildren: '',
};

AccountLayout.propTypes = {
  header: PropTypes.any,
  leftChildren: PropTypes.any,
  rightChildren: PropTypes.any,
};

export default AccountLayout;
