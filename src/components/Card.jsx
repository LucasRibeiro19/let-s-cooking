import '../main.css';
import Like from './Like';


function Card({recipe}) {
    const {label} = recipe.recipe;
    const {image} = recipe.recipe;
    return ( 
        <div className="card" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
            <Like />
            <h6>{label}</h6>
        </div>
     );
}

export default Card;