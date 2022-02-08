import '../header.css';
import Logo from './Logo';
import Searchbar from './Searchbar';

function Header ({logo, term, handleChange}) {

    return ( 
        <header>
            <Logo logo={logo}/>
            <Searchbar term={term} handleChange={handleChange}/>
        </header>
     );
}

export default Header ;