import { ConstructorElement, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import style from './burger-constructor.module.css'
import PropTypes from 'prop-types'
import { IngredientsDataType } from '../../utils/data'

const ScrollerConstructor = ({burger}) => {
    const defaultBun = burger.head.length ? burger.head[0] : null;
    return (
        <div className={style.scroller}>
            {defaultBun && <ConstructorElement
                    type='top'
                    isLocked = {true}
                    text = {defaultBun.name + ' (верх)'}
                    price ={defaultBun.price}
                    thumbnail = {defaultBun.image}
              />}
              <div className={`${style.scroller} custom-scroll`}>
                {burger.body.map((item, index) =>
                <div className='pr-5' key = {index} style={{width: '90%', display:'flex'}}>
                    <div style={{margin: 'auto'}} className='pr-3'><DragIcon /> </div>
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
                    text = {defaultBun.name + ' (низ)'}
                    price ={defaultBun.price}
                    thumbnail = {defaultBun.image}
              />}
        </div>
    );
}

ScrollerConstructor.propTypes = {
    ingredients: PropTypes.arrayOf(IngredientsDataType)
}


export default ScrollerConstructor;