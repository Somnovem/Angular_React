import {Component} from "react";
import {EventStore} from "../store/eventStore";
import {EventActions} from "../actions/actionTypes";

class EventList extends Component {
    constructor() {
        super();
        this.state = {
            events: EventStore.getEvents(),
            newEventName: '',
            newEventType:'',
            newEventLocation:'',
            selectedEvent: null,
            favouriteEvents: []
        }
    }

    componentDidMount() {
        EventStore.addChangeListener(this.handleStoreChange);
    }

    componentWillUnmount() {
        EventStore.removeChangeListener(this.handleStoreChange);
    }

    handleStoreChange = () => {
        this.setState({events: EventStore.getEvents()})
    }

    handleAddEvent = () => {
        EventActions.addEvent({
            id: Math.floor(Math.random()*(1000-2+1)+2),
            name:this.state.newEventName,
            type:this.state.newEventType,
            location:this.state.newEventLocation
        })
    }

    handleUpdateEvent = (event) => {
        const updatedEvent = {
            id: event.id,
            name:this.state.newEventName,
            type:this.state.newEventType,
            location:this.state.newEventLocation
        }
        EventActions.updateEvent(updatedEvent);
    }

    handleDeleteEvent = (id) => {
        this.setState({favouriteEvents: this.state.favouriteEvents.filter((event) => event.id !== id)});
        EventActions.deleteEvent(id);
    }

    handleSaveEvent = (event) => {
        if (!this.state.favouriteEvents.find(favourite => favourite.id === event.id)) {
            this.setState(previousState => ({favouriteEvents: [...previousState.favouriteEvents,event]}));
        }
        else {
            const unfavouritedEventIndex = this.state.favouriteEvents.findIndex((favourite) => favourite.id === event.id);
            this.setState(() => ({favouriteEvents: this.state.favouriteEvents.filter((_, i) => i !== unfavouritedEventIndex)}));
        }
    }

    handleSelectEvent = (id) => this.setState({selectedEvent:id})

    handleDeselectEvent = () => this.setState({selectedEvent: null})

    render() {
        const {events} = this.state;

        return (<>
            <label style={{display:'block',margin:'10px'}}>
                Event name:
                <input style={{marginLeft:'20px'}} type="text" value={this.state.newEventName} onChange={(event) => {this.setState({newEventName: event.target.value})}}/>
            </label>
            <label style={{display:'block',margin:'10px'}}>
                Event type:
                <input style={{marginLeft:'20px'}} type="text" value={this.state.newEventType} onChange={(event) => {this.setState({newEventType: event.target.value})}}/>
            </label>
            <label style={{display:'block',margin:'10px'}}>
                Event location:
                <input style={{marginLeft:'20px'}} type="text" value={this.state.newEventLocation} onChange={(event) => {this.setState({newEventLocation: event.target.value})}}/>
            </label>
            <button onClick={this.handleAddEvent} style={{margin:'10px'}}>Add Event</button>
            <hr/>
            <h2>All events: </h2>
            <ul>
                {
                    events.map((item) => (
                        <li key={item.id}>
                            <p>Event name: {item.name}</p>
                            {
                                item.id === this.state.selectedEvent && <div>
                                    <p>Event type: {item.type}</p>
                                    <p>Event location: {item.location}</p>
                                </div>
                            }
                            <button onClick={() => this.handleSelectEvent(item.id)}>Select</button>
                            <button onClick={() => this.handleUpdateEvent(item)}>Update</button>
                            <button onClick={() => this.handleDeleteEvent(item.id)}>Delete</button>
                            <button onClick={this.handleDeselectEvent}>Deselect</button>
                            <button onClick={() => this.handleSaveEvent(item)}>Save</button>
                        </li>
                    ))
                }
            </ul>
            <hr/>
            {this.state.favouriteEvents.length !== 0 && <div>
                <h2>Favourite events: </h2>
                <ul>
                    {
                        this.state.favouriteEvents.map((item) => (
                            <li key={item.id}>
                                <p>Event name: {item.name}</p>
                                <p>Event type: {item.type}</p>
                                <p>Event location: {item.location}</p>
                            </li>
                        ))
                    }
                </ul>
            </div>}
        </>)
    }
}

export default EventList;