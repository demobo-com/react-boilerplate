/**
*
* TranslatedMessage
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import startCase from 'lodash/startCase';
import camelCase from 'lodash/camelCase';
import { FormattedMessage } from 'react-intl';

function TranslatedMessage(props) {
  const { messages, messageId = '', tagName, children } = props;
  if (messages[messageId]) {
    return (
      <FormattedMessage {...messages[messageId]} tagName={tagName} >
        {children}
      </FormattedMessage>
    );
  }
  if (messageId.length > 40) { // Notes: this message is a long sentance
    return <span>{messageId}</span>;
  }
  return <span>{startCase(messageId)}</span>;
}

TranslatedMessage.propTypes = {
  children: PropTypes.node,
  messageId: PropTypes.string,
  messages: PropTypes.object,
  tagName: PropTypes.string,
};

export const formatMessage = (intl, messages, message) => {
  const key = camelCase(message);
  const messagesKey = messages[key];
  if (messagesKey) return intl.formatMessage(messagesKey);
  console.warn('formatMessage is missing:', key);
  return message;
};

export default TranslatedMessage;
