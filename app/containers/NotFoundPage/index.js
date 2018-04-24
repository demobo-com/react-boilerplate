/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';

import TranslatedMessage from 'components/TranslatedMessage';
import './style.scss';

export default class NotFound extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    return (
      <div className="not-found-background" >
        <div>
          <h1 className="nf-status">404</h1>
        </div>
        <p className="nf-tips">
          <TranslatedMessage id="app.containers.NotFoundPage.tips" />
        </p>
      </div>
    );
  }
}
