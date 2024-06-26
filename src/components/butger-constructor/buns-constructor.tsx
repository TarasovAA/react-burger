import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useDispatch } from '../../services/hooks';
import { useDrop } from 'react-dnd';
import style from './burger-constructor.module.css';
import { DndDragTypes } from '../../constants/common'

import {SET_CONSTRUCTOR_BUNS} from '../../services/constructor/action';
import React, { FC } from 'react';
import { TIngredient } from '../../utils/types';
import { getBurgerConstructor } from '../../services/constructor/selectors';
import { getAllIngredientsRequestData } from '../../services/ingredients/selectors';
import empty from '../../images/Empty.png';
import { useSelector } from '../../services/hooks';

interface IBunsConstructorProps{
    children: React.ReactNode
};

interface IDragItem {
    _id: string
  }

const BunsConstructor: FC<IBunsConstructorProps> = ({children}) => {
    const {head} = useSelector(getBurgerConstructor);
    const { allIngredients } = useSelector(getAllIngredientsRequestData);

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
         {head.length !== 0 ? (
         <ConstructorElement
                    type='top'
                    isLocked = {true}
                    text = {head[0].name + ' (верх)'}
                    price ={head[0].price}
                    thumbnail = {head[0].image}
              />
              )
              : (
                <ConstructorElement
                    type= 'top'
                    isLocked = {true}
                    text = {'Выберите булку'}
                    thumbnail = {empty}
                    price={0}
                    />
            )}

            {children}

            {head.length !==0 ? (
              <ConstructorElement
                    type='bottom'
                    isLocked = {true}
                    text = {head[0].name + ' (низ)'}
                    price ={head[0].price}
                    thumbnail = {head[0].image}
              />)
                : (
                    <ConstructorElement
                        type= 'bottom'
                        isLocked = {true}
                        text = {'Выберите булку'}
                        thumbnail = {empty}
                        price={0} />
                )}
        </div>
    );
}

export default BunsConstructor;