//array for storing events
var eventsCollection       = [];

var eventId                = 0;
//array for storing clients
var clientsCollection      = [];

//variable for the number of events a client attends
var eventsNumber           = 0;

//boolean for the system closing
var closedSystem           = false;

//making a constructor function for Event
function EventConstructor(name, flag=false, price=0){

    this.id                = eventId++;
    this.name              = name;
    this.flag              = flag;
    this.clientsCollection = [];
    this.price             = price;
    
    this.date              = new Date().toDateString();
}

//making a constructor function for Client
function ClientConstructor(clientName, gender, age, money = 0){  
    this.clientName   = clientName;
    this.gender       = gender;
    this.age          = age;
    this.money        = money;
    this.eventsNumber = 0;
}

//function for listing events
function listEvents(){
    for (let e of eventsCollection) {
        if(e.flag == true){
            if (e.price) { console.log(`$ ${e.name}: +18 price: ${e.price}lv. date: ${e.date}`) }

            if (!e.price) { console.log(`! ${e.name}: +18 price: ${e.price}lv. date: ${e.date}`) }
        } 
        else{
            if (e.price) { console.log(`$ ${e.name}: No age restriction price: ${e.price}lv. date: ${e.date}`) }

            if (!e.price) { console.log(`! ${e.name}: No age restriction price: ${e.price}lv. date: ${e.date}`) }
        } 
    }
}


//function for deleting Event with id
function deleteEvent(id)
{
    for (let e of eventsCollection) {
        if (e.id == id) {
         eventsCollection.splice(eventsCollection.indexOf(e),1);
         console.log(`Delete event with name ${e.name}`);   
        }
    }
}


//function for creating an event
function createEvent(name, flag, price){
    if (closedSystem) {
        console.log("The system has been closed for adding events");
    }
    if(!closedSystem){
        if (name == null) {
            throw new Error("There is no name defined");
        }
        if (!flag) {
            var event = new EventConstructor(name, true, price)
        }
        if (flag) {
            event = new EventConstructor(name, false, price)
        }
        eventsCollection.push(event);

        return event;
    }
}

//function for updating an event
function updateEvent(id, name, flag, price = 0){

    let index = eventsCollection.findIndex(event => event.id == id);

    console.log(`Event ${eventsCollection[index].name} was updated`);

    eventsCollection[index].name  = name;
    eventsCollection[index].flag  = flag;
    eventsCollection[index].price = price;
    return true;
}

//adding a client to an event
function addClientToEvent(client, event){
    const MIN_AGE = 18;

    if (closedSystem) {
        console.log("The system is closed")
    }
    if (!closedSystem){
        if (client.age < MIN_AGE && event.flag == true) {       
                console.log("This event is for +18");
                
                return false;
        }
        else{
            if (client.money >= event.price) {
                event.clientsCollection.push(client);
                client.eventsNumber++;
                client.money -= event.price;
                console.log(`The client ${client.clientName} was added to ${event.name} and has ${client.money}lv left`);
            }
            if (client.money < event.price) {
                console.log(`${client.clientName} you dont have enough money GTFO!!!`);
            }
        }
    }
}

//getting clients by event and filtering them by gender
function getClientsByEvent(event, filter){
    
    console.log(`Clients in this ${event.name} event are:`)
        
        for (let clnt of event.clientsCollection) {
            
            if(filter && clnt.gender == filter){
                
                console.log(`We have ${clnt.clientName}`);

            }

        }
}


//removing a client from an existing event
function removeClientFromEvent(client, event){
    
    i=event.clientsCollection.indexOf(client); 
    
    event.clientsCollection.splice(i, 1);
    
    console.log(`You have removed ${client.clientName} from ${event.name}!`);
}

//function for closing the system
function systemClosed(){
    closedSystem          = !closedSystem;
}

//function for listing the biggest event
function listBiggestEvent(){

    var mostPeopleInEvent = 0;

    eventsCollection.forEach(event =>{
        if (event.clientsCollection.length > mostPeopleInEvent) {
            mostPeopleInEvent = event.clientsCollection.length;
        }
    });

    if (mostPeopleInEvent == 0) {
        console.log("No party tonight");
        return false;
    }

    const allEventsWithPeople = eventsCollection.filter(event => event.clientsCollection.length == mostPeopleInEvent);

    console.log("Event with the most people: ");

    allEventsWithPeople.forEach(event => {
        console.log(`${event.name} with ${event.clientsCollection.length} people`);
    });
}

//function for showing the events that arent age restricted
function listEventsWithoutRestrcition(){
    for (let e of eventsCollection) {
        if (!e.flag) { console.log(`The event ${e.name} is not restricted`); }   
    }
}

//function for showing the events with prefix
function listEventsWithPrefix(){
    for (let e of eventsCollection) {
        if (e.flag) { console.log(`* ${e.name}`); }
        if (!e.flag){ console.log(`# ${e.name}`); }
    }
}

//function for filtering events by name 
function filterByName(name){

    for (let e of eventsCollection) {
        
        if (e.name == name) { console.log(`The event filtered by name is ${e.name}`) }

    }
}
//function for displaying event by flag
function listEventsByFlag(flag){
    
    console.log("The events are: ")

    for (let e of eventsCollection) {

        if (e.flag == flag) { console.log(e.name); }

    }
}

//function to see if the client is vip
function isVIP(){
    return eventsNumber % 5 == 0;
}

//initializing events and pushing them to the events array
var event1  = new EventConstructor("Pijamas party Bushido", true, 10);
var event2  = new EventConstructor("Teen party Onyx", false, 15);
var event3  = new EventConstructor("Travis Scott party Pasha", false, 5);
eventsCollection.push(event1,event2,event3);

//initializing clients
var client1 = new ClientConstructor("Geogri Georgiev", true, 19);
var client2 = new ClientConstructor("Anita Chausheva", false, 18, 10);
var client3 = new ClientConstructor("Mersin Hasan",true,20, 50);
var client4 = new ClientConstructor("Vladimira Kamenova", false, 11, 40);

//testing the functions
listEvents();

deleteEvent(0);

createEvent("Eminem concert", true);

updateEvent(1,"Dababy nigga", true);

listEvents();

addClientToEvent(client4,event3);
addClientToEvent(client3,event3);
addClientToEvent(client2,event2);
addClientToEvent(client1,event2);

systemClosed();

createEvent("Pop smoke W", true);


getClientsByEvent(event3,true);

removeClientFromEvent(client3, event3);

listBiggestEvent();

listEventsWithoutRestrcition();

listEventsWithPrefix();

filterByName("Dababy nigga");

listEventsByFlag(false);