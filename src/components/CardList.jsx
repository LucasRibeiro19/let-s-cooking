import Card from "./Card";
import '../main.css';


function CardList({recipes}) {
    return ( 
        <div className="cards">
        {recipes.map((recipe,index) => (
            <Card 
                recipe={recipe} 
                key={index} 
            />
        ))}
        </div>
     );
}

export default CardList;