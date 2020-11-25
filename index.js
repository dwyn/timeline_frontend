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
    
})


function getTimeline() {
    fetch(URL)
    .then(res => res.json())
    .then(timeline => {
        timeline.data.forEach(timeline => {
            let newTimeline = new timeline(timeline)

            render(timeline)
        })
    
    .catch(error => {
        alert('An error occurred while retrieving some essential timeline info. The error was: ' + error.toString())
    })
    })
}

function render(timeline) {
    const timelineMarkup = `
        <div data-id=${timeline.id}>
        <h3>${timeline.title}</h3>
        <p>${timeline.description}</p>
        <ul>
            <li>${timeline.events}</li>
        </ul>
        <br>
        <button data-id=${timeline.id}>Edit</button>
        </div>
        <br><br>`;

    document.querySelector('#displayed-timeline').innerHTML += timelineMarkup
}
       

// formHandler function grabs all of the values input through the timeline form 
function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#title').value
    const descriptionInput = document.querySelector('#description').value
    postFetch(titleInput, descriptionInput)
}

// function postFetch(title, description) {
//     console.log(title, description);
//     const bodyData = {title, description}
//     fetch(URL, {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(bodyData)
//     })
//     .then(res => res.json())
//     .then(timeline => {
//         console.log(timeline.bodyData);
//     })
// }

function formToggle(button) {
    if (timelineForm.style.display === "block") {
        timelineForm.style.display = "none";
        document.getElementById(startButton.id).value = 'Start Building';
    } else {
        timelineForm.style.display = "block";
        document.getElementById(startButton.id).value = "Nevermind";
    }
  }
