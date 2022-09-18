import clsx from "clsx";
import styles from './Footer.module.css';
import * as Icon from 'react-bootstrap-icons';

function Footer() {
    return (
        <div className="dark-content">
            <div className="title">
                <h1 className={clsx(styles.lightTitle, "text-center", "pt-3", "pb-2")}>CONNECT WITH ME</h1>
            </div>
            <div className={clsx(styles.connectLink, 'd-flex', 'justify-content-center', 'pb-4')}>
                <a target="_blank" href='https://www.facebook.com/thang.edosin01/'><Icon.Facebook className={clsx(styles.iconConnect)} /></a>
                <a target="_blank" href='https://github.com/edosin01'><Icon.Github className={clsx(styles.iconConnect)} /></a>
                <a target="_blank" href='#'><Icon.Linkedin className={clsx(styles.iconConnect)} /></a>
                <a target="_blank" href='#'><Icon.Twitter className={clsx(styles.iconConnect)} /></a>
            </div>
        </div>
    );
}

export default Footer;