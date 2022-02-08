import '../header.css';
import loupe from '../assets/loupe.svg';

function SearchBar({term, handleChange, handleSearch}) {

    const pressEnter = (e) => {
        if(e.keyCode === 13){
            e.preventDefault();
            handleSearch();
        }
    }

    return ( 
        <div className='searchbar'>
            <input value={term} onChange={(e) => handleChange(e.target.value)} onKeyUp={pressEnter}/>
            <img src={loupe} onClick={handleSearch} />
        </div>
     );
}

export default SearchBar;