import clsx from "clsx";
import styles from './Contact.module.css';

function Contact() {
    return (
        <div id="contact" className="content">
            <div className="title">
                <h1 className={clsx('title', "text-center")}>CONTACT</h1>
            </div>

            <div className={clsx("description", "mb-4")}>
                <p className={clsx("text-center")}>
                    Không quan trọng là bạn có muốn làm việc chung với tôi hay không, 
                    hoặc chỉ là để gửi một lời chào hỏi, đừng ngần ngại mà gửi mail cho tôi nhé. 
                    Tôi vẫn luôn ở đây để lắng nghe mọi điều từ bạn.
                </p>
            </div>

            <div className={clsx('col-md-12')}>
                <form className='row'>
                    <div className={clsx(styles.formContact, 'col-sm-12', 'mb-3')}>
                        <input
                            className={clsx('col-md-4', 'form-group', styles.inp)}
                            placeholder='Enter name...'
                        />
                        <input 
                            className={clsx('col-md-7', 'form-group', styles.inp)}
                            placeholder='Enter email...'
                        />
                    </div>
                    <div className={clsx(styles.formContact, 'col-sm-12')}>
                        <textarea 
                            className={clsx('form-group', 'col-sm-12', styles.inpArea)}
                            placeholder='Message...'
                        />
                    </div>
                    <div className={clsx(styles.formContact, 'col-sm-12', 'justify-content-center')}>
                        <input className={clsx(styles.submitBtn)} type="submit" value="SEND"/>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;