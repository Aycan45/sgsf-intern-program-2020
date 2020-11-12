
events         = [];
eventi         = {};
const data     = JSON.parse(localStorage.getItem('events'));
const addEvent = (ev)=>{
    ev.preventDefault();
   var eventi  = {
        id: Date.now(), 
        event: document.getElementById("event").value,
        age: document.querySelector('input[name="age"]:checked').value
    };

    events.push(eventi);

    document.forms[0].reset();

    localStorage.setItem("Events", JSON.stringify(events));
}
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addEvent);
        });
function validateForm(){
    let event = document.getElementById("event").value
    if (event == "" ) {
        window.alert("Fill event name!");
        
        event.focus();
        
        return false;
    }
}    
function showEvents(){
        jQuery("#arrayData").html(""); //Clear the existing data
        
        events = JSON.parse(localStorage.getItem("Events"));
        
        $("#arrayData").append("<table>");

        events.forEach(function(eventi) {
           $("#arrayData").append("<tr><td>"+eventi.event+"</td>"
           +"<td>"+eventi.age+"</td><td><button onclick='editEvent()'>Edit</button></td><td><button onclick='deleteEvent'>Delete</button></td></tr>");
        })
       
        $("#arrayData").append("</table>");
    }

