import styles from './Heading.module.css';
import banner from '../../assets/images/banner.jpg';
import clsx from 'clsx';
import Navbar from '../Navbar';


function Heading() {
    return (
        <div>
            <img className={clsx(styles.banner)} src={banner} alt="Banner"/>
            <Navbar />
            <div className={clsx(styles.info, "text-center")}>
                <span className={styles.name}>VŨ ĐỨC THĂNG</span>
                <p className={styles.job}>Front-end developer</p>
            </div>
        </div>
    );
}

export default Heading;