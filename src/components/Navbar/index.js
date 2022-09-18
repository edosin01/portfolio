import clsx from 'clsx';
import styles from './Navbar.module.css';

function Navbar() {
    const classNameUl = clsx(styles.nav, 'd-flex');
    const classNameLi = clsx(styles.navLi);
    return (
        <div className="row">
            <ul className={classNameUl}>
                <li className={classNameLi}><a href="#about">ABOUT</a></li>
                <li className={classNameLi}><a href="#portfolio">PORTFOLIO</a></li>
                <li className={classNameLi}><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    );
}

export default Navbar;