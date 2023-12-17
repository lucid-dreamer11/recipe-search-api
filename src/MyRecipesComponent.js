import ReactCardFlip from "react-card-flip";
import { useState } from "react";

function MyRecipesComponents({ title, image, ingredients, instructions }) {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className="recipe">
      <div className="container">
        <h2>{title}</h2>
      </div>
      <div className="container">
        <img src={image} alt="recipe" />
      </div>
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div className="container list" onClick={handleClick}>
          <h3>Ingredients</h3>
          {ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </div>
        <div className="container method" onClick={handleClick}>
          <h3>Method</h3>
          <ol>
            {instructions.map((instruction, index) => (
              <li key={index}>{instruction}</li>
            ))}
          </ol>
        </div>
      </ReactCardFlip>
      <div className="container">
        <button className="flip-button" onClick={handleClick}>
          Click for Method
        </button>
      </div>
    </div>
  );
}
export default MyRecipesComponents;






