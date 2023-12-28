import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import {useState} from 'react'
import style from './burger-constructor.module.css'

const ScrollerConstructor = ({burger}) => {

    const defaultBun = burger.head.length ? burger.head[0] : null;

    const scrollScc = style.scroller + ' custom-scroll';
    return (
        <div className={style.scroller}>
            {defaultBun && <ConstructorElement
                    type='top'
                    isLocked = {true}
                    text = {defaultBun.name}
                    price ={defaultBun.price}
                    thumbnail = {defaultBun.image}
              />}
              <div className={scrollScc}>
                {burger.body.map((item) =>
                    <ConstructorElement
                        key = {item._id}
                        isLocked = {false}
                        text = {item.name}
                        price ={item.price}
                        thumbnail = {item.image}
                />
                )}
            </div>
              {defaultBun && <ConstructorElement
                    type='bottom'
                    isLocked = {true}
                    text = {defaultBun.name}
                    price ={defaultBun.price}
                    thumbnail = {defaultBun.image}
              />}
        </div>
    );
}


export default ScrollerConstructor;