events = [];
const data=JSON.parse(localStorage.getItem('events'));
const addEvent=(ev)=>{
    ev.preventDefault();
        let eventi={
            id: Date.now(), 
            event: document.getElementById("event").value,
            age: document.querySelector('input[name="age"]:checked').value
        };
    events.push(eventi);
    document.forms[0].reset();
        console.warn('added' , {events} );
        let pre = document.querySelector('#msg pre');
        pre.textContent = '\n' + JSON.stringify(events, '\t', 2);    

    localStorage.setItem("Events", JSON.stringify(events));
    }
    document.addEventListener('DOMContentLoaded', ()=>{
        document.getElementById('btn').addEventListener('click', addEvent);
    });
//function showEvents(){
//    
//    for (let i = 0; i < localStorage.length; i++) {
//        const events = localStorage.key(i);
//        const value= localStorage.getItem(events);
//
//        output.innerHTML+=`${events}: ${value} </br>`
//    }
 //  return false;
//}