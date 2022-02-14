import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import '../recipe.css'


function Recipe({logo, term, handleChange, handleSearch}) {
    const params = useParams();

    return ( 
        <>
            <Header logo={logo} term={term} handleChange={handleChange} handleSearch={handleSearch}/>
            <Link to="/"  style={{ textDecoration: 'none', color: '#FBB040'}}>
                <div className="back-btn">
                    <p>&lsaquo; Back</p>
                </div>
            </Link>

            <h2>{params.idrecipe}</h2>
        </>
     );
}

export default Recipe;