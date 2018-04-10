/**
*
* TextInput
*
*/
import React from 'react';
import PropTypes from 'prop-types';
import { Select, Form } from 'antd';
// import TranslatedMessage from 'components/TranslatedMessage';
// import classNames from 'classnames';
import '../style.scss';

const FormItem = Form.Item;
const Option = Select.Option;

function AntdSelect(props) { // eslint-disable-line react/prefer-stateless-function
  const { input, hasLabel = true, options, formItemLayout } = props;

  return (
    <FormItem
      // TODO: 翻译
      label={hasLabel ? input.name : ''}
      {...formItemLayout}
    >
      <Select defaultValue={input.value} onChange={input.onChange}>
        {
          options && options.map((option) =>
            <Option value={option.value} key={option.value}>{option.label}</Option>
          )
        }
      </Select>
    </FormItem>
  );
}

AntdSelect.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  hasLabel: PropTypes.bool,
  formItemLayout: PropTypes.object,
  // placeholder: PropTypes.string,
};

export default AntdSelect;
