/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Avatar as AntAvatar } from 'antd';
// import classNames from 'classnames';

// import TranslatedMessage from 'components/TranslatedMessage';
import '../style.scss';

const FormItem = Form.Item;

function Avatar(props) { // eslint-disable-line react/prefer-stateless-function
  // const { isRequired, input, type, hasLabel = true, messages, placeholder, className, meta: { dirty, touched, error }, isFieldArray = false, hasLabelOverflow = true } = props;
  const { input, hasLabel = true, size, icon, shape, url, userName, style } = props;
  const antAvatarProps = { size, icon, shape, style, url };

  return (
    <FormItem
      label={hasLabel ? input.name : ''}
    >
      <AntAvatar
        {...antAvatarProps}
      >
        { userName }
      </AntAvatar>
    </FormItem>
  );
}

Avatar.propTypes = {
  // isRequired: PropTypes.bool,
  input: PropTypes.object,
  // type: PropTypes.string,
  hasLabel: PropTypes.bool,
  // messages: PropTypes.object,
  // className: PropTypes.string,
  // meta: PropTypes.object,
  // hasLabelOverflow: PropTypes.bool,
  // isFieldArray: PropTypes.bool,
  size: PropTypes.string,
  icon: PropTypes.string,
  shape: PropTypes.string,
  url: PropTypes.string,
  userName: PropTypes.string,
  style: PropTypes.object,
};

export default Avatar;
