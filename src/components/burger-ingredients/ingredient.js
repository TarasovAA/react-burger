import Modal from "../modal/modal";
import {useEffect, useRef, useState} from "react";
import { CurrencyIcon  } from '@ya.praktikum/react-developer-burger-ui-components';
import IngredientDetails from '../modal/ingredient-details'

const Ingredient = ({item}) =>{
    const ckickRef = useRef(null);

    const [modelVisebele, setModelVisebele] = useState(false);

    useEffect(() => {
        ckickRef.current.addEventListener('click', handleOpenModal);

        return () => ckickRef.current.removeEventListener('click', handleOpenModal)
    }, []);

    const handleOpenModal = () => {
        setModelVisebele(true);
      }
    
    const handleCloseModal = () => {
        setModelVisebele(false);
      }

    return (<div ref={ckickRef} style={{margin: '5px', padding: '10px', width: 250, height: 250}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <img src={item.image} alt={item.name} />
        </div>
        <p className="text text_type_main-default" style={{textAlign: 'center'}}>{item.name}</p>
        <div className="mt-2" style={{textAlign: 'center'}}>
          <p className="text text_type_main-medium">{item.price}<CurrencyIcon /></p>
        </div>
        
        {modelVisebele && <Modal onClose={handleCloseModal} title='Детали игредиента'>
            <IngredientDetails item={item} />
          </Modal>}
        </div>);
}

export default Ingredient;