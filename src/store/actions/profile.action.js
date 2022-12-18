
import { URL_BASE } from "../../constants/firebase";
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

export const confirmedProfile = (items) => {
    return async (dispatch) => {
        try {
          const response = await fetch(`${URL_BASE}/notes.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              date: Date.now(),
              items,
            }),
          });
    
          const result = await response.json();
    
          dispatch({
            type: CONFIRM_ADDITION,
            result,
          });
        } catch (error) {
          dispatch({
            type: CONFIRM_ADDITION,
            error,
          });
        }
      };
};




