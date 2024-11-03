import React from 'react';
import RecipeItem from '../RecipeItem/recipeItem';
import './recipeList.css';

function RecipeList({ recipes, dispatch }) {
  return (
    <>
      {recipes.length > 0 ? (
        recipes.map((recipe) => (
          <RecipeItem
            key={recipe.id}
            recipe={recipe}
            dispatch={dispatch}
          />
        ))
      ) : (
        <p style={{textAlign: "center"}}>No recipes found</p>
      )}
    </>
  );
}

export default RecipeList;
