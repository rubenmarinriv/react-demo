import { SET_ORDER, SET_CONTENT } from '../action-types';

const setOrder = (order) => ({ type: SET_ORDER, order });

const setContent = (content) => ({ type: SET_CONTENT, content });

export { setOrder, setContent };
