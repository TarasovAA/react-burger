import { useSelector, useDispatch } from 'react-redux';
import style from './burger-constructor.module.css';
import { useDrop } from 'react-dnd';
import {ADD_INGREDIENT_DATA,
    DELETE_INGREDIENT_DATA,
    RESET_INGREDIENT_DATA} from '../../services/actions/index';
import { DndDragTypes } from '../../constants/common'
import IngredientElement from './ingredient-element'
import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import { useCallback } from 'react'
import {v4  as uuidv4} from 'uuid';
import { TIngredient, TConstructorIngredient } from '../../utils/types';


const IngredientsConstructor = () => {
    /* @ts-ignore */
    const burgerBody: Array<TConstructorIngredient> = useSelector(store => store.burgerConstructor.body);
    /* @ts-ignore */
    const allIngredients: Array<TIngredient> = useSelector(store => store.allIngredients.allIngredients);

    const dispatch = useDispatch();

    const [{isOver},dropRef] = useDrop<{_id: string}, unknown, {isOver: boolean}>({
        accept: DndDragTypes.INGREDIENT,
        drop(item){
            console.log(allIngredients.find(i => i._id === item._id));
            dispatch({
                type: ADD_INGREDIENT_DATA,
                payload:{
                    ...allIngredients.find(i => i._id === item._id),
                    uniqueId: uuidv4()
                } 
            });
         },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });
    
    const deleteIngredient = useCallback((index: number) => {
        dispatch({
            type: DELETE_INGREDIENT_DATA,
            index: index
            })
        }, []);

    const handleDraggingIngredient = useCallback((draggingIndex: number, hoverIndex:number) => {
        const newBurgerBody: Array<TConstructorIngredient> = [...burgerBody];

        const value = newBurgerBody[draggingIndex];
        newBurgerBody[draggingIndex] = newBurgerBody[hoverIndex];
        newBurgerBody[hoverIndex] = value;

        console.log('a1', draggingIndex);
        console.log('a2', hoverIndex);
        dispatch({
            type: RESET_INGREDIENT_DATA,
            payload: newBurgerBody
        });
        
    }, [burgerBody]);

    const renderIngredient = useCallback((item: TConstructorIngredient, index: number) => {
        const {uniqueId, ...ingredient} = item;
        return (
            <IngredientElement key={uniqueId}
                                    ingredient={ingredient}
                                    index={index}
                                    handleClose={deleteIngredient}
                                    moveIngredient={handleDraggingIngredient} />
        )
    }, [burgerBody])

    return ( <div className={`${style.scroller} p-5 custom-scroll ${isOver && style.isHover}`}
    ref={dropRef}>

    {burgerBody.length !== 0 ? ( 
        burgerBody.map((item, index) => {
            
            return (
                renderIngredient(item, index)
            )
        }
            ))
            : (
                 /* @ts-ignore */
                <ConstructorElement
                text = {'Выберите начинку'}
                />
            )}
    </div>);
}

export default IngredientsConstructor;