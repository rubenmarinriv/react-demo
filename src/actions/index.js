// Redux actions
import {
  SET_ORDER, SET_GENRE, SET_TYPE, SET_SEARCH, SET_CONTENT, SET_RATING,
} from '../action-types';

const setOrder = (order) => ({ type: SET_ORDER, order });

const setSearch = (search) => ({ type: SET_SEARCH, search });

const setGenre = (genre) => ({ type: SET_GENRE, genre });

const setType = (contentType) => ({ type: SET_TYPE, contentType });

const setContent = (content) => ({ type: SET_CONTENT, content });

const setRating = (rating, id) => ({ type: SET_RATING, rating, id });

export {
  setOrder, setGenre, setType, setSearch, setContent, setRating,
};
