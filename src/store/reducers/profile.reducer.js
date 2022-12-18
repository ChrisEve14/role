import { profileTypes } from '../types';
const { ADD_TO_PROFILE, REMOVE_FROM_PROFILE, CONFIRM_ADDITION} = profileTypes;

const initialState = {
    items: [],
    loading: false,
    error: null,
};

const profileReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PROFILE:
            let updatedProfile = [];
            if(state.items.find((item)=> item.id === action.item.id)){
                updatedProfile = state.items.map((item) => {
                    if(item.id === action.item.id) item.quantity += 1;
                    return item;
                });
            } else {
                const item = { ...action.item, quantity: 1};
                updatedProfile = [ ...state.items, item];
            }
            return {
                ...state,
                items: updatedProfile,
            };
        case REMOVE_FROM_PROFILE:
            const filteredProfile = state.items.filter((item) => item.id !== action.id);
            return {
                ...state,
                items: filteredProfile,
            };

        case CONFIRM_ADDITION:
            if (action.result) {
                return {
                  ...state,
                  items: [],
                };
              }
              return {
                ...state,
                error: action.error,
              };

        default:       
            return state;
        };
};


export default profileReducer;
