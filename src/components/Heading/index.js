import styles from './Heading.module.css';
import banner from '../../assets/images/banner.jpg';
import clsx from 'clsx';
import Navbar from '../Navbar';


function Heading() {
    return (
        <div className={clsx(styles.bannerContainer)}>
            <img className={clsx(styles.banner)} src={banner} alt="Banner"/>
            <Navbar />
            <div className={clsx(styles.info, "text-center")}>
                <h1 className={styles.name}>VŨ ĐỨC THĂNG</h1>
                <p className={styles.job}>Front-end developer</p>
            </div>
        </div>
    );
}

export default Heading;