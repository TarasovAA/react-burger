import { Children } from 'react'
import styles from './models-overlay.module.css';
import PropTypes from 'prop-types'

const ModalOverlay = ({children, onClick}) => {
    return (
        <div className={styles.overlay} onClick={e  => { 
            e.stopPropagation();
            onClick();
        }
        
        }>
           
                {Children.map(children, child => <>
                            {child}
                        </>)}
        </div>
    )
}


ModalOverlay.propTypes = {
    onClick: PropTypes.func
 }

export default ModalOverlay;