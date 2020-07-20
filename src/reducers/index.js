// Redux reducers
import _ from 'lodash';
import {
  SET_ORDER, SET_GENRE, SET_TYPE, SET_SEARCH, SET_CONTENT, SET_RATING,
} from '../action-types';

const rootReducer = (state = {
  order: 'asc', // Alphabetically ascending order by default
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
    case SET_RATING: { // Update content rating
      const index = _.findIndex(state.content, { id: action.id });
      const updatedContent = { ...state };
      const currentRating = updatedContent.content[index].rating;
      const currentVotes = updatedContent.content[index].votes;

      updatedContent.content[index].votes += 1;
      updatedContent.content[index].rating = (
        (currentRating * currentVotes) + action.rating
      ) / updatedContent.content[index].votes;

      return updatedContent;
    }
    default:
      return state;
  }
};

export default rootReducer;
