import { combineReducers, createStore, applyMiddleware } from "redux";

import thunk from "redux-thunk";
import user from './auth';


const store = createStore(
    combineReducers({ user }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

export default store;