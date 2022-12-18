import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoryReducer, charactersReducer, profileReducer, notifReducer } from './reducers';


const rootReducer = combineReducers ({
    characters: charactersReducer,
    category: categoryReducer,
    profile: profileReducer,
    notifs: notifReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));