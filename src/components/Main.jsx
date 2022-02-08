import Tags from './Tags';
import CardList from './CardList';
import '../main.css';

function Main({recipes, isActive}) {
    return ( 
        <>
            <main>
                <Tags isActive={isActive}/>
                <CardList recipes={recipes}/>
            </main>
        </>
     );
}

export default Main;