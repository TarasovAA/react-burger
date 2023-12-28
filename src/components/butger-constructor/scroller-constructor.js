import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import {useState} from 'react'
import style from './burger-constructor.module.css'
import { within } from '@testing-library/react';

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
                {burger.body.map((item, index) =>
                <div key = {index} style={{width: '90%'}}>
                    <ConstructorElement
                        isLocked = {false}
                        text = {item.name}
                        price ={item.price}
                        thumbnail = {item.image} />
                </div>
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