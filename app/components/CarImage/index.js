/**
*
* CarImage Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazyload';
import { getResizeImageUrl } from 'utils/helpers';
import defaultCar from './car.png';
import './style.scss';

const imgLoad = () => <img src={defaultCar} alt="" />;
const imgError = (event) => {
  const img = event.target;
  img.src = defaultCar;
  img.onerror = null;
};
class CarImage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    const { width, height, url, className, isLazyLoad = true } = this.props;
    const imgClassName = `car-image ${className}`;
    const defaultCarImage = (<img
      width={width}
      height={height}
      className={imgClassName}
      src={defaultCar}
      alt=""
    />);
    if (!url) return defaultCarImage;
    const carImage = (<img
      width={width}
      height={height}
      className={imgClassName}
      src={getResizeImageUrl(url)}
      alt=""
      onLoad={imgLoad}
      onError={imgError}
    />);
    if (isLazyLoad) {
      return (
        <LazyLoad width={width} height={height} placeholder={defaultCarImage} once debounce={300} >
          {carImage}
        </LazyLoad>
      );
    }
    return carImage;
  }
}

CarImage.propTypes = {
  url: PropTypes.string,
  className: PropTypes.string,
  isLazyLoad: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
};

export default CarImage;
