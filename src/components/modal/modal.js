import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect } from 'react'
import PropTypes from 'prop-types'
import ModalOverlay from '../modal-overlay/modal-overlay'

const modalRoot = document.getElementById("react-modals");

const Modal = ({ onClose, title, children }) => {
    useEffect(() => {
        function closeByEscape(evt) {
            if (evt.key === 'Escape') {
                onClose();
            }
        }
        document.addEventListener('keydown', closeByEscape);
        return () => {
            document.removeEventListener('keydown', closeByEscape);
        }

    }, [onClose]);

    return createPortal(
        (<ModalOverlay onClick={onClose} >
            <div className={styles.window} onClick={e => e.stopPropagation()}>
                <div className={`${styles.header} pl-10 pr-10 pt-10`}>
                    <div>
                        <p className="text text_type_main-default">{title}</p>
                    </div>
                    <CloseIcon onClick={onClose} />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </ModalOverlay>), modalRoot);
}

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
    title: PropTypes.string
}

export default Modal;