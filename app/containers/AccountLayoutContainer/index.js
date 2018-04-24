/**
 *
 * AccountLayoutContainer Container
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import { injectIntl, intlShape } from 'react-intl';
import { compose } from 'redux';
import { Helmet } from 'react-helmet';

import AccountLayout from 'components/AccountLayout';
import { formatMessage } from 'components/TranslatedMessage';
import HeaderMenu from 'components/HeaderMenu';
import { MENUS } from './constants';
import messages from './messages';
import './style.scss';

export class AccountLayoutContainer extends React.Component { // eslint-disable-line react/prefer-stateless-function
  rednerLeftMenu = () => {
    const { path = '' } = this.props.match;
    const getButtonStyle = (url) => path.toLowerCase() === url.toLowerCase() ? { color: '#3f51b5' } : {};
    const linkTo = window.linkTo || (() => null);
    const muneProps = {
      mode: 'vertical',
      width: '100%',
      height: '40px',
      menuItems: MENUS.map(({ label, url, icon }) => ({
        label,
        icon,
        buttonStyle: getButtonStyle(url),
        onClick: () => linkTo(url),
      })),
    };
    return <HeaderMenu {...muneProps} />;
  }


  render() {
    if (window.checkLogin && !checkLogin()) return '';
    const { intl, helmetTitle, helmetContent, header, children } = this.props;

    return (
      <div className="account-layout-container page-container">
        <Helmet
          title={formatMessage(intl, messages, helmetTitle)}
          meta={[
            { name: 'description', content: helmetContent },
          ]}
        />
        <AccountLayout
          header={header}
          leftChildren={this.rednerLeftMenu()}
          rightChildren={children}
        />
      </div>
    );
  }
}

AccountLayoutContainer.propTypes = {
  intl: intlShape.isRequired,
  match: PropTypes.object,
  helmetTitle: PropTypes.string,
  helmetContent: PropTypes.string,
  header: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
  ]),
};

export default withRouter(compose(
  injectIntl,
)(AccountLayoutContainer));
