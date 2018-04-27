import React from 'react';
import PropTypes from 'prop-types';
import { Input, Slider, Row, Icon, Modal } from 'antd';
import moment from 'moment';
import TranslatedMessage from 'components/TranslatedMessage';
import Button from 'components/Button';
import CountDownTime from 'components/CountDownTime';
// import messages from './messages';
import './style.scss';


export class InvestmentForm extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.state = {
      number: '1',
    };
  }

  onChange = (value, allstrands) => {
    if (value.target) {
      this.setNumber(value.target.value, allstrands);
    } else {
      this.setNumber(value, allstrands);
    }
  }

  setNumber = (value, allstrands) => {
    // const { product } = this.props;
    // const productNeedPrice = (Number(product.price) * 0.7);
    // const allstrands = Math.floor(Number(productNeedPrice / product.base));
    // if (value > allstrands) {
    //   this.setState({ number: allstrands });
    // } else {
    if (!Number(value) || Number(value) === 0) {
      this.setState({ number: 1 });
    } else {
      this.setState({ number: value > allstrands ? allstrands : value });
    }
    // }
  }

  setMarks = (allstrands) => {
    const marks = {};
    if (allstrands) {
      marks[1] = 1;
      marks[`${allstrands}`] = Number(allstrands);
    }
    return marks;
  }

  renderModal = () => {
    Modal.info({
      // title: 'This is a notification message',
      content: (
        <div>
          <p>You do not hava a bank account linked to this account.Please contact us for support our Email
          </p>
          <p className="modal-text-mail">oc@overseascredits</p>
        </div>
      ),
      onOk() {},
    });
  }

  render() {
    const { product } = this.props;
    const productNeedPrice = Math.floor(Number(product.fundingNeeded) - Number(product.fundingCollected));
    const allstrands = Math.floor(Number(productNeedPrice / product.base));
    const expectedAmount = Number(this.state.number * product.base);
    const expectedReturnAmount = (Number(Number(expectedAmount * Number(Number(product.interestRate) / 12)) / 100) * Number(Number(product.period) / 30)).toFixed(2);
    const diff = (moment(new Date(product.fundingEndDate)).unix() - moment(new Date()).unix());
    return (
      <div>
        <Row type="flex" justify="space-between" className="from-inline">
          <div className="info-div">
            <TranslatedMessage id="app.common.base" />:  &nbsp;
            <TranslatedMessage value={product.base} type="number" unit="dollar" />
            <div className="inline">
              <TranslatedMessage id="app.common.hopeInvest" />
              <Input
                value={this.state.number}
                onChange={(value) => this.onChange(value, allstrands)}
              />
              <TranslatedMessage id="app.common.stockShare" />
            </div>
            <Slider
              onChange={(value) => this.onChange(value, allstrands)}
              value={Number(this.state.number)}
              min={1}
              max={allstrands}
              marks={this.setMarks(allstrands)}
            />
          </div>

          <div className="info-div">
            <p className="text-common">
              <TranslatedMessage id="app.common.expectedInvestment" />:  &nbsp;
              <span className="text-color">
                <TranslatedMessage value={expectedAmount} type="number" unit="dollar" />
              </span>
            </p>
            <p className="text-common">
              <TranslatedMessage id="app.common.expectedReturn" />:  +&nbsp;
              <span className="text-color text-margin">
                <TranslatedMessage value={expectedReturnAmount} type="number" unit="dollar" />
              </span>
            </p>
          </div>

          <div className="info-div">
            <div className="time-inline">
              <span className="text-label">
                <Icon type="clock-circle-o" />&nbsp;&nbsp;
                <TranslatedMessage id="app.common.timeLeft" />
              </span>&nbsp;&nbsp;
              <CountDownTime date={product.fundingEndDate} />
            </div>
            <div className="time-inline">
              <span className="text-label">
                <Icon type="car" />&nbsp;&nbsp;
                <TranslatedMessage id="app.common.remaining" />
              </span>
              &nbsp;&nbsp;
              <TranslatedMessage value={product.price} type="number" unit="dollar" />
            </div>
          </div>
        </Row>
        <div className="total-info">
          <p className="text-prompt">
            <TranslatedMessage id="app.common.finalReturn" />:&nbsp;&nbsp;
            <TranslatedMessage value={expectedReturnAmount} type="number" unit="dollar" />
          </p>
          <p className="text-prompt">
            <TranslatedMessage id="app.common.expectedPayment" />:&nbsp;&nbsp;
            <TranslatedMessage value={expectedAmount} type="number" unit="dollar" />
          </p>
          <p className="text-pay-money">
            <TranslatedMessage id="app.common.finalPayment" />:&nbsp;&nbsp;
            <TranslatedMessage value={expectedAmount} type="number" unit="dollar" />
          </p>
          <Button
            disabled={diff <= 0 || Number(product.percentage) === 100}
            label="purchase"
            size="large"
            width="320px"
            type="primary"
            onClick={
              // alert('info', 'You do not hava a bank account linked to this account.Please contact us for support our Email oc@overseascredits', 'info')
              this.renderModal
            }
          />
        </div>
      </div>
    );
  }
}

InvestmentForm.propTypes = {
  product: PropTypes.object,
};

export default InvestmentForm;
