import styles from "./burger-ingredients.module.css";

const Ingredient = ({item}) =>{
    return (<div style={{border: '1px solid #ccc', margin: '5px', padding: '10px', background: '#282c34', width: 200, height: 200}}>
        <img src={item.image} alt={item.name} style={{ maxWidth: '100px', maxHeight: '100px' }} />
        <p>{item.name}</p>
        <p>Price: {item.price}</p>
        </div>);
}

export default Ingredient;