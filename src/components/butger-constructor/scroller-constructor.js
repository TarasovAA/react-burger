import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import {useState} from 'react'
import style from './burger-constructor.module.css'

const ScrollerConstructor = ({burger}) => {

    const defaultBun = burger.head.length ? burger.head[0] : null;

    const scrollScc = style.scroller + ' custom-scroll';
    return (
        <div className={scrollScc}>
            {defaultBun && <ConstructorElement
                    type='top'
                    key = {defaultBun._id}
                    isLocked = {true}
                    text = {defaultBun.name}
                    price ={defaultBun.price}
                    thumbnail = {defaultBun.image}
              />}
            {burger.body.map((item) =>
                <ConstructorElement
                    key = {item._id}
                    isLocked = {false}
                    text = {item.name}
                    price ={item.price}
                    thumbnail = {item.image}
              />)}
              {defaultBun && <ConstructorElement
                    type='bottom'
                    key = {defaultBun._id}
                    isLocked = {true}
                    text = {defaultBun.name}
                    price ={defaultBun.price}
                    thumbnail = {defaultBun.image}
              />}
        </div>
    );
}


export default ScrollerConstructor;