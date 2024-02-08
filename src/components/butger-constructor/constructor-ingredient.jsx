import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css';

import { useState, useRef, useEffect } from 'react';
import {v4  as uuidv4} from 'uuid';
import { useDrag, useDrop } from 'react-dnd';
import { DndDragTypes } from '../../constants/common';

const ConstructorIngredient = ({item, index, handleClose, moveIngredient}) => {

    const [constructorId, serConstructorId] = useState(null);

    useEffect(() => {
        serConstructorId(uuidv4())
    }, []);
    
    const ref = useRef(null);

    const [,dragRef] = useDrag({
        type: DndDragTypes.CONSTRUCTOR_INGREDIENT,
        item: {index, constructorId}
    })

    //TODO: зачем нужен handlerId и за что отвечает data-handler-id
    const [{ handlerId, isHover },dropRef] = useDrop({
        accept: DndDragTypes.CONSTRUCTOR_INGREDIENT,
        collect(monitor){
            return {
                handlerId: monitor.getHandlerId(),
                isHover: monitor.isOver()
              }
        },
        hover(item, monitor){
            if(!ref.current)
                return;

            const hoverIndex = index;
            const draggingIndex = item.index;

            if(hoverIndex === draggingIndex)
                return;

            const {top, bottom} = ref.current.getBoundingClientRect();

            const hoverElementMiddlePoiny = (bottom - top) / 2;
            
            const cursorY = monitor.getClientOffset().y;

            const dragingPointInHoverCoordinates = cursorY - top;

            if(draggingIndex > hoverIndex && dragingPointInHoverCoordinates > hoverElementMiddlePoiny)
                return;

            if(draggingIndex < hoverIndex && dragingPointInHoverCoordinates < hoverElementMiddlePoiny)
                return;

            moveIngredient(draggingIndex, hoverIndex);

            item.index = hoverIndex;
        }
    })


    dropRef(dragRef(ref));
    return (
        <div className={`${style.scrollerItem} pr-5`} ref={ref} data-handler-id={handlerId}>
        <div className={`${style.dragIconMarging} pr-3`}><DragIcon /> </div>
        <ConstructorElement
            isLocked = {false}
            text = {item.name}
            price ={item.price}
            thumbnail = {item.image}
            handleClose = {() => handleClose(index)}
            extraClass={isHover && style.isHover}
            />
    </div>
    )
}

export default ConstructorIngredient;