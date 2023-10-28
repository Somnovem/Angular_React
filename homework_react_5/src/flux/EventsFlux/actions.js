import dispatcher from "../../dispatcher";

export const EventActions = {
    addEvent: (event) => {
        dispatcher.dispatch({
            actionType: 'ADD_EVENT',event
        });
    },
    addReview: (event) => {
        dispatcher.dispatch({
            actionType: 'ADD_REVIEW',event
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