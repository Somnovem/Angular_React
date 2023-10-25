import dispatcher from "../dispatcher/dispatcher";
import {EventEmitter} from 'events'

const CHANGE_EVENT = 'CHANGE';

const events = [{
    id: 1,
    name: 'Event 1',
    location: 'Location 1',
    type: 'Cinema'
}];

export const EventStore = Object.assign({},EventEmitter.prototype,{
    getEvents: () => events,
    emitChange: () => EventStore.emit(CHANGE_EVENT),
    addChangeListener: (callback) => EventStore.on(CHANGE_EVENT,callback),
    removeChangeListener: (callback) => EventStore.removeListener(CHANGE_EVENT,callback)
})

dispatcher.register((action)=>  {
    switch (action.actionType){
        case 'ADD_EVENT':
            events.push(action.event);
            EventStore.emitChange();
            break;
        case 'DELETE_EVENT':
            const eventId = action.eventId;
            const eventIndexToDelete = events.findIndex((event) => event.id === eventId);
            if (eventIndexToDelete !== -1) {
                events.splice(eventIndexToDelete,1);
                EventStore.emitChange();
            }
            break;
        case 'UPDATE_EVENT':
            const updatedEvent = action.event;
            const eventIndexToUpdate = events.findIndex((event) => event.id === updatedEvent.id);
            if (eventIndexToUpdate !== -1) {
                events[eventIndexToUpdate] = updatedEvent;
                EventStore.emitChange();
            }
            break;
    }
});