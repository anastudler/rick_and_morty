import {
  ADD_FAVORITE,
  DELETE_FAVORITE,
  GET_FAVS,
  FILTER,
  ORDER,
} from "./action-types";

const initialState = {
  myFavorites: [],
  allCharacters: [],
  errors: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
        errors: {},
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: action.payload,
        errors: {},
      };
    case GET_FAVS: {
      return {
        ...state,
        myFavorites: action.payload,
        allCharacters: action.payload,
        errors: {},
      };
    }
    case FILTER:
      const { allCharacters } = state;
      const allCharsFiltered = allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: allCharsFiltered,
      };
    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "Ascendente"
            ? allCharacters.sort((a, b) => a.id < b.id)
            : allCharacters.sort((a, b) => a.id > b.id),
      };
    case "ERROR": {
      return {
        ...state,
        errors: action.payload,
      };
    }

    default:
      return { ...state };
  }
};

export default reducer;
