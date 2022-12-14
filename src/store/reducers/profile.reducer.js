import { profileTypes } from '../types';
const { ADD_TO_PROFILE, REMOVE_FROM_PROFILE, CONFIRM_ADDITION} = profileTypes;

const initialState = {
    characters: [],
};

const profileReducer = ( state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_PROFILE:
            let updatedProfile = [];
            if(state.characters.find((character)=> character.id === action.character.id)){
                updatedProfile = state.characters.map((character) => {
                    if(character.id === action.character.id) character.quantity += 1;
                    return character;
                });
            } else {
                const character = { ...state.character, quantity: 1};
                updatedProfile = [ ...state.characters, character];
            }
            return {
                ...state,
                characters: updatedProfile,
            }
        default:       
            return state;
        }
};

export default profileReducer;
