import React, { useReducer } from 'react';
import { recipeReducer, initialState } from './Reducers/mainReducer';
import RecipeForm from './Components/RecipeForm/recipeForm';
import RecipeList from './Components/RecipeList/recipeList';
import SearchBar from './Components/SearchBar/searchBar';
import './App.css';

function App() {
  const [state, dispatch] = useReducer(recipeReducer, initialState);

  const filteredRecipes = state.showFavorites
    ? state.recipes.filter((recipe) => recipe.isFavourite)
    : state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchQuery?.toLowerCase() || '')
      );

  const sortedRecipes = [...filteredRecipes].sort((a, b) => b.isFavourite - a.isFavourite);

  return (
    <div>
      <h1>Recipes List</h1>
      <div className='header'>
        <SearchBar dispatch={dispatch} />

        <button className='showFav' onClick={() => dispatch({ type: 'TOGGLE_SHOW_FAVORITES' })}>
          {state.showFavorites ? 'Show All Recipes' : 'Show Only Favorites'}
        </button><br/><br/>

        <RecipeForm dispatch={dispatch} form={state.form} />

      </div><br/>

      <div className='main'>
        <RecipeList recipes={sortedRecipes} dispatch={dispatch} />
      </div>

    </div>
  );
}

export default App;
