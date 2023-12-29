import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { Children } from 'react'
import PropTypes from 'prop-types'
import ModalOverlay from '../modal-overlay/modal-overlay'

const modalRoot = document.getElementById("react-modals");

const Modal = ({ onClose, title, children }) => {
    return createPortal(
        (<ModalOverlay>
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
        </ModalOverlay>), modalRoot);
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string,
    children: PropTypes.object
}

export default Modal;