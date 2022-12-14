import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoryReducer, charactersReducer, profileReducer } from './reducers';


const rootReducer = combineReducers ({
    characters: charactersReducer,
    category: categoryReducer,
    profile: profileReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));