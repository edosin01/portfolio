import styles from './About.module.css';
import clsx from 'clsx';

function About() {
    const skills = [
        {
            name: 'HTML5',
            percent: '80%',
            bgColorTitle: 'rgb(188, 26, 40)',
            bgColorBar: 'rgb(221, 30, 47)'
        },
        {
            name: 'CSS3',
            percent: '70%',
            bgColorTitle: 'rgb(5, 138, 173)',
            bgColorBar: 'rgb(6, 162, 203)'
        },
        {
            name: 'JavaScript',
            percent: '60%',
            bgColorTitle: 'rgb(200, 150, 45)',
            bgColorBar: 'rgb(235, 176, 54)'
        },
        {
            name: 'ReactJS',
            percent: '50%',
            bgColorTitle: 'rgb(89, 54, 180)',
            bgColorBar: 'rgb(104, 64, 212)'
        },
        {
            name: 'MySQL',
            percent: '70%',
            bgColorTitle: 'rgb(160, 60, 100)',
            bgColorBar: 'rgb(190, 40, 120)'
        },
        {
            name: 'Photoshop',
            percent: '75%',
            bgColorTitle: 'rgb(28, 113, 76)',
            bgColorBar: 'rgb(33, 133, 89)'
        }
    ];
    
    return (
        <div id="about" className="content">
            <div className="title">
                <h1 className={clsx('title', "text-center")}>ABOUT ME</h1>
            </div>

            <div className={clsx("description", "mb-4")}>
                <p className={clsx("text-center")}>
                    Xin chào, tôi là Vũ Đức Thăng, là một người hòa đồng, vui tính. Tôi có niềm đam mê
                    với nhiếp ảnh và ngôn ngữ. Tôi hiện tại đang là sinh viên năm 4 đại học Công nghiệp
                    Hà Nội chuyên ngành Công nghệ thông tin.
                </p>
            </div>

            <div className="skills">
            {
                skills.map(function(skill, index) {
                    return (
                        <div className={clsx(styles.skill, 'mb-4')} key={index}>
                            {/* Name */}
                            <div
                                style={{
                                    backgroundColor: skill.bgColorTitle
                                }}
                                className={clsx(styles.skillTitle)}
                            >
                                {skill.name}
                            </div>

                            {/* Bar */}
                            <div
                                style={{
                                    width: skill.percent,
                                    backgroundColor: skill.bgColorBar
                                }}
                                className={clsx(styles.skillBar)}
                            >
                            </div>

                            {/* Percent */}
                            <div className={clsx(styles.skillPercent)}>{skill.percent}</div>
                        </div>
                    );
                })
            }
            </div>
        </div>
    );
}

export default About;