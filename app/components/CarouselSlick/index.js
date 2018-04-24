/**
*
* CarouselSlick Stateless Component
*
*/

import React from 'react';
import PropTypes from 'prop-types';
import CarImage from 'components/CarImage';
import { Carousel } from 'antd';

import './style.scss';

// <i className="anticon anticon-right clickable" role="presentation"></i>
function CarouselSlick(props) {
  const { imageUrls, imagesShown } = props;
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: imagesShown,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <div><i className="anticon anticon-right" /></div>,
    prevArrow: <div><i className="anticon anticon-left" /></div>,
  };
  return (
    <div className="carousel-slick">
      <Carousel {...settings}>
        {imageUrls.map((url) => (<div>
          <CarImage key={url} url={url} width="322" height="247" />
        </div>))}
      </Carousel>
    </div>
  );
}
CarouselSlick.defaultProps = {
  imageUrls: [],
  imagesShown: 1,
};
CarouselSlick.propTypes = {
  imageUrls: PropTypes.array,
  imagesShown: PropTypes.number,
};

export default CarouselSlick;
