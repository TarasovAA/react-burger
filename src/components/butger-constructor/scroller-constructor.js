import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import PropTypes from 'prop-types';
import { IngredientsDataType } from '../../utils/data';
import style from './burger-constructor.module.css';

const ScrollerConstructor = ({burger}) => {
    return (
        <div className={style.scroller}>
            {burger.head.length !== 0 ? (
            <ConstructorElement
                    type='top'
                    isLocked = {true}
                    text = {burger.head[0].name + ' (верх)'}
                    price ={burger.head[0].price}
                    thumbnail = {burger.head[0].image}
              />
              )
              : (
                <ConstructorElement
                    type= 'top'
                    isLocked = {true}
                    text = {'Выберите булку'}
                    thumbnail = {''}
                    />
            )
            }
              <div className={`${style.scroller} custom-scroll`}>
                {burger.body.length !== 0 ? ( 
                    burger.body.map((item, index) =>
                        <div className={`${style.scrollerItem} pr-5`} key = {index}>
                            <div className={`${style.dragIconMarging} pr-3`}><DragIcon /> </div>
                            <ConstructorElement
                                isLocked = {false}
                                text = {item.name}
                                price ={item.price}
                                thumbnail = {item.image} />
                        </div>))
                        : (
                            <ConstructorElement
                            text = {'Выберите начинку'} />
                        )}
                </div>
              {burger.head.length !==0 ? (
              <ConstructorElement
                    type='bottom'
                    isLocked = {true}
                    text = {burger.head[0].name + ' (низ)'}
                    price ={burger.head[0].price}
                    thumbnail = {burger.head[0].image}
              />)
                : (
                    <ConstructorElement
                        type= 'bottom'
                        isLocked = {true}
                        text = {'Выберите булку'}
                        />
                )}
        </div>
    );
}

ScrollerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientsDataType)
}


export default ScrollerConstructor;