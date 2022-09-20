import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

import portfolio from '../../assets/images/portfolio.png';
import theBand from '../../assets/images/the-band.png';
import hrManagement from '../../assets/images/hrManagement.png';

import clsx from 'clsx';
import styles from './Portfolio.module.scss';

function CarouselControl() {
  return (
    <MDBCarousel showIndicators showControls className={clsx(styles.carouselInner)}>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={portfolio}
        alt='...'
      >
        <h5>My Portfolio</h5>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={hrManagement}
        alt='...'
      >
        <h5 className={clsx(styles.dark)}>Human Resources</h5>
      </MDBCarouselItem>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={theBand}
        alt='...'
      >
        <h5>The Band</h5>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}

export default CarouselControl;