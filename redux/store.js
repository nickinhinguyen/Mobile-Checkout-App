import { createStore } from 'redux';
import reducer from './reducer.js';

const initialState = {
    cart:[]
};
export default createStore(reducer, initialState);