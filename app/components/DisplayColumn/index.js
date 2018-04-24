/**
*
* DisplayColumn Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Row } from 'antd';
import classNames from 'classnames';
import TranslatedMessage from 'components/TranslatedMessage';
import './style.scss';

function DisplayColumn(props) {
  const { width, data, hasStripe, keyAlign, valueAlign } = props;
  const [keys, values] = [Object.keys(data), Object.values(data)];
  const displayColumnStyle = {
    width,
  };
  const rowClassName = classNames({
    info: true,
    hasStripe,
  });
  const columnKeyClassName = classNames({
    'column-key': true,
    left: keyAlign === 'left',
    center: keyAlign === 'center',
    right: keyAlign === 'right',
  });
  const columnValueClassName = classNames({
    'column-value': true,
    left: valueAlign === 'left',
    center: valueAlign === 'center',
    right: valueAlign === 'right',
  });
  return (
    <div className={'display-column'} style={displayColumnStyle}>
      {keys.map((key, index) => {
        const keyId = `app.data.${key}`;
        return (
          <Row key={key} className={rowClassName} justify="space-between" type="flex">
            <span className={columnKeyClassName}>
              <TranslatedMessage id={keyId} />
            </span>
            <span className={columnValueClassName}>
              {values[index]}
            </span>
          </Row>
        );
      })}
    </div>
  );
}

DisplayColumn.defaultProps = {
  data: {},
  hasStripe: false,
  width: '100%',
  keyAlign: 'left',
  valueAlign: 'right',
};
DisplayColumn.propTypes = {
  width: PropTypes.string,
  data: PropTypes.object,
  hasStripe: PropTypes.bool,
  keyAlign: PropTypes.string,
  valueAlign: PropTypes.string,
};

export default DisplayColumn;
