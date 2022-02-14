import '../main.css';
import Like from './Like';
import { Link } from 'react-router-dom';


function Card({recipe}) {
    const {label} = recipe.recipe;
    const {image} = recipe.recipe;
    return ( 
        <Link to={`/recipe/${label}`} >
            <div className="card" style={{backgroundImage: `url(${image})`, backgroundSize: 'cover'}}>
                <Like />
                <h6>{label}</h6>
            </div>
        </Link>
     );
}

export default Card;