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

class ProductsTable extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  renderMobileTable() {
    const { products } = this.props;
    const columns = [
      {
        title: <TranslatedMessage id={'app.data.productName'} />,
        key: 'renderItem',
        dataIndex: 'renderItem',
      },
    ];
    return (
      <div className="mobile-table-data">
        <Table
          columns={columns}
          dataSource={this.renderMobileDataSource(products)}
          rowClassName="row"
          pagination={{ pageSize: 8 }}
          showHeader={false}
        />
      </div>
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

  renderTable() {
    const { products } = this.props;
    const columnNames = [
      'productName',
      'image',
      'fundingBase',
      'percentage',
      'fundingPeriod',
      'option',
    ];
    const columns = columnNames.map((name) => ({
      title: <TranslatedMessage id={`app.data.${name}`} />,
      key: name,
      dataIndex: name,
    }));
    const dataSource = this.renderDataSource(products);
    return (
      <Table columns={columns} dataSource={dataSource} rowClassName="row" pagination={{ pageSize: 8 }} />
    );
  }

  renderDataSource(products) {
    return products.map((product) => ({
      ...product,
      key: product.id,
      productName: <TranslatedMessage id={`app.data.${product.productName}`} />,
      image: <CarImage url={product.image} width="100" height="75" />,
      fundingBase: <TranslatedMessage type="number" unit="dollar" value={product.fundingBase} />,
      percentage: <TranslatedMessage type="number" unit="percent" value={product.percentage} />,
      fundingPeriod: <TranslatedMessage type="number" unit="days" value={product.fundingPeriod} />,
      option: <Button onClick={() => this.props.onProductClick(product)} label="detail" />,
    }));
  }

  render() {
    return (
      <div className="products-table">
        {
         !isMobile
         ? this.renderTable()
         : this.renderMobileTable()
        }
      </div>
    );
  }
}

ProductsTable.defaultProps = {
  products: [],
};

ProductsTable.propTypes = {
  products: PropTypes.array.isRequired,
  onProductClick: PropTypes.func,
};

export default ProductsTable;
