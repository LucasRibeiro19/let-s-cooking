import '../header.css';
import { Outlet } from 'react-router-dom';
import Logo from './Logo';
import Searchbar from './Searchbar';

function Header ({logo, term, handleChange, handleSearch}) {

    return ( 
        <header>
            <Logo logo={logo}/>
            <Searchbar term={term} handleChange={handleChange} handleSearch={handleSearch}/>
            <Outlet/>
        </header>
     );
}

export default Header ;