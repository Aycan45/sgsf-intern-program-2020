//array for storing events
var eventsCollection       = [];

var eventId                = 0;
//array for storing clients
var clientsCollection      = [];


//making a constructor function for Event
function EventConstructor(name, flag=false){

    this.id                = eventId++;
    this.name              = name;
    this.flag              = flag;
    this.clientsCollection = [];

}

//making a constructor function for Client
function ClientConstructor(clientName,gender,age){  
    this.clientName = clientName;
    this.gender     = gender;
    this.age        = age;
}

//function for listing events
function listEvents(){
    for (let e of eventsCollection) {
        if(e.flag == true){
            console.log(`${e.name}: +18`)
        } 
        else{
            console.log(`${e.name}: No age restriction`)
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
function createEvent(name,flag){
    if (name == null) {
        throw new Error("There is no name defined");
    }
    if (flag == true) {
        var event = new EventConstructor(name, true)
    }
    else{
        event = new EventConstructor(name, false)
    }
    eventsCollection.push(event);

    return event;
}

//function for updating an event
function updateEvent(id, name, flag){

    let index = eventsCollection.findIndex(event => event.id == id);

    console.log(`Event ${eventsCollection[index].name} was updated`);

    eventsCollection[index].name = name;
    eventsCollection[index].flag = flag;
    return true;
}

//adding a client to an event
function addClientToEvent(client, event){

   const MIN_AGE = 18; 
   if (client.age < MIN_AGE && event.flag == true) {       
        console.log("This event is for +18");
        
        return false;
   }
   
   event.clientsCollection.push(client);

   console.log(`The client ${client.clientName} was added to ${event.name}`);
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

//initializing events and pushing them to the events array
var event1  = new EventConstructor("Pijamas party Bushido", true);
var event2  = new EventConstructor("Teen party Onyx", false);
var event3  = new EventConstructor("Travis Scott party Pasha", false);
eventsCollection.push(event1,event2,event3);

//initializing clients
var client1 = new ClientConstructor("Geogri Georgiev", true, 19);
var client2 = new ClientConstructor("Anita Chausheva", false, 18);
var client3 = new ClientConstructor("Mersin Hasan",true,20);
var client4 = new ClientConstructor("Vladimira Kamenova", false, 11);

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

getClientsByEvent(event3,true);

removeClientFromEvent(client3, event3);