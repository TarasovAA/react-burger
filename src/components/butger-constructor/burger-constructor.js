import {useState, useEffect} from 'react'
import { Button, CurrencyIcon} from '@ya.praktikum/react-developer-burger-ui-components'
import ScrollerConstructor from './scroller-constructor'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import PropTypes from 'prop-types'
import { IngredientsDataType } from '../../utils/data'
import styles from './burger-constructor.module.css'

const OrderCouner = ({count}) => {
    return(
        <div className={`${styles.flexCenterer} mr-10`}>
            <p className="text text_type_digits-medium mr-3">{count}</p>
            <CurrencyIcon />
        </div>
    );
}

const BurgerConstructor = ({ingredients}) => {

    const [amount, setAmount] = useState(0);
    const [burger, setBurger] = useState({
        head: [],
        body: [],
    });

    const [isModalVisible, setModalVisible] = useState(false);

    useEffect(() => {
        setBurger({
            head: ingredients.filter(d => d.type === 'bun'),
            body: ingredients.filter(d => d.type !== 'bun')
        });

    }, []);

    useEffect(() => {
        const burgerBodyAmount = burger.body.map(i => i.price).reduce((amount, price) => amount + price, 0);
        const defaultBunsAmount = burger.head.length ? 2 * burger.head[0].price : 0;

        setAmount(defaultBunsAmount + burgerBodyAmount);
    }, [burger]);

    
    const handleOpenModal = () => {
        setModalVisible(true);
      }
    
    const handleCloseModal = () => {
        setModalVisible(false);
      }


    return (
        <section className={styles.sidebar}>
            <div>
                <ScrollerConstructor burger={burger} />
                <div className={`${styles.orderButton} p-10`}>
                    <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
                    <OrderCouner count={amount} />
                </div>

                {isModalVisible && <Modal onClose={handleCloseModal}>
                                <OrderDetails orderIndex='034536' />
                            </Modal>}
            </div>
        </section>
    );
}

OrderCouner.propTypes = {
    count: PropTypes.number
}

BurgerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientsDataType)
}

export default BurgerConstructor;