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
                <a target="_blank" rel="noreferrer" href='https://www.facebook.com/thang.edosin01/'><Icon.Facebook className={clsx(styles.iconConnect)} /></a>
                <a target="_blank" rel="noreferrer" href='https://github.com/edosin01'><Icon.Github className={clsx(styles.iconConnect)} /></a>
                <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/th%C4%83ng-%C4%91%E1%BB%A9c-7334b3223/'><Icon.Linkedin className={clsx(styles.iconConnect)} /></a>
                <a target="_blank" rel="noreferrer" href='#a'><Icon.Twitter className={clsx(styles.iconConnect)} /></a>
            </div>
        </div>
    );
}

export default Footer;