import dispatcher from "../dispatcher/dispatcher";

export const EventActions = {
    addEvent: (event) => {
        dispatcher.dispatch({
            actionType: 'ADD_EVENT',event
        });
    },
    deleteEvent: (eventId) => {
        dispatcher.dispatch({
            actionType: 'DELETE_EVENT',eventId
        });
    },
    updateEvent: (event) => {
        dispatcher.dispatch({
            actionType: 'UPDATE_EVENT',event
        });
    }
};