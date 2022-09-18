// import React, { useState } from 'react';
// import Carousel from 'react-bootstrap/Carousel';
// import image1 from '../../assets/images/banner.jpg';

// function CarouselControl() {
//   const [index, setIndex] = useState(0);

//   const handleSelect = (selectedIndex, e) => {
//     setIndex(selectedIndex);
//   };

//   return (
//     <Carousel activeIndex={index} onSelect={handleSelect}>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={image1}
//           alt="First slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={image1}
//           alt="Second slide"
//         />
//       </Carousel.Item>
//       <Carousel.Item>
//         <img
//           className="d-block w-100"
//           src={image1}
//           alt="Third slide"
//         />
//       </Carousel.Item>
//     </Carousel>
//   );
// }

// export default CarouselControl;

import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';
import image1 from '../../assets/images/banner.jpg';
import clsx from 'clsx';
import styles from './Portfolio.module.scss';

function CarouselControl() {
  return (
    <MDBCarousel showControls showIndicators dark className={(clsx(styles.carouselInner))}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={image1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={image1}
        alt='...'
      />
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={image1}
        alt='...'
      />
    </MDBCarousel>
  );
}

export default CarouselControl;