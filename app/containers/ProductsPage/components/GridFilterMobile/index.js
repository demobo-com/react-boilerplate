/**
*
* GridFilter Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Menu, Dropdown, Icon, Col, Row } from 'antd';

import Button from 'components/Button';
import TranslatedMessage from 'components/TranslatedMessage';
import FilterComponent from '../FilterComponent';
import messages from './messages';
import './style.scss';

const optionsSorting = [{ id: 'interestAscending', name: 'interestAscending' }, { id: 'interestDescending', name: 'interestDescending' }, { id: 'ratingAscending', name: 'ratingAscending' }, { id: 'ratingDescending', name: 'ratingDescending' }];

class GridFilter extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  state = {
    shouldShowMask: false,
  }

  setShouldShowMask = (visible) => {
    if (visible) {
      if (this.timeout) clearTimeout(this.timeout);
      this.setState({
        shouldShowMask: true,
      });
    } else {
      this.timeout = setTimeout(() => {
        this.setState({
          shouldShowMask: false,
        });
      }, 180);
    }
  }

  render() {
    const {
      changeSorting,
      changeFilter,
      optionsAvailability,
      optionsbase,
      optionsperiod,
      productFilter,
      sortingType,
    } = this.props;
    const menus = [
      <Menu className="grid-filter-menu">
        <FilterComponent
          name="fundingSorting"
          options={optionsSorting}
          changeSorting={changeSorting}
          sortingType={sortingType}
        />
      </Menu>,
      <Menu className="grid-filter-menu">
        <FilterComponent
          name="period"
          options={optionsperiod}
          filter={productFilter}
          changeFilter={changeFilter}
        />
      </Menu>,
      <Menu className="grid-filter-menu">
        <FilterComponent
          name="availability"
          options={optionsAvailability}
          filter={productFilter}
          changeFilter={changeFilter}
        />
      </Menu>,
      <Menu className="grid-filter-menu">
        <FilterComponent
          name="base"
          options={optionsbase}
          filter={productFilter}
          changeFilter={changeFilter}
        />
      </Menu>,
    ];
    return (
      <Row className="grid-filter-mobile">
        {['fundingSorting', 'period', 'availability', 'base'].map((id, index) => (
          <Col span={6} key={id}>
            <Dropdown
              overlay={menus[index]}
              trigger={['click']}
              onVisibleChange={this.setShouldShowMask}
              className="grid-filter-dropdown"
              placement="bottomLeft"
            >
              <Button className="ant-dropdown-link">
                <TranslatedMessage messages={messages} messageId={id} tagName="span" />
                <Icon type="down" />
              </Button>
            </Dropdown>
          </Col>
        ))}
        {this.state.shouldShowMask && <div className="mask"></div>}
      </Row>
    );
  }
}
GridFilter.propTypes = {
  productFilter: PropTypes.object,
  changeSorting: PropTypes.func,
  changeFilter: PropTypes.func,
  sortingType: PropTypes.any,
  optionsAvailability: PropTypes.array,
  optionsbase: PropTypes.array,
  optionsperiod: PropTypes.array,
};

export default GridFilter;
