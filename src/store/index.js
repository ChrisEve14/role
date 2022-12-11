import { createStore, combineReducers } from 'redux';
import { categoryReducer, charactersReducer } from './reducers';


const rootReducer = combineReducers ({
    characters: charactersReducer,
    category: categoryReducer,
});

export default createStore(rootReducer);