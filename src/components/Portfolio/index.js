import clsx from 'clsx';
import styles from './Portfolio.module.scss';
import CarouselControl from './CarouselControl';

function Portfolio() {
    return (
        <div className="content" id="portfolio">
            <div className="title">
                <h1 className={clsx('title', "text-center")}>PORTFOLIO</h1>
            </div>

            <div className={clsx("description", "mb-4")}>
                <p className={clsx("text-center")}>
                    Xin chào, dưới đây là các dự án mà tôi đã hoàn thành.
                </p>
            </div>

            <div className={clsx(styles.slider)}>
                <CarouselControl />
            </div>
            
        </div>
    );
}

export default Portfolio;