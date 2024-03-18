import { FC } from 'react';
import styles from './modals-overlay.module.css';

interface IModalOverlayProps{
    children?: React.ReactNode;
    onClick: () => void;
}

const ModalOverlay: FC<IModalOverlayProps> = ({ children, onClick }) => {
    return (
        <div className={styles.overlay} onClick={e => {
            e.stopPropagation();
            onClick();
        }
        }>
            {children}
        </div>
    )
}

export default ModalOverlay;