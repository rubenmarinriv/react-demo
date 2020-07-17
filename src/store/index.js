import { createStore } from 'redux';
import content from '../reducers';

const store = createStore(content);

export default store;
