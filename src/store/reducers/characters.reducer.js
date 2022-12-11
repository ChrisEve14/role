import { charactersTypes } from '../types';
import { CHARACTERS } from '../../constants/data';

const { FILTER_CHARACTERS, SELECT_CHARACTER } = charactersTypes;
const initialState = {
    characters: CHARACTERS,
    filteredCharacters: [],
    selected: null,
}

const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CHARACTER:
            return {
                ...state,
                selected: state.characters.find((character) => character.id === action.characterId),
            };
        case FILTER_CHARACTERS:
            return {
                ...state,
                filteredCharacters: state.characters.filter((character) => character.categoryId === action.categoryId),
            }
        default:
            return state;
    };
}


export default charactersReducer;