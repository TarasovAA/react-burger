import {useState, useEffect} from 'react'
import {  Button, CurrencyIcon, Tab, ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components'
import {data} from '../../utils/data';
import ScrollerConstructor from './scroller-constructor'

const OfferCouner = ({count}) => {
    return(
        <div className='mr-10' style={{display: 'flex', alignItems: 'center'}}>
            <p className="text text_type_digits-medium mr-3">{count}</p>
            <CurrencyIcon />
        </div>
    );
}

const BurgerConstructor = () => {

    const [amount, setAmount] = useState(0);
    const [burger, setBurger] = useState({
        head: [],
        body: []
    });

    useEffect(() => {
        setBurger({
            head: data.filter(d => d.type === 'bun'),
            body: data.filter(d => d.type !== 'bun')
        });

    }, []);

    useEffect(() => {
        const burgerBodyAmount = burger.body.map(i => i.price).reduce((amount, price) => amount + price);
        const defaultBunsAmount = burger.head.length ? 2 * burger.head[0].price : 0;

        setAmount(defaultBunsAmount + data.map(i => i.price).reduce((amount, price) => amount + price), 0);
    }, [burger]);

    return (
        <section style={{gridArea:'sidebar'}}>
            <h1>Constructor</h1>
            <ScrollerConstructor burger={burger} />
            <div className="p-10" style={{display: 'flex', flexDirection: 'row-reverse'}}>
                <Button type="primary" size="large">Оформить заказ</Button>
                <OfferCouner count={amount} />
                
            </div>
        </section>
    );
}

export default BurgerConstructor;