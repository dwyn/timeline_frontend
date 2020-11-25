CODE DUMP -- JS file



let addTimeline = false;
const startButton = document.querySelector('#startButton')
const createButton = document.querySelector('#create-button');
const URL = 'http://localhost:3000/api/v1/timelines';
const timelineForm = document.querySelector('.create-timeline-form');
const newEventUI = document.getElementById("events");
const addButton = document.getElementById("add-button");
const displayedTimeline = document.querySelector('#displayed-timeline');



document.addEventListener("DOMContentLoaded", () => {
    console.log('LOADED');
    getTimeline();
    postFetch();
})

// function to remove form events dynamically
// function removeElement(parentDiv, childDiv){
//    document.getElementById(childDiv) 
//        var child = document.getElementById(childDiv);
//        var parent = document.getElementById(parentDiv);
//        parent.removeChild(child);
//    }


// function that will be called upon when user clicks on Add Event button
// function addEvent() {
//     var x = document.createElement('span');
//     var y = document.createElement('textArea');
//     var z = document.createElement('img');
//     var i = 0;
//     var increment = function() {
//         i += 1;
//     }

//     y.setAttribute("cols", "17");
//     y.setAttribute("placeholder", "Events...");
//     z.setAttribute("src", "x.svg");
//     increment();
//     y.setAttribute("Event", "textelement_" + i);
//     x.appendChild(y);
//     z.setAttribute("click", "removeElement("events", 'id_" + i + "')");
//     x.appendChild(z);
//     x.setAttribute("id", "id_" + i);
//     document.getElementById("events").appendChild(x);
// }

function getTimeline() {
    fetch(URL)
    .then(res => res.json())
    .then(json => {
        
    })
    .catch(error => {
        alert('An error occurred while retrieving some essential timeline info. The error was: ' + error.toString())
    })
}
       

// formHandler function grabs all of the values input through the timeline form 
function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    postFetch(titleInput, descriptionInput)
}

function postFetch(title, description) {
    console.log(title, description);
    const bodyData = {title, description}
    fetch(URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(res => res.json())
    .then(timeline => {
        console.log(timeline.bodyData);
    })
}

function formToggle(button) {
    if (timelineForm.style.display === "block") {
        timelineForm.style.display = "none";
        document.getElementById(startButton.id).value = 'Start Building';
    } else {
        timelineForm.style.display = "block";
        document.getElementById(startButton.id).value = "Nevermind";
    }
  }


// const appendNewEvent = event => {
//     document.getElementById("events").appendChild(event);
// };

// const addNewEvent = event => {
    // event.preventDefault();
    // const eventTitle = document.getElementById("event-title")
    // const eventUI = document.createElement("li");
    // eventUI.innerText = eventTitle.value;

    // appendNewEvent(eventTitle);
    // event.target.reset();
// };
