import { Children } from 'react'
import styles from './models-overlay.module.css';
import PropTypes from 'prop-types'

const ModalOverlay = ({children, onClick}) => {
    return (
        <div className={styles.overlay} onClick={onClick}>
            <div className={styles.window} onClick={e => e.stopPropagation()}>
                {Children.map(children, child => <>
                            {child}
                        </>)}
            </div>
        </div>
    )
}


ModalOverlay.propTypes = {
    onClick: PropTypes.func,
    children: PropTypes.object
 }

export default ModalOverlay;