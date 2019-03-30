
// FIXME: use require syntax
import { createStore } from 'redux'
const rootReducer = require('./reducers/rootReducer');

const initialState = {};

export default createStore(rootReducer, initialState);

