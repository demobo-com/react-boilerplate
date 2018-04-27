/**
*
* TranslatedMessage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedNumber, FormattedDate, FormattedPlural } from 'react-intl';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';


const plurals = ['one', 'other'];
const formatPlural = (unit, value) => {
  const result = {};
  plurals.forEach((measure) => {
    result[measure] = (<TranslatedMessage
      id={`app.unit.${unit}.${measure}`}
      values={{ value: <TranslatedMessage type="number" value={value} unit="none" /> }}
    />);
  });
  return result;
};

function TranslatedMessage(props) {
  const {
    messages,
    messageId,
    children,
    type,
    withDelimiter = true,
    ...otherProps
  } = props;

  const defaultMessage = startCase((otherProps.id || '').split('.').reverse()[0]);
  if (type === 'number') {
    const value = withDelimiter
      ? <FormattedNumber value={otherProps.value || 0} />
      : otherProps.value;
    const valuesId = `app.values.${otherProps.unit}`;
    if (otherProps.isPlural) {
      const plural = {};
      plural[otherProps.unit] = formatPlural(otherProps.unit, otherProps.value);
      return <FormattedPlural {...plural[otherProps.unit]} value={otherProps.value} />;
    }
    return (<FormattedMessage id={valuesId} values={{ value }} />);
  } else if (type === 'dateTime') {
    return <FormattedDate value={otherProps.value} year="numeric" month="short" day="numeric" />;
  }
  if (otherProps.id || messages[messageId] || type) {
    const translatedComponent = (<FormattedMessage defaultMessage={defaultMessage} {...messages[messageId]} {...otherProps}>
      {children}
    </FormattedMessage>);
    return translatedComponent;
  }
  // if there is no translation then use the messageId startCase just in case
  if (messageId.length > 40) { // Notes: this message is a long sentance
    return <span {...otherProps}>{messageId}</span>;
  }
  return <span {...otherProps}>{startCase(messageId)}</span>;
}

TranslatedMessage.defaultProps = {
  messages: {},
  messageId: '',
  type: '',
};

TranslatedMessage.propTypes = {
  children: PropTypes.node,
  messageId: PropTypes.string,
  messages: PropTypes.object,
  tagName: PropTypes.string,
  type: PropTypes.string,
  withDelimiter: PropTypes.bool,
};

export default TranslatedMessage;

export const formatMessage = (intl, messages, messageId) => {
  const key = camelCase(messageId);
  const currentMessage = messages[key];
  if (currentMessage) { return intl.formatMessage(currentMessage); }
  console.warn('formatMessage is missing:', key);
  return startCase(messageId);
};
