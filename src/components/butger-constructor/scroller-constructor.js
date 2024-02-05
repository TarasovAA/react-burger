import PropTypes from 'prop-types';
import { IngredientsDataType } from '../../utils/data';
import BunsConstructor from './buns-constructor'
import IngredientsConstructor from './ingredients-constructor';

const ScrollerConstructor = () => {
    return (
        <>
            <BunsConstructor>
               <IngredientsConstructor />
            </BunsConstructor>
        </>
    );
}


export default ScrollerConstructor;