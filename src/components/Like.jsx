import { useState } from 'react';
import '../main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Like() {
    const [like, setLike] =useState(false);
    
    const handleLike = () => {
        like ? setLike(false) : setLike(true);
    }
      


    return ( 
        <div className="like" >
            <FontAwesomeIcon icon={faHeart} className="heart" onClick={handleLike} style={like ? {color: '#FBB040'} : {color: '#FFF'}}>
            </FontAwesomeIcon>
        </div>
     );
}

export default Like;