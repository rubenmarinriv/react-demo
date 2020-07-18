import {
  SET_ORDER, SET_GENRE, SET_TYPE, SET_SEARCH, SET_CONTENT,
} from '../action-types';

const rootReducer = (state = {
  order: 'asc',
  genre: '',
  type: '',
  search: '',
  content: [],
}, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.order,
      };
    case SET_GENRE:
      return {
        ...state,
        genre: action.genre,
      };
    case SET_TYPE:
      return {
        ...state,
        type: action.contentType,
      };
    case SET_SEARCH:
      return {
        ...state,
        search: action.search,
      };
    case SET_CONTENT:
      return {
        ...state,
        content: [...state.content, ...action.content],
      };
    default:
      return state;
  }
};

export default rootReducer;
