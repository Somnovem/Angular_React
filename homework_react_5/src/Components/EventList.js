import {Component} from "react";
import {EventStore} from "../flux/EventsFlux/store";
import {EventActions} from "../flux/EventsFlux/actions";

class EventList extends Component {
    constructor() {
        super();
        this.state = {
            events: EventStore.getEvents(),
            newEventName: '',
            newEventType:'',
            newEventLocation:'',
            reviewEventId: 1,
            reviewEventText: '',
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

    handleAddEvent = (e) => {
        e.preventDefault();
        EventActions.addEvent({
            id: Math.floor(Math.random()*(1000-1)+2),
            name:this.state.newEventName,
            type:this.state.newEventType,
            location:this.state.newEventLocation,
        })
    }

    handleAddReview = (e) => {
        e.preventDefault();
        EventActions.addReview({
            id: Math.floor((Math.random()*1000)+1),
            eventId: this.state.reviewEventId,
            text: this.state.reviewEventText
        });
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
            <form onSubmit={this.handleAddEvent}>
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
                <button  type={"submit"} style={{margin:'10px'}}>Add Event</button>
            </form>
            <hr/>
            <br/>
            <form onSubmit={this.handleAddReview}>
                <label style={{display:'block'}}>
                    Event Id:
                    <input style={{marginLeft:'20px'}} type="number" value={this.state.reviewEventId} onChange={event => this.setState({reviewEventId: event.target.value})}/>
                </label>
                <label style={{display:'block'}}>
                    Review Text:
                    <input style={{marginLeft:'20px'}} type="text" value={this.state.reviewEventText} onChange={event => this.setState({reviewEventText: event.target.value})}/>
                </label>
                <button type='submit'>Add Review</button>
            </form>
            <br/>
            <hr/>
            <h2>All events: </h2>
            <ul>
                {
                    events.map((item) => (
                        <li key={item.id}>
                            <h4>Id: {item.id}</h4>
                            <p>Event name: {item.name}</p>
                            {
                                item.id === this.state.selectedEvent && <div>
                                    <p>Event type: {item.type}</p>
                                    <p>Event location: {item.location}</p>
                                    {
                                        item.reviews !== undefined && item.reviews.length !== 0  && <ul>
                                            {item.reviews.slice(0,3).map((review,index) => (
                                                <li key={index}>{review}</li>
                                            ))}
                                        </ul>
                                    }
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