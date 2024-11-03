export const initialState = {
  recipes: [
    {
      id: 1,
      title: "Burger",
      text: "Ingredients:\n - Ground beef (450g)\n - Salt, pepper\n - 4 buns, cheese (optional)\n - Lettuce, tomato, pickles, onion\n - Ketchup, mustard, mayo\n\nInstructions:\n - Shape beef into 4 patties, season with salt and pepper.\n - Cook patties 3-4 mins per side; add cheese if desired.\n - Toast buns, then layer with sauces, toppings, and patty.\n - Enjoy!",
      img: "https://img.freepik.com/premium-zdjecie/pyszny-hamburger-na-bialym-tle-swiezy-hamburger-z-wolowina-i-serem_1109627-533.jpg?semt=ais_hybrid",
      isFavourite: false,
      isHovered: false
    },
    {
      id: 2,
      title: "Pepperoni Pizza",
      text: "Ingredients:\nPizza dough (store-bought or homemade)\n1/2 cup pizza sauce\n1 1/2 cups shredded mozzarella cheese\nPepperoni slices\nOlive oil\n\nInstructions:\nPreheat oven to 475°F (245°C).\nSpread pizza sauce on dough, sprinkle cheese, and add pepperoni.\nDrizzle with olive oil, bake for 10-12 minutes until crust is golden and cheese is melted.\nSlice and enjoy hot!",
      img: "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/160256/Sally_s-Apizza-Pizzas-2.8.22-54-72ppi-1x1.jpg?ixlib=react-9.9.0&ar=1%3A1&fit=crop&w=3840&auto=format",
      isFavourite: false,
      isHovered: false
    },
    {
      id: 3,
      title: "Hot Dog",
      text: "Ingredients:\nHot dog buns\nSausages\nMustard, ketchup\nOnions, pickles, or relish (optional)\n\nInstructions:\nHeat the sausages in boiling water or grill them until fully cooked.\nPlace each sausage in a hot dog bun.\nAdd mustard and ketchup to taste.\nTop with onions, pickles, or relish, if desired.\nEnjoy!",
      img: "https://dormroomcook.com/wp-content/uploads/2020/07/Microwave-Hot-Dogs-1x1-1.jpg",
      isFavourite: false,
      isHovered: false
  }  
  ],
  showFavorites: false,
  form: {
    title: '',
    text: '',
    img: ''
  }
};

export function recipeReducer(state, action) {
  switch (action.type) {
      case 'ADD_RECIPE':
          const newRecipe = {
              id: Date.now(),
              title: state.form.title,
              text: state.form.text,
              img: state.form.img,
              isFavourite: false,
              isHovered: false,
          };
          return { ...state, recipes: [...state.recipes, newRecipe], form: { title: '', text: '', img: '' } };

      case 'REMOVE_RECIPE':
          return {
              ...state,
              recipes: state.recipes.filter((recipe) => recipe.id !== action.payload),
          };

      case 'TOGGLE_FAVORITE':
          return {
              ...state,
              recipes: state.recipes.map((recipe) =>
                  recipe.id === action.payload ? { ...recipe, isFavourite: !recipe.isFavourite } : recipe
              ),
          };

      case 'SET_HOVER':
          return {
              ...state,
              recipes: state.recipes.map((recipe) =>
                  recipe.id === action.payload ? { ...recipe, isHovered: true } : recipe
              ),
          };

      case 'REMOVE_HOVER':
          return {
              ...state,
              recipes: state.recipes.map((recipe) =>
                  recipe.id === action.payload ? { ...recipe, isHovered: false } : recipe
              ),
          };

      case 'TOGGLE_SHOW_FAVORITES':
          return { ...state, showFavorites: !state.showFavorites };

      case 'SEARCH_RECIPE':
          return { ...state, searchQuery: action.payload };

      case 'UPDATE_FORM':
          return { ...state, form: { ...state.form, [action.field]: action.value } };

      default:
          return state;
  }
}
