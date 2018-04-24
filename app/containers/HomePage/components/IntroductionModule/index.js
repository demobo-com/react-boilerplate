/**
*
* IntroductionModule Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';

import TranslatedMessage from 'components/TranslatedMessage';
import { HOME_INFO } from './constants';
import './style.scss';

function onClick(linkId, messageId, linkTo) {
  if (linkId && messageId !== 'linkAbout') {
    linkTo(linkId);
    return true;
  }
  return false;
}

function renderTextInfo(text, linkTo) {
  return (
    <p className="text" key={text.messageId}>
      {text.messageNote &&
      <a // eslint-disable-line jsx-a11y/interactive-supports-focus
        disabled={!text.noteLinkId}
        onClick={() => onClick(text.noteLinkId, text.messageId, linkTo)}
        role="button"
        className={text.messageNoteColor ? 'text-color-true' : 'text-color-false'}
      >
        <TranslatedMessage id={`app.components.IntroductionModule.${text.messageNote}`} />&nbsp;
        {text.messageNote !== 'lendingcar' && <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>}
      </a>
    }
      <a // eslint-disable-line jsx-a11y/interactive-supports-focus
        href={text.messageId === 'linkAbout' ? text.linkId : null}
        disabled={!text.linkId}
        onClick={() => onClick(text.linkId, text.messageId, linkTo)}
        role="button"
        className={text.color ? 'text-color-true' : 'text-color-false'}
      >
        <TranslatedMessage id={`app.components.IntroductionModule.${text.messageId}`} />
      </a>
    </p>);
}

function IntroductionModule(props) {
  const { linkTo, locale } = props;
  return (
    <div>
      {HOME_INFO.map((infoText, index) => (
        <div className="introduction-module" key={infoText.title}>
          {index % 2 !== 0 ? <div className="module-detail-double">
            <div className="text-module">
              <p className="title">
                <TranslatedMessage id={`app.components.IntroductionModule.${infoText.title}`} />
              </p>
              {infoText.text.map((text) => renderTextInfo(text, linkTo))}
            </div>
            <img src={locale === 'zh' ? infoText.image : infoText.image_en} alt="introductionModule" className="module-image module-image-left" />
          </div> :
          <div className="module-detail-single">
            <img src={locale === 'zh' ? infoText.image : infoText.image_en} alt="introductionModule" className="module-image module-image-right" />
            <div className="text-module">
              <p className="title">
                <TranslatedMessage id={`app.components.IntroductionModule.${infoText.title}`} />
              </p>
              {infoText.text.map((text) => renderTextInfo(text, linkTo))}
            </div>
          </div>
        }
        </div>
      )
    )}
    </div>
  );
}

IntroductionModule.propTypes = {
  linkTo: PropTypes.func,
  locale: PropTypes.string,
};

export default IntroductionModule;
