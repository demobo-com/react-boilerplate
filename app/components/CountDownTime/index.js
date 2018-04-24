/*
 * react_native_countdowntimer
 * @flow
 */
import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import TranslatedMessage from 'components/TranslatedMessage';

const styles = {
  cardItemTimeRemainTxt: {
    fontSize: 20,
    color: '#ee394b',
  },
  text: {
    fontSize: 30,
    color: '#FFF',
    marginLeft: 7,
  },
  container: {
    flexDirection: 'row',
  },
  // 时间文字
  defaultTime: {
    paddingHorizontal: 3,
    fontSize: 20,
    marginHorizontal: 3,
    borderRadius: 2,
    fontWeight: 500,
    color: '#ff9800',
  },
  // 冒号
  defaultColon: {
    fontSize: 14,
    marginTop: 12,
  },
};

// days={{ plural: '天', singular: '天' }}
// hours="时"
// mins="分"
// secs="秒"

class CountDownTime extends React.Component {

  static propTypes = {
    date: PropTypes.string,
    days: PropTypes.objectOf(PropTypes.any),
    hours: PropTypes.any,
    mins: PropTypes.any,
    // secs: PropTypes.string,
    onEnd: PropTypes.func,
  }

  static defaultProps = {
    date: '',
    days: {
      plural: <TranslatedMessage id="app.unit.days" />,
      singular: <TranslatedMessage id="app.unit.day" />,
    },
    hours: <TranslatedMessage id="app.unit.hours" />,
    mins: <TranslatedMessage id="app.unit.mins" />,
    // secs: <TranslatedMessage id="app.unit.secs" />,
    onEnd: () => {},
  }
  state = {
    days: 0,
    hours: 0,
    min: 0,
    sec: 0,
  }

  componentWillMount() {
    const date = this.getDateData(this.props.date);
    if (date) {
      this.setState(date);
    }
  }

  componentDidMount() {
    // console.log(this.props.date);//"2017-03-29T00:00:00+00:00"
    this.interval = setInterval(() => {
      const date = this.getDateData(this.props.date);
      if (date) {
        this.setState(date);
      } else {
        this.stop();
        this.props.onEnd();
      }
    }, 1000);
  }

  componentWillUnmount() {
    this.stop();
  }

  getDateData(endDate) {
    let diff = (moment(new Date(endDate)).unix() - moment(new Date()).unix());

    if (diff <= 0) {
      return false;
    }

    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: 0,
    };

    if (diff >= (365.25 * 86400)) {
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;
    return timeLeft;
  }

  leadingZeros(num, length = null) {
    let lengthSize = length;
    let numSize = num;
    if (lengthSize === null) {
      lengthSize = 2;
    }
    numSize = String(numSize);
    while (numSize.length < lengthSize) {
      numSize = `0${numSize}`;
    }
    return numSize;
  }

  stop() {
    clearInterval(this.interval);
  }

  render() {
    const countDown = this.state;
    let days;
    if (countDown.days === 1) {
      days = this.props.days.singular;
    } else {
      days = this.props.days.plural;
    }
    return (
      <div style={styles.container}>
        <span style={styles.defaultTime}>{ this.leadingZeros(countDown.days) }</span>
        <span style={styles.defaultColon}>{days}</span>
        <span style={styles.defaultTime}>{ this.leadingZeros(countDown.hours)}</span>
        <span style={styles.defaultColon}>{this.props.hours}</span>
        <span style={styles.defaultTime}>{this.leadingZeros(countDown.min)}</span>
        <span style={styles.defaultColon}>{this.props.mins}</span>
        {/* <span style={styles.defaultTime}>{this.leadingZeros(countDown.sec)}</span>
        <span style={styles.defaultColon}>{this.props.secs}</span> */}
      </div>

    );
  }

}

export default CountDownTime;
