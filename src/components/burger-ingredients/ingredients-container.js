import Ingredient from './ingredient'

const IngredientsContainer  = ({ data, name }) => {
    
    return(
        <div>
            <h2>{name}</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap'}}>
                {data.map(item => <Ingredient key={item._id} item={item} />)}
            </div>
        </div>
    );
}

export default IngredientsContainer;