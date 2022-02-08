import '../main.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons'

function Like({handleLike, isLiked}) {

    // console.log(isLiked);


    return ( 
        <div className="like">
            <FontAwesomeIcon icon={faHeart} className="heart" onClick={handleLike} style={isLiked ? {color: '#FBB040'} : {color: '#FFF'}}>
            </FontAwesomeIcon>
        </div>
     );
}

export default Like;