import '../header.css';
import loupe from '../assets/loupe.svg';

function SearchBar({term, handleChange}) {

    
    return ( 
        <div className='searchbar'>
            <input value={term} onChange={(e) => handleChange(e.target.value)}/>
            <img src={loupe}/>
        </div>
     );
}

export default SearchBar;