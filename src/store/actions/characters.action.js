import { charactersTypes } from '../types';


const { FILTER_CHARACTERS, SELECT_CHARACTER } = charactersTypes; 

export const selectCharacter = (id) => ({
    type: SELECT_CHARACTER,
    characterId: id,
});

export const filterCharacters = (id) => ({
    type: FILTER_CHARACTERS,
    categoryId: id,
});