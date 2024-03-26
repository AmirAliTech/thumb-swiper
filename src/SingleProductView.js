import React, { useEffect, useRef, useState } from 'react';
import ReactImageMagnify from 'react-image-magnify';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './styles.css'

// import required modules
import { Navigation } from 'swiper/modules';
const SingleProductView = () => {
  const images = [
    { id: '1', src: 'assets/images/products/product-1.jpg', alt: 'Grade A tools' },
    { id: '2', src: 'assets/images/products/product-2.jpg', alt: 'Grade A Tools' },
    { id: '3', src: 'assets/images/products/product-3.jpg', alt: 'Grade A Tools' },
    { id: '4', src: 'assets/images/products/product-4.jpg', alt: 'Grade A Tools' },
    { id: '5', src: 'assets/images/products/product-5.jpg', alt: 'Grade A Tools' },
    { id: '6', src: 'assets/images/products/product-6.jpg', alt: 'Grade A Tools' },
    { id: '7', src: 'assets/images/products/product-7.jpg', alt: 'Grade A Tools' },
    { id: '8', src: 'assets/images/products/product-8.jpg', alt: 'Grade A Tools' },
    { id: '9', src: 'assets/images/products/product-9.jpg', alt: 'Grade A Tools' },
  ];
  const [count, setCount] = useState(0);
  const [countImage, setCountImage] = useState(images[count]);
  const swiperRef1 = useRef(null);
  const swiperRef2 = useRef(null);

  const handleimagesIndex = (i) => {
    setCountImage(images[i]);

    if (swiperRef1.current && swiperRef1.current.swiper) {
      swiperRef1.current.swiper.slideTo(i);
    }
  };

  useEffect(() => {
    setCountImage(images[count]);
    // eslint-disable-next-line
  }, [count]);


  const handlePrevClick = () => {
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slidePrev()
    }

    if (swiperRef2.current !== null) {
      console.log('Current slide index:', swiperRef2.current.activeIndex);
    }



    if (count > 0) {
      setCount(count - 1);
    } else {
      setCount(images.length - 1);
    }
  };

  const handleNextClick = () => {
    if (swiperRef2.current && swiperRef2.current.swiper) {
      swiperRef2.current.swiper.slideNext();
    }
    if (count < images.length - 1) {
      setCount(count + 1);
    } else {
      setCount(0);
    }
  };

  return (
    <>
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
        }}
        modules={[Navigation]}
        className="mySwiper2 my-3"
        ref={swiperRef1}
      >
          <SwiperSlide >
            <ReactImageMagnify
              {...{
                smallImage: {
                  alt: countImage.alt,
                  isFluidWidth: true,
                  src: countImage.src,
                  width: 140,
                  height: 162,
                },
                largeImage: {
                  src: countImage.src,
                  width: 836,
                  height: 800,
                },
                enlargedImagePosition: 'over',
                lensStyle: { backgroundColor: 'rgba(0,0,0,.4)' }
              }}
            />
          </SwiperSlide>

        <div className="swiper-button-prev" onClick={handlePrevClick}></div>
        <div className="swiper-button-next" onClick={handleNextClick}></div>
      </Swiper>

      <Swiper
        loop={true}
        spaceBetween={10}
        slidesPerView={5}
        watchSlidesProgress={true}
        modules={[Navigation]}
        className="mySwiper1"
        ref={swiperRef2}
      >
        {images.map((item, index) => (
          <SwiperSlide key={item.id}>
            <img
              className={countImage.id === item.id ? 'opacity-100 clicked ' : 'opacity-50 '}
              src={item.src}
              alt={item.alt}
              onClick={() => handleimagesIndex(index)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default SingleProductView;