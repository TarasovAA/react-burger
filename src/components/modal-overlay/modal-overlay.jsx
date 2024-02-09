import styles from './modals-overlay.module.css';
import PropTypes from 'prop-types'

const ModalOverlay = ({ children, onClick }) => {
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


ModalOverlay.propTypes = {
    onClick: PropTypes.func.isRequired
}

export default ModalOverlay;