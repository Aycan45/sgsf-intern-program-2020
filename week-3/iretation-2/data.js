const eventAdder       = document.getElementById('action--add-event');
const eventInput       = document.getElementById('input--event-name');
const eventRestriction = document.getElementById('select--event-restriction');
const eventPrice       = document.getElementById('input--event-price');
const eventsTable      = document.getElementById('table--events');

const renderEvents = () => {
    const events = EventsManager.getEvents();

    var temp = [ `  <h4>Events soon:</h4>
                    <table>
                    <tbody>
                    <thead> 
                    <tr>

                    <td>  Event  </td>
                    <td>  Price  </td>
                    <td> Restriction </td> </thead>`];
    for (let e = 0; e < events.length; e++) {
        var name        = events[e].name || "no name" ;
        var price       = events[e].price || "free";
        var restriction = events[e].restriction || false;

       temp.push(`<tr>
                <td>${name}</td>
                <td>${price}</td>
                <td>${restriction}</td>
                <td>
                    <button action="edit" position=${e} class="event-edit--action">Edit</button>
                </td>
                <td>
                    <button action="delete" position=${e} class="event-delete--action">Delete</button>
                </td>
                </tr>
       `);
        
    }
    temp.push(`</tbody>
                </table>`);
    eventsTable.innerHTML = temp.join('');

    var eventEdit   = document.getElementsByClassName("event-edit--action");
    var eventDelete = document.getElementsByClassName("event-delete--action");

    for (let i = 0; i < eventDelete.length; i++) {
        eventDelete[i].addEventListener("click", (e) =>{

            var index = e.target.getAttribute('position');

            EventsManager.eventsCollection.splice(index,1);

            renderEvents();
        }); 
    }

    for (let i = 0; i < eventEdit.length; i++) {
        eventEdit[i].addEventListener("click", (e)=>{

            var index = e.target.getAttribute('position');

            eventInput.value= EventsManager.eventsCollection[index].name;
            eventPrice.value= EventsManager.eventsCollection[index].price;
            eventRestriction.value= EventsManager.eventsCollection[index].restriction;

            name = eventInput.value || "no name";
            price = eventPrice.value || "free";
            restriction = eventRestriction.value || false;

            EventsManager.eventsCollection.splice(index, 1);
            
            renderEvents();
        })
    }
};

eventAdder.addEventListener("click", () =>{
    var name        = eventInput.value;
    var restriction = eventRestriction.value;
    var price       = eventPrice.value;

    var event       = {
        name: name,
        restriction: restriction,
        price: price
    };

    EventsManager.addEvent(event);

    eventInput.value       = "";
    eventPrice.value       = "";
    eventRestriction.value = "";

    renderEvents();
});
