import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Children } from 'react'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById("react-modals");

const Modal = ({ onClose, title, children }) => {
    return createPortal(
        (<div className={styles.overlay} onClick={onClose}>
            <div className={styles.window} onClick={e => e.stopPropagation()}>
                <div className={`${styles.header} pl-10 pr-10 pt-10`}>
                    <div>
                        <p className="text text_type_main-default">{title}</p>
                    </div>
                    <CloseIcon onClick={onClose} />
                </div>
                <div>
                    {Children.map(children, child => <>
                        {child}
                    </>)}
                </div>
            </div>
        </div>), modalRoot);
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.object
}

export default Modal;