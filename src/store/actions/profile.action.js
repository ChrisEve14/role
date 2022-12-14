
import { profileTypes } from "../types";

const { ADD_TO_PROFILE, REMOVE_FROM_PROFILE, CONFIRM_ADDITION} = profileTypes;

export const addToProfile = (item) => ({
    type: ADD_TO_PROFILE,
    item,
});


export const removeFromProfile = (id) => ({
    type: REMOVE_FROM_PROFILE,
    id,
});

export const confirmAddition = (addition) => ({
    type: CONFIRM_ADDITION,
    addition,
});