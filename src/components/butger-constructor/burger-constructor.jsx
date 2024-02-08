import { useState, useEffect } from 'react'
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components'
import Modal from '../modal/modal'
import OrderDetails from '../order-details/order-details'
import PropTypes from 'prop-types'
import styles from './burger-constructor.module.css'
import {useModal} from '../../hooks/useModal'
import { useSelector, useDispatch } from 'react-redux';
import {refreshOrderIndex} from '../../services/actions';

import BunsConstructor from './buns-constructor'
import IngredientsConstructor from './ingredients-constructor';


const OrderCounter = ({ count }) => {
    return (
        <div className={`${styles.flexCenterer} mr-10`}>
            <p className="text text_type_digits-medium mr-3">{count}</p>
            <CurrencyIcon />
        </div>
    );
}

const BurgerConstructor = () => {

    const [amount, setAmount] = useState(0);

    const burger = useSelector(store => store.burgerConstructor)
    const { isModalOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        const burgerBodyAmount = burger.body.map(i => i.price).reduce((amount, price) => amount + price, 0);
        const defaultBunsAmount = burger.head.length ? 2 * burger.head[0].price : 0;

        setAmount(defaultBunsAmount + burgerBodyAmount);
    }, [burger]);

    const {orderIndex} = useSelector(store => store.order);
    const dispach = useDispatch();

    return (
        <section className={styles.orderSidebarSection}>
            <div>
                <BunsConstructor>
                    <IngredientsConstructor />
                </BunsConstructor>
                <div className={`${styles.orderButton} p-10`}>
                    <Button htmlType="button" type="primary" size="large" onClick={() => {
                        dispach(refreshOrderIndex(burger));
                        openModal();
                    }}>Оформить заказ</Button>
                    <OrderCounter count={amount} />
                </div>
                {isModalOpen && (
                    <Modal onClose={closeModal}>
                        <OrderDetails orderIndex={orderIndex} />
                    </Modal>
                )}
            </div>
        </section>
    );
}

OrderCounter.propTypes = {
    count: PropTypes.number
}

export default BurgerConstructor;