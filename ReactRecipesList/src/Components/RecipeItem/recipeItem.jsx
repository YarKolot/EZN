import React from 'react';
import './recipeItem.css';

function RecipeItem({ recipe, dispatch }) {
  return (
    <div className='item_div'>
      <h2>{recipe.title}</h2>
      <p>{recipe.text.split('\n').map((line, index) => (
        <span key={index}>
          {line}
          <br />
        </span>
      ))}</p>
      {recipe.img && <img src={recipe.img} alt={recipe.title} style={{ width: "100%", marginTop: "auto", borderRadius: "5px" }} />}

      <div className='buts'>
        <button onClick={() => dispatch({ type: 'REMOVE_RECIPE', payload: recipe.id })} className='del'>
          Delete
        </button>

        <button
          className='fav'
          style={{
            backgroundColor: recipe.isHovered
              ? (recipe.isFavourite ? '#ff6666' : '#222')
              : (recipe.isFavourite ? '#f54242' : 'black')
          }}
          onMouseEnter={() => dispatch({ type: 'SET_HOVER', payload: recipe.id })}
          onMouseLeave={() => dispatch({ type: 'REMOVE_HOVER', payload: recipe.id })}
          onClick={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: recipe.id })}
        >
          {recipe.isFavourite ? 'Unfavourite' : 'Favourite'}
        </button>
      </div>
    </div>
  );
}

export default RecipeItem;
