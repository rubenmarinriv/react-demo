import { SET_ORDER, SET_CONTENT } from '../action-types';

const rootReducer = (state = {
  order: 'asc',
  content: [],
}, action) => {
  switch (action.type) {
    case SET_ORDER:
      return {
        ...state,
        order: action.order,
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
