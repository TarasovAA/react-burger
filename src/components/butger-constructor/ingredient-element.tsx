import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css';

import { useState, useRef, useEffect, FC } from 'react';

import {v4 as uuidv4} from 'uuid';
import { useDrag, useDrop } from 'react-dnd';
import { DndDragTypes } from '../../constants/common';
import { Identifier } from 'typescript';
import { TIngredient } from '../../utils/types';

interface IDragItem {
    index: number
    id: string
    type: string
  }

interface IIngredientElementProps{
    ingredient: TIngredient;
    index: number;
    handleClose: (index: number) => void;
    moveIngredient: (draggingIndex: number,  hoverIndex: number) => void
}

const IngredientElement : FC<IIngredientElementProps> = ({ingredient, index, handleClose, moveIngredient}) => {

    const [constructorId, setConstructorId] = useState<string|null>(null);

    useEffect(() => {
        setConstructorId(uuidv4())
    }, []);
    
    const ref = useRef<HTMLDivElement | null>(null);

    const [,dragRef] = useDrag<{index: number, constructorId: string | null}, unknown, void>({
        type: DndDragTypes.CONSTRUCTOR_INGREDIENT,
        item: {index, constructorId}
    })

    //TODO: зачем нужен handlerId и за что отвечает data-handler-id
    const [{ handlerId, isHover }, dropRef] = useDrop<IDragItem, unknown, {handlerId: Identifier | null, isHover: boolean }>({
        accept: DndDragTypes.CONSTRUCTOR_INGREDIENT,
        collect(monitor: any){
            return {
                handlerId: monitor.getHandlerId(),
                isHover: monitor.isOver()
              }
        },
        hover(item: IDragItem, monitor){
            if(!ref.current)
                return;

            const hoverIndex: number = index;
            const draggingIndex: number = item.index;

            if(hoverIndex === draggingIndex)
                return;

            // const {top, bottom} = ref.current.getBoundingClientRect();

            // const hoverElementMiddlePoiny = (bottom - top) / 2;
            
            // const cursorY = monitor.getClientOffset().y;

            // const dragingPointInHoverCoordinates = cursorY - top;

            // if(draggingIndex > hoverIndex && dragingPointInHoverCoordinates > hoverElementMiddlePoiny)
            //     return;

            // if(draggingIndex < hoverIndex && dragingPointInHoverCoordinates < hoverElementMiddlePoiny)
            //     return;

            console.log('b1', draggingIndex);
            console.log('b2', hoverIndex);
            moveIngredient(draggingIndex, hoverIndex);

            item.index = hoverIndex;
        }
    })


    dropRef(dragRef(ref));
    return (
        <div className={`${style.scrollerItem} pr-5`} ref={ref} data-handler-id={handlerId}>
        <div className={`${style.dragIconMarging} pr-3`}><DragIcon type='primary' /> </div>
        <ConstructorElement
            isLocked = {false}
            text = {ingredient.name}
            price ={ingredient.price}
            thumbnail = {ingredient.image}
            handleClose = {() => handleClose(index)}
            extraClass={isHover ? style.isHover : ''}
            />
    </div>
    )
}

export default IngredientElement;