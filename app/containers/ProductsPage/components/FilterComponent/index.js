import React from 'react';
import PropTypes from 'prop-types';
import Button from 'components/Button';
// import { Checkbox } from 'antd';

import TranslatedMessage from 'components/TranslatedMessage';
import messages from './messages';
import './style.scss';


const FilterComponent = ({
  name,
  options = [],
  filter = {},
  changeFilter,
  changeSorting,
  sortingType,
}) => {
  filter[name] = filter[name] || []; // eslint-disable-line no-param-reassign
  const select = (isFiltered, id) => {
    if (changeSorting) return changeSorting(id);
    if (isFiltered) {
      filter[name] = filter[name].filter((item) => item !== id); // eslint-disable-line no-param-reassign
    } else {
      filter[name].push(id);
    }
    return changeFilter(filter);
  };
  const showAll = () => {
    if (changeSorting) return changeSorting();
    filter[name] = []; // eslint-disable-line no-param-reassign
    return changeFilter(filter);
  };
  // const count = (obj) => obj.count ? ` (${obj.count})` : undefined;
  const sortedOptions = options.sort((a, b) => a.name > b.name).filter((d) => d.name !== 'other');
  const allButtonId = changeSorting ? 'default' : 'all';
  const allButton = (
    <Button
      onClick={showAll}
      type="warning"
      size="small"
      className="all-button"
    >
      {<TranslatedMessage messages={messages} messageId={allButtonId} />}
    </Button>
  );
  return (
    <div className="filter-component">
      {allButton}
      {sortedOptions.map((obj) => {
        const isFiltered = filter[name].indexOf(obj.id) !== -1;
        const onClick = select.bind(this, isFiltered, obj.id);
        const message = (name === 'availability' || name === 'fundingSorting') ?
          <TranslatedMessage messages={messages} messageId={obj.id} /> :
          <TranslatedMessage messages={messages} messageId={`${name}Value`} values={{ value: obj.id }} />;
        const className = isFiltered || (sortingType === obj.id) ? 'selected filter-button' : 'filter-button';
        return (
          <Button
            onClick={onClick}
            key={obj.name}
            className={className}
            size="small"
          >
            {message}
            {/* {count(obj)} */}
          </Button>
        );
      }
      )}
    </div>
  );
};

FilterComponent.propTypes = {
  name: PropTypes.string,
  options: PropTypes.array,
  filter: PropTypes.object,
  sortingType: PropTypes.any,
  changeFilter: PropTypes.func,
  changeSorting: PropTypes.func,
};

export default FilterComponent;
