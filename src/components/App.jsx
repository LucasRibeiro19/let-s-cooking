import '../App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Router } from 'react-router';
import Header from './Header';
import Main from './Main';
import logo from '../assets/logo.png';


function App() {
  const [like, setLike] =useState(false);
  const [recipe, setRecipe] = useState({
    term: "",
    recipes: []
  });
  
  const handleChange = (term) => {
    const newTerm = {...recipe, term};
    setRecipe(newTerm);
  }
  
  
  
  const handleLike = (e) => {
    like ? setLike(false) : setLike(true);
  }
  
  
  
  useEffect(()=>{
    const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${recipe.term}&app_id=3306b723&app_key=5d98c99e86747576b98327f9d7c5e130&ingr=6`;

    const fetchRandom = async () =>{
      const {data : {hits}}= await axios.get(endpoint);
      setRecipe({...recipe, recipes: hits})
    }

    fetchRandom();

  },[recipe.term]);


  return (
    <>
      <Header logo={logo} term={recipe.term} handleChange={handleChange}/>
      <Main 
      recipes={recipe.recipes}
      handleLike={handleLike}
      isLiked={like}
      />
    </>
  );
}

export default App;
