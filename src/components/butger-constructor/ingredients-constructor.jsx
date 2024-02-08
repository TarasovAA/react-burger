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


const IngredientsConstructor = () => {
    const burgerBody = useSelector(store => store.burgerConstructor.body);
    const allIngredients = useSelector(store => store.allIngredients.allIngredients);

    const dispatch = useDispatch();

    const [{isOver},dropRef] = useDrop({
        accept: DndDragTypes.INGREDIENT,
        drop(item){
            console.log(allIngredients.find(i => i._id === item._id));
            dispatch({
                type: ADD_INGREDIENT_DATA,
                payload: allIngredients.find(i => i._id === item._id)
            });
         },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });
    
    const deleteIngredient = useCallback((index) => {
        dispatch({
            type: DELETE_INGREDIENT_DATA,
            index: index
            })
        }, []);

    const handleDraggingIngredient = useCallback((draggingIndex, hoverIndex) => {
        const newBurgerBody = [...burgerBody];

        const value = newBurgerBody[draggingIndex];
        newBurgerBody[draggingIndex] = newBurgerBody[hoverIndex];
        newBurgerBody[hoverIndex] = value;

        dispatch({
            type: RESET_INGREDIENT_DATA,
            payload: newBurgerBody
        });
        
    }, [burgerBody]);

    const renderIngredient = useCallback((item, index) => {
        //TODO: не совсем понял, какова необходимость использоватьэту библиотеку здесь. Буду рад пояснению.
        const guid = uuidv4()
        return (
            <IngredientElement key={guid}
                                    ingredient={item}
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
                <ConstructorElement
                text = {'Выберите начинку'} />
            )}
    </div>);
}

export default IngredientsConstructor;