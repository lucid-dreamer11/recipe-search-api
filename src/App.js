import { useEffect, useState } from "react";
import './App.css';
import icon from "./icons8-search-64.png";
import RecipeSearch from "./RecipeSearch";

function App() {

const MY_ID = "7346cd19";
const MY_KEY = "f7255b3b892cde0a2aa4f6da8412152e";

const [mySearch, setMySearch] = useState("");
const [myRecipes, setMyRecipes] = useState([]);
const [wordSubmitted, setWordSubmitted] = useState("venison");

useEffect (() => {
  const showRecipe = async () => {
  const response = await fetch (`https://api.edamam.com/api/recipes/v2?type=public&q=${wordSubmitted}&app_id=${MY_ID}&app_key=${MY_KEY}`);
  const data = await response.json();
  // console.log(data.hits)
  setMyRecipes(data.hits)
  }
  showRecipe ()
}, [wordSubmitted])

const newRecipeSearch = (e) => {
  // console.log(e.target.value)
  setMySearch(e.target.value)
}
const finalSearch = (e) => {
  e.preventDefault()
  setWordSubmitted(mySearch)
}
  return (
    <div className="App">
      <div className="container">
        <h1>Find your perfect Recipe</h1>
      </div>
      <div className="container field">
        <form onSubmit={finalSearch}>
          <input className="search" placeholder="Search..." onChange={newRecipeSearch} value={mySearch}/>
        </form>
      </div>
      <div className="container">
        <button onClick={finalSearch}>
        <img src={icon} alt="icon"/>
      </button>
      </div>
      {myRecipes.map ((item, index) => (
        <RecipeSearch  key ={index}
          title={item.recipe.label} 
          image ={item.recipe.image} 
          ingredients={item.recipe.ingredientLines}
          instructions={item.recipe.instructionLines} 
        />
      ))}
    </div>
  )
}
export default App;