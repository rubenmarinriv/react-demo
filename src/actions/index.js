import { SET_ORDER, SET_SEARCH, SET_CONTENT } from '../action-types';

const setOrder = (order) => ({ type: SET_ORDER, order });

const setSearch = (search) => ({ type: SET_SEARCH, search });

const setContent = (content) => ({ type: SET_CONTENT, content });

export { setOrder, setSearch, setContent };
