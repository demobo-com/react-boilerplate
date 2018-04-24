/**
*
* Carousel Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import CarImage from 'components/CarImage';
import './style.scss';

class Carousel extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  // constructor(props) {
  //   super(props);
  // }

  state = {
    startIndex: 0,
    endIndex: this.props.imagesShown,
  }

  // onClick = () => {
  //
  // }

  showingImages() {
    const showingImageUrls = [];
    const { startIndex, endIndex } = this.state;
    for (let i = startIndex; i < endIndex; i += 1) {
      const index = this.indexInRange(i);
      const image = this.props.imageUrls[index];
      showingImageUrls.push(image);
    }
    return showingImageUrls;
  }

  handleClickLeft = () => {
    this.setState((previousState) => {
      const { startIndex, endIndex } = previousState;
      return {
        startIndex: startIndex - 1,
        endIndex: endIndex - 1,
      };
    });
  }

  handleClickRight = () => {
    this.setState((previousState) => {
      const { startIndex, endIndex } = previousState;
      return {
        startIndex: startIndex + 1,
        endIndex: endIndex + 1,
      };
    });
  }

  indexInRange(index) {
    const { imageUrls } = this.props;
    const length = imageUrls.length;
    const inRange = index >= 0 && index < length;
    if (inRange) {
      return index;
    }
    const result = ((index % length) + length) % length;
    return result;
  }

  render() {
    if (!this.props.imageUrls || !this.props.imageUrls.length) return null;
    const { startIndex, endIndex } = this.state;
    return (
      <div className="carousel">
        <i className="anticon anticon-left clickable" onClick={this.handleClickLeft} role="presentation"></i>
        <div className="wrapper">
          {this.showingImages(startIndex, endIndex).map((url, index) => {
            const key = `${index}${url}`;
            return <CarImage key={key} url={url} width="322" height="247" />;
          })}
        </div>
        <i className="anticon anticon-right clickable" onClick={this.handleClickRight} role="presentation"></i>
      </div>
    );
  }
}

Carousel.propTypes = {
  imageUrls: PropTypes.array,
  imagesShown: PropTypes.number,
};

export default Carousel;
