import Tags from './Tags';
import CardList from './CardList';
import '../main.css';

function Main({recipes, isActive, handleLike, isLiked}) {
    return ( 
        <>
            <main>
                <Tags isActive={isActive}/>
                <CardList recipes={recipes} handleLike={handleLike} isLiked={isLiked}/>
            </main>
        </>
     );
}

export default Main;