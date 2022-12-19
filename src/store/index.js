import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { categoryReducer, charactersReducer, profileReducer, notifReducer, authReducer } from './reducers';


const rootReducer = combineReducers ({
    characters: charactersReducer,
    category: categoryReducer,
    profile: profileReducer,
    notifs: notifReducer,
    auth: authReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));