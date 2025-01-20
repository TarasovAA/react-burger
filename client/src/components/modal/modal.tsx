import { createPortal } from 'react-dom';
import styles from './modal.module.css';
import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { FC, useEffect } from 'react';
import ModalOverlay from '../modal-overlay/modal-overlay';

const modalRoot  = document.getElementById("react-modals") as Element;

interface IModalProps{
    onClose: () => void;
    title?: string;
    children?: React.ReactNode
}

const Modal: FC<IModalProps> = ({ onClose, title, children }) => {
    useEffect(() => {
        function closeByEscape(evt: KeyboardEvent) {
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
                        <p className="text text_type_main-medium">{title}</p>
                    </div>
                    <CloseIcon onClick={onClose} type='secondary' />
                </div>
                <div>
                    {children}
                </div>
            </div>
        </ModalOverlay>), modalRoot);
}

export default Modal;