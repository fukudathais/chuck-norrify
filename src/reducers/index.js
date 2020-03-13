import { jokeReducer } from './jokeReducer';
import { combineReducers } from 'redux';

export const Reducers = combineReducers({
    clickState: jokeReducer
});