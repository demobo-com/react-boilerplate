/**
*
* Avatar
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Form, Avatar as AntAvatar } from 'antd';

// import TranslatedMessage from 'components/TranslatedMessage';
import '../style.scss';

const FormItem = Form.Item;

function Avatar(props) { // eslint-disable-line react/prefer-stateless-function
  const { input, hasLabel = true, formItemLayout, size, icon, shape, url, userName, style } = props;
  const antAvatarProps = { size, icon, shape, style, url };

  return (
    <FormItem
      // TODO: 翻译
      label={hasLabel ? input.name : ''}
      {...formItemLayout}
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
  formItemLayout: PropTypes.object,
  size: PropTypes.string,
  icon: PropTypes.string,
  shape: PropTypes.string,
  url: PropTypes.string,
  userName: PropTypes.string,
  style: PropTypes.object,
};

export default Avatar;
