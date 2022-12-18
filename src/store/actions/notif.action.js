import { URL_BASE } from "../../constants/firebase";
import { notifTypes } from "../../store/types";

const { GET_NOTIF, DELETE_NOTIF } = notifTypes;

export const getNotif = () => {
    return async (dispatch) => {
        try{
            const response = await fetch(`${URL_BASE}/notes.json`, {
                method: 'GET',
                headers: { 
                    'Content-Type': 'application/json',
                },
            });

            const data = await response.json();

            const notifs = Object.keys(data).map((key) => ({
                ...data[key],
                id: key,
            }));

            dispatch({
                type: GET_NOTIF,
                notifs,
            });

        } catch (error) {
            console.log(error);
        }
    }
}


export const deleteNotif = (id) => {
    return async (dispatch) => {
        try {
            const response = await fetch (`${URL_BASE}/notes/${id}.json`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            const data = await response.json();
            console.log(data);

            dispatch({
                type: DELETE_NOTIF,
                id,
            });

        } catch (error) {
            console.log(error);
        }

    }
}
