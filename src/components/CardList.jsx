import Card from "./Card";
import '../main.css';


function CardList({recipes, handleLike, isLiked}) {
console.log(recipes.length);
    return ( 
        <div className="cards">
        {recipes.map(recipe => <Card recipe={recipe} key={recipe.index} handleLike={handleLike} isLiked={isLiked}/>)}
        </div>
     );
}

export default CardList;