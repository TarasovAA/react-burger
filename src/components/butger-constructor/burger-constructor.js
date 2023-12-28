import {useState, useEffect} from 'react'
import {  Button, CurrencyIcon, Tab, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import ScrollerConstructor from './scroller-constructor'
import styles from './burger-constructor.module.css'
import Modal from '../modal/modal'
import OrderDetails from '../modal/order-details'

const OfferCouner = ({count}) => {
    return(
        <div className='mr-10' style={{display: 'flex', alignItems: 'center'}}>
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
            <ScrollerConstructor burger={burger} />
            <div className="p-10" style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Button htmlType="button" type="primary" size="large" onClick={handleOpenModal}>Оформить заказ</Button>
                    {isModalVisible && <Modal onClose={handleCloseModal}>
                            <OrderDetails orderIndex='034536' />
                        </Modal>}
                <OfferCouner count={amount} />
            </div>
        </section>
    );
}

export default BurgerConstructor;