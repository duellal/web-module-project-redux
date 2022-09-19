import { TOGGLE_FAVORITES, ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions"

const initialFavState = {
   favorites: [],
   displayFavorites: false
}

const favoriteMovieReducer = (state = initialFavState, action) => {
   switch (action.type) {
      case TOGGLE_FAVORITES:
         return ({
            ...state,
            displayFavorites: !state.displayFavorites
         })
      case ADD_FAVORITE:
         if (state.favorites.includes(action.payload)) {
            return (state)
         }
         else {
            return ({
               ...state,
               favorites: [...state.favorites, action.payload]
            })
         }
      case REMOVE_FAVORITE:
         return ({
            ...state,
            favorites: state.favorites.filter((item) => {
               return action.payload !== item.id
            })
         })
      default:
         return state
   }
}

export default favoriteMovieReducer