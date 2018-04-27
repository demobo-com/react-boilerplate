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

class CountDownTime extends React.Component {
  constructor(props) {
    super(props);

    this.timerDuration = this.getTimerDuration();
    this.state = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    const date = this.getDateData(this.props.date);
    if (date) {
      this.setState(date);
    }
  }

  componentDidMount() {
    this.timerTask();
    this.timer = setInterval(() => this.timerTask(), this.timerDuration);
  }

  componentWillUnmount() {
    this.stopTimer();
  }

  getTimerDuration = () => {
    switch (this.props.timerUnit) {
      case 'seconds':
        this.timerUnit = 'seconds';
        return 1000;
      default:
        this.timerUnit = 'minutes';
        return 1000 * 60;
    }
  }

  getDateData(endDate) {
    let diff = moment(endDate).unix() - moment().unix();
    if (diff <= 0) return false;

    const date = {
      years: 0,
      months: 0,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (diff >= (365.25 * 86400)) {
      date.years = Math.floor(diff / (365.25 * 86400));
      diff -= date.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      date.days = Math.floor(diff / 86400);
      diff -= date.days * 86400;
    }
    if (diff >= 3600) {
      date.hours = Math.floor(diff / 3600);
      diff -= date.hours * 3600;
    }
    if (diff >= 60) {
      date.minutes = Math.floor(diff / 60);
      diff -= date.minutes * 60;
    }
    date.seconds = diff;
    return date;
  }

  timerTask = () => {
    const date = this.getDateData(this.props.date);
    if (date) {
      this.setState(date);
    } else {
      this.stopTimer();
      this.props.onEnd();
    }
  };

  stopTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  leadingZeros(num, length = 2) {
    const numString = num.toString();
    const currentLength = numString.length;
    if (currentLength >= length) return numString;

    const zeroLength = length - currentLength;
    const leadingZeros = new Array(zeroLength + 1).join('0');
    return leadingZeros + numString;
  }

  render() {
    const countDown = this.state;
    const { timerUnit, days, hours, minutes, seconds } = this.props;
    const { singular, plural } = days;
    const currentDays = countDown.days === 1 ? singular : plural;

    return (
      <div style={styles.container}>
        <span style={styles.defaultTime}>{ this.leadingZeros(countDown.days) }</span>
        <span style={styles.defaultColon}>{currentDays}</span>

        <span style={styles.defaultTime}>{ this.leadingZeros(countDown.hours)}</span>
        <span style={styles.defaultColon}>{hours}</span>

        <span style={styles.defaultTime}>{this.leadingZeros(countDown.minutes)}</span>
        <span style={styles.defaultColon}>{minutes}</span>

        { timerUnit === 'seconds' && <span style={styles.defaultTime}>{this.leadingZeros(countDown.seconds)}</span> }
        { timerUnit === 'seconds' && <span style={styles.defaultColon}>{seconds}</span> }
      </div>
    );
  }

}


// days={{ plural: '天', singular: '天' }}
// hours="时"
// minutes="分"
// seconds="秒"
CountDownTime.defaultProps = {
  days: {
    plural: <TranslatedMessage id="app.unit.days" />,
    singular: <TranslatedMessage id="app.unit.day" />,
  },
  hours: <TranslatedMessage id="app.unit.hours" />,
  minutes: <TranslatedMessage id="app.unit.mins" />,
  seconds: <TranslatedMessage id="app.unit.secs" />,
  timerUnit: 'minutes',
  date: '',
  onEnd: () => null,
};

CountDownTime.propTypes = {
  days: PropTypes.objectOf(PropTypes.any),
  hours: PropTypes.any,
  minutes: PropTypes.any,
  seconds: PropTypes.any,
  timerUnit: PropTypes.oneOf([
    'minutes',
    'seconds',
  ]),
  date: PropTypes.string,
  onEnd: PropTypes.func,
};

export default CountDownTime;
