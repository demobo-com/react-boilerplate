/**
*
* Alert Stateless Component
*
*/
import PropTypes from 'prop-types';
import { notification } from 'antd';
import startCase from 'lodash/startCase';

import './style.scss';
import messages from './messages';

notification.config({
  top: '50%',
  duration: 3,
});
function Alert(props) {
  const key = new Date().getTime();
  const message = Alert.translate(props.message);
  const type = props.type || 'error';
  const title = Alert.translate(props.title) || Alert.translate({ label: type });

  notification[type]({
    key,
    message: title,
    description: message,
  });
  return key;
}
Alert.translate = (from) => {
  if (typeof from === 'undefined') return '';

  if (from instanceof Object) {
    if (from.id || from.label) {
      const translateId = from.id || `app.alert.${from.label}`;
      return intl.formatMessage({
        id: translateId,
        defaultMessage: startCase(translateId),
      });
    }

    if (from.messageId) return intl.formatMessage(messages[from.messageId]);
  }
  return from.toString();
};

Alert.close = (key) => {
  notification.close(key);
};

Alert.propTypes = {
  title: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  message: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]),
  type: PropTypes.oneOf([
    'success',
    'error',
    'info',
    'warning',
  ]),
};

export default Alert;
