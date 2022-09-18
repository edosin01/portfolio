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
                    Xin chào, tôi là Vũ Đức Thăng, là một người hòa đồng, vui tính. Tôi có niềm đam mê
                    với nhiếp ảnh và ngôn ngữ. Tôi hiện tại đang là sinh viên năm 4 đại học Công nghiệp
                    Hà Nội chuyên ngành Công nghệ thông tin.
                </p>
            </div>

            <div className={clsx(styles.slider)}>
                <CarouselControl />
            </div>
            
        </div>
    );
}

export default Portfolio;