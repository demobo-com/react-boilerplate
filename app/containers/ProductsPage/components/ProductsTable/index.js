/**
*
* ProductsTable Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import { Table } from 'antd';
import { isMobile } from 'react-device-detect';
import TranslatedMessage from 'components/TranslatedMessage';
import CarImage from 'components/CarImage';
import Button from 'components/Button';
import MobileTableContent from '../MobileTableContent';
import './style.scss';

const columnNames = [
  'interestRate',
  'rating',
  'image',
  'productName',
  'base',
  'percentage',
  'period',
  'option',
];

class ProductsTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderFilter(name) {
    const filters = ['interestRate', 'rating'];
    if (filters.includes(name)) {
      const filterName = `${name}Number`;
      if (name === 'rating') {
        return (a, b) => {
          const countA = a[filterName].length > 1 ? Number(a[filterName].charCodeAt() - 0.5) : Number(a[filterName].charCodeAt());
          const countB = b[filterName].length > 1 ? Number(b[filterName].charCodeAt() - 0.5) : Number(b[filterName].charCodeAt());
          return countB - countA;
        };
      }
      return (a, b) => a[filterName] - b[filterName];
    }
    return false;
  }

  renderProductName(product) {
    const {
      make = '',
      model = '',
    } = product;
    return (<div className="product-name">
      <TranslatedMessage id={`app.make.${make}`} />&nbsp;&nbsp;
      {model}
    </div>);
  }

  renderImage(product) {
    return <CarImage url={product.image} width="100" height="75" />;
  }

  renderMobileTable(sortingProducts) {
    const columns = [
      {
        title: <TranslatedMessage id={'app.data.renderItem'} />,
        key: 'renderItem',
        dataIndex: 'renderItem',
        // sorter: this.props.changeSorting(renderItem),
      },
    ];
    return (
      <div className="mobile-table-data">
        <Table
          columns={columns}
          dataSource={this.renderMobileDataSource(sortingProducts)}
          rowClassName="row"
          pagination={{ pageSize: 8 }}
          showHeader={false}
        />
      </div>
    );
  }

  renderValue(value, messageId, hasLabel = false) {
    const className = hasLabel ? 'multiple-line-color' : 'multiple-line';
    return (
      <p className={className}>
        {hasLabel ?
          <TranslatedMessage id="app.values.percent" values={{ value }} />
        : value
      }
        <br />
        <span className="note-text">
          <TranslatedMessage id={`app.common.${messageId}`} />
        </span>
      </p>
    );
  }

  renderMobileDataSource(products) {
    return products.map((product) => ({
      ...product,
      interestRate: product.interestRate,
      rating: product.rating,
      renderItem: <MobileTableContent product={product} onClick={this.props.onProductClick} />,
    }));
  }

  renderDataSource(products) {
    return products.map((product) => ({
      ...product,
      productName: this.renderProductName(product),
      key: product.id,
      interestRate: this.renderValue(product.interestRate, 'anualInterestRate', true),
      rating: this.renderValue(product.rating, 'overallRating'),
      interestRateNumber: product.interestRate,
      ratingNumber: product.rating,
      percentage: <TranslatedMessage type="number" unit="percent" value={product.percentage} />,
      base: <TranslatedMessage type="number" unit="dollar" value={product.base} />,
      period: <TranslatedMessage type="number" unit="days" value={product.period} />,
      image: this.renderImage(product),
      option: <Button onClick={() => this.props.onProductClick(product)} label="detail" />,
    }));
  }

  render() {
    const {
      products = [],
      sortingProducts = [],
    } = this.props;
    const columns = columnNames.map((name) => ({
      title: <TranslatedMessage id={`app.data.${name}`} />,
      key: name,
      dataIndex: name,
      sorter: this.renderFilter(name),
    }));
    const dataSource = this.renderDataSource(products);
    return (
      <div className="products-table">
        {!isMobile ? <Table columns={columns} dataSource={dataSource} rowClassName="row" pagination={{ pageSize: 8 }} />
        : this.renderMobileTable(sortingProducts)
      }
      </div>
    );
  }
}

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  sortingProducts: PropTypes.any,
  onProductClick: PropTypes.func,
};

export default ProductsTable;
