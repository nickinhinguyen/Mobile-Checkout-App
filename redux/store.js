import { createStore } from 'redux';
import reducer from './reducer.js';

const initialState = {
    cart:[],
    itemCount: 0
};
export default createStore(reducer, initialState);