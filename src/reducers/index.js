import STORE_CONTENT from '../action-types';

function content(state = [], action) {
  switch (action.type) {
    case STORE_CONTENT:
      return [...state, ...action.payload];
    default:
      return state;
  }
}

export default content;
