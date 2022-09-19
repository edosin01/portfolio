import clsx from 'clsx';
import styles from './Navbar.module.scss';
import { useState, useEffect } from 'react';

function Navbar() {
    let classNameUl = clsx(styles.nav, 'd-flex');
    let classNameLi = clsx(styles.navLi);
    const [checkHeight, setCheckHeight] = useState(false);

    useEffect(() => {
        function handleScroll() {
            setCheckHeight(window.scrollY >= window.innerHeight-20);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div className="row">
            {
                checkHeight ? (
                    <>
                        <ul className={classNameUl.concat(' ' + styles.navTransfer)}>
                            <li className={classNameLi.concat(' ' + styles.liTransfer)}><a href="#about">ABOUT</a></li>
                            <li className={classNameLi.concat(' ' + styles.liTransfer)}><a href="#portfolio">PORTFOLIO</a></li>
                            <li className={classNameLi.concat(' ' + styles.liTransfer)}><a href="#contact">CONTACT</a></li>
                        </ul>
                    </>
                ) : (
                    <ul className={classNameUl}>
                        <li className={classNameLi}><a href="#about">ABOUT</a></li>
                        <li className={classNameLi}><a href="#portfolio">PORTFOLIO</a></li>
                        <li className={classNameLi}><a href="#contact">CONTACT</a></li>
                    </ul>
                )
            }
        </div>
    );
}

export default Navbar;