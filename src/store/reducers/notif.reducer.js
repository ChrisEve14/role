import { notifTypes } from '../types';

const { GET_NOTIF, DELETE_NOTIF } = notifTypes;

const initialState = {
    list: [],
};

const notifReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case GET_NOTIF:
            return {
                ...state,
                list: action.notifs,
            };
        case DELETE_NOTIF:
            return {
                ...state,
                list: state.list.filter((notif) => notif.id !== action.id),
            }
        default:
            return state;
    };

};

export default notifReducer;