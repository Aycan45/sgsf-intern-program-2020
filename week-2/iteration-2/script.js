//array for storing events
var events       = [];

var eventId      = 0;
//array for storing clients
var clients      = [];


//making a constructor function for Event
function Event(name, flag=false){
    clients      = Array <Client>[];

    this.id      = eventId++;
    this.name    = name;
    this.flag    = flag;
    this.clients = [];

}

//making a constructor function for Client
function Client(clientName,gender,age){  
    this.clientName = clientName;
    this.gender     = gender;
    this.age        = age;
}

//function for listing events
function listEvents(){
    for (let e of events) {
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
    for (let e of events) {
        if (e.id == id) {
         events.splice(events.indexOf(e),1);
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
        var event = new Event(name, true)
    }
    else{
        event = new Event(name, false)
    }
    events.push(event);

    return event;
}

//function for updating an event
function updateEvent(id, name, flag){

    let index= events.findIndex(event => event.id == id);

    console.log(`Event ${events[index].name} was updated`);

    events[index].name = name;
    events[index].flag = flag;
    return true;
}

//adding a client to an event
function addClientToEvent(client, event){

   var MIN_AGE=18; 
   if (client.age < MIN_AGE && event.flag == true) {       
        console.log("This event is for +18");
        
        return false;
   }
   
   event.clients.push(client);

   console.log(`The client ${client.clientName} was added to ${event.name}`);
}

//getting clients by event and filtering them by gender
function getClientsByEvent(event, filter){
    
    console.log(`Clients in this ${event.name} event are:`)
        
        for (let clnt of event.clients) {
            
            if(filter && clnt.gender == filter){
                
                console.log(`We have ${clnt.clientName}`);

            }

        }
}


//removing a client from an existing event
function removeClientFromEvent(client, event){
    
    i=event.clients.indexOf(client); 
    
    event.clients.splice(i, 1);
    
    console.log(`You have removed ${client.clientName} from ${event.name}!`);
}

//initializing events and pushing them to the events array
var event1  = new Event("Pijamas party Bushido", true);
var event2  = new Event("Teen party Onyx", false);
var event3  = new Event("Travis Scott party Pasha", false);
events.push(event1,event2,event3);

//initializing clients
var client1 = new Client("Geogri Georgiev", true, 19);
var client2 = new Client("Anita Chausheva", false, 18);
var client3 = new Client("Mersin Hasan",true,20);
var client4 = new Client("Vladimira Kamenova", false, 11);

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