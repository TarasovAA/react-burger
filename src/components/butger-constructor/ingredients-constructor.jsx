import { useSelector, useDispatch } from 'react-redux';
import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css';
import { useDrop } from 'react-dnd';
import {ADD_INGREDIANT_DATA, DELETE_INGREDIANT_DATA} from '../../services/actions/index';

const IngredientsConstructor = () => {
    const burgerBody = useSelector(store => store.burgerConstructor.body);
    const allIngredients = useSelector(store => store.allIngredients.allIngredients);

    const dispatch = useDispatch();

    const [{isOver},dropRef] = useDrop({
        accept: 'ingredient',
        drop(item){
            console.log(allIngredients.find(i => i._id === item._id));
            dispatch({
                type: ADD_INGREDIANT_DATA,
                payload: allIngredients.find(i => i._id === item._id)
            });
         },
        collect: monitor => ({
            isOver: monitor.isOver()
        })
    });

    const handleClose = (index) => {
        dispatch({
            type: DELETE_INGREDIANT_DATA,
            index: index
        });
    }

    return ( <div className={`${style.scroller} p-5 custom-scroll ${isOver && style.isHover}`}
    ref={dropRef}>

    {burgerBody.length !== 0 ? ( 
        burgerBody.map((item, index) =>
            <div className={`${style.scrollerItem} pr-5`} key = {index}>
                <div className={`${style.dragIconMarging} pr-3`}><DragIcon /> </div>
                <ConstructorElement
                    isLocked = {false}
                    text = {item.name}
                    price ={item.price}
                    thumbnail = {item.image}
                    handleClose = {() => handleClose(index)}
                     />
            </div>))
            : (
                <ConstructorElement
                text = {'Выберите начинку'} />
            )}
    </div>);
}

export default IngredientsConstructor;