
const IngredientDetails = ({item}) => {
    return(<div style={{display: 'flex',  flexDirection: 'column', alignItems: 'center'}}>
       <div>
            <img src={item.image}/>
       </div>
       <p className="text text_type_main-medium">{item.name}</p>
       <div className="text text_type_main-small" style={{display: 'flex',  flexDirection: 'row'}}>
            <div style={{display: 'flex',  flexDirection: 'column', alignItems: 'center', margin: 15}}>
                <p>Каллории,калл</p>
                <p>{item.calories}</p>
            </div>
            <div style={{display: 'flex',  flexDirection: 'column', alignItems: 'center', margin: 15}}>
                <p>Белки,г</p>
                <p>{item.proteins}</p>
            </div>
            <div style={{display: 'flex',  flexDirection: 'column', alignItems: 'center', margin: 15}}>
                <p>Жиры,г</p>
                <p>{item.fat}</p>
            </div>
            <div style={{display: 'flex',  flexDirection: 'column', alignItems: 'center', margin: 15}}>
                <p>Углеводы,г</p>
                <p>{item.carbohydrates}</p>
            </div>
       </div>
        </div>);
}

export default IngredientDetails; 