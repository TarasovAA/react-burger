import { useState, useEffect, FC } from 'react';
import { Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import Modal from '../modal/modal';
import OrderDetails from '../order-creation-details/order-details';
import styles from './burger-constructor.module.css';
import {useModal} from '../../hooks/useModal';
import { useDispatch } from '../../services/hooks';
import {refreshOrderIndex} from '../../services/order/action';

import BunsConstructor from './buns-constructor'
import IngredientsConstructor from './ingredients-constructor';

import { useNavigate } from 'react-router-dom';
import { TIngredient } from '../../utils/types';

import { GetBurgerConstructor } from '../../services/constructor/selectors';
import { GetUserInfo } from '../../services/auth/selectors';


interface IOrderCounterProps{
    count: number;
}

const OrderCounter: FC<IOrderCounterProps> = ({ count }) => {
    return (
        <div className={`${styles.flexCenterer} mr-10`}>
            <p className="text text_type_digits-medium mr-3">{count}</p>
            <CurrencyIcon type='primary' />
        </div>
    );
}

const BurgerConstructor = () => {
    const navigate = useNavigate();
    const [amount, setAmount] = useState<number>(0);

    const burger = GetBurgerConstructor();
    const user = GetUserInfo()
    
    console.log(user);

    const { isModalOpen, openModal, closeModal } = useModal();

    useEffect(() => {
        const burgerBodyAmount = burger.body.map((i: TIngredient) => i.price).reduce((amount: number, price: number) => amount + price, 0);
        const defaultBunsAmount = burger.head.length ? 2 * burger.head[0].price : 0;

        setAmount(defaultBunsAmount + burgerBodyAmount);
    }, [burger]);

    const dispach = useDispatch();

    const createOrderClicklHandler = () => {
        if(!user){
            navigate('/login');
            return;
        }

        {/* @ts-ignore */}
        dispach(refreshOrderIndex(burger));
        openModal();
    }
    return (
        <section className={styles.orderSidebarSection}>
            <div>
                <BunsConstructor>
                    <IngredientsConstructor />
                </BunsConstructor>
                <div className={`${styles.orderButton} p-10`}>
                    <Button 
                    htmlType="button" 
                    type="primary"
                    size="large"
                    disabled={!burger.head.length ? true : false}
                    onClick={createOrderClicklHandler}>Оформить заказ</Button>
                    <OrderCounter count={amount} />
                </div>
                {isModalOpen && (
                    <Modal title='Оформление заказа' onClose={closeModal}>
                        <OrderDetails />
                    </Modal>
                )}
            </div>
        </section>
    );
}

export default BurgerConstructor;