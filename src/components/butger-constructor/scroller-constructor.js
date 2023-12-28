import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css'
import proptypes from 'prop-types'
import { IngredientsDataType } from '../../utils/data'

const ScrollerConstructor = ({burger}) => {
    const defaultBun = burger.head.length ? burger.head[0] : null;
    return (
        <div className={style.scroller}>
            {defaultBun && <ConstructorElement
                    type='top'
                    isLocked = {true}
                    text = {defaultBun.name}
                    price ={defaultBun.price}
                    thumbnail = {defaultBun.image}
              />}
              <div className={`${style.scroller} custom-scroll`}>
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

ScrollerConstructor.propTypes = {
    ingredients: proptypes.arrayOf(IngredientsDataType)
}


export default ScrollerConstructor;