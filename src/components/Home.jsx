import Header from "./Header";
import Main from "./Main";

function Home({logo, term, handleChange,handleSearch, recipes}) {
    return ( 
        <>
            <Header logo={logo} term={term} handleChange={handleChange} handleSearch={handleSearch}/>
            <Main recipes={recipes}/>
        </>
     );
}

export default Home;