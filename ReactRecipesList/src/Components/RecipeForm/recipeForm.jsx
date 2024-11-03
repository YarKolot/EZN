import React from 'react';
import './recipeForm.css';

function RecipeForm({ dispatch, form }) {
  const handleInputChange = (e) => {
    dispatch({
      type: 'UPDATE_FORM',
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleAddRecipe = () => {
    if (form.title && form.text) {
      dispatch({ type: 'ADD_RECIPE' });
    }
  };

  return (
    <>
      <input
        type="text"
        name="title"
        className='title'
        placeholder="Recipe Title"
        value={form.title}
        onChange={handleInputChange}
      /><br/>
      <textarea
        name="text"
        className='text'
        placeholder="Recipe Description"
        value={form.text}
        onChange={handleInputChange}
        rows="4"
      /><br/>
      <input
        type="text"
        name="img"
        className='img'
        placeholder="Image URL"
        value={form.img}
        onChange={handleInputChange}
      />
      <button onClick={handleAddRecipe} className='but'>Add Recipe</button>
    </>
  );
}

export default RecipeForm;
