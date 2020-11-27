var EventsManager = {

    chosenEventId     : null,
    eventsCollection  : [],
    clientsCollection : [],

    addEvent : (event)             => {
        return EventsManager.eventsCollection.push(event);
    },

    getEvents : ()                 => {
       return EventsManager.eventsCollection; 
    },

    getEvent : (index)             => {
        return EventsManager.eventsCollection[index];
    },

    setCurrentChosenEventId : (id) => {
        EventsManager.chosenEventId=id;
    },

    getCurrentChosenEventId : ()   => {
        return EventsManager.chosenEventId;
    }

};

const createEvent = (event) =>{
    return {
        name: event.name,
        restriction: event.restriction,
        price: event.price
    };
};