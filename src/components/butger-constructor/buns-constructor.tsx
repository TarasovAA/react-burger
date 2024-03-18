import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useSelector, useDispatch } from 'react-redux';
import { useDrop } from 'react-dnd';
import style from './burger-constructor.module.css';
import { DndDragTypes } from '../../constants/common'

import {SET_CONSTRUCTOR_BUNS} from '../../services/actions/index';
import React, { FC } from 'react';
import { TIngredient } from '../../utils/types';

interface IBunsConstructorProps{
    children: React.ReactNode
};

interface IDragItem {
    _id: string
  }

const BunsConstructor: FC<IBunsConstructorProps> = ({children}) => {
    {/* @ts-ignore */}
    const burgerHead = useSelector(store => store.burgerConstructor.head);
     {/* @ts-ignore */}
    const allIngredients = useSelector(store => store.allIngredients.allIngredients);
    

    const dispatch = useDispatch();

    const [{isOver}, dropRef] = useDrop<IDragItem, unknown, {isOver: boolean}>({
        accept: DndDragTypes.BUN,
        drop(item: IDragItem): void{
            dispatch({
                type: SET_CONSTRUCTOR_BUNS,
                payload: allIngredients.find((i: TIngredient) => i._id === item._id)
            });
         },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    return (
        <div ref={dropRef}
            className={`${style.scroller} p-5 ${isOver && style.isHover}`}>
         {burgerHead.length !== 0 ? (
         <ConstructorElement
                    type='top'
                    isLocked = {true}
                    text = {burgerHead[0].name + ' (верх)'}
                    price ={burgerHead[0].price}
                    thumbnail = {burgerHead[0].image}
              />
              )
              : (
                <ConstructorElement
                    type= 'top'
                    isLocked = {true}
                    text = {'Выберите булку'}
                    thumbnail = {''}
                    price={0}
                    />
            )}

            {children}

            {burgerHead.length !==0 ? (
              <ConstructorElement
                    type='bottom'
                    isLocked = {true}
                    text = {burgerHead[0].name + ' (низ)'}
                    price ={burgerHead[0].price}
                    thumbnail = {burgerHead[0].image}
              />)
                : (
                    <ConstructorElement
                        type= 'bottom'
                        isLocked = {true}
                        text = {'Выберите булку'}
                        thumbnail = {''}
                        price={0} />
                )}
        </div>
    );
}

export default BunsConstructor;