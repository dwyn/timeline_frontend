let addTimeline = false;
const startButton = document.querySelector('#startButton')
const createButton = document.querySelector('#create-button');
const URL = 'http://localhost:3000/api/v1/timelines';
const timelineForm = document.querySelector('.create-timeline-form');
const displayedTimeline = document.querySelector('#displayed-timeline');

document.addEventListener("DOMContentLoaded", () => {
    console.log('LOADED');
    
    
})

// function getTimeline() {
//     return fetch(URL)
//     .then(res => res.json())
//     .then(json => {})
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

// formHandler function grabs all of the values input through the timeline form 
function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector('#input-title').value
    const descriptionInput = document.querySelector('#input-description').value
    postFetch(titleInput, descriptionInput)
}

function postFetch(title, description) {
    // console.log(title, description);
    const bodyData = {title, description}
    fetch(endPoint, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(res => res.json())
    .then(timeline => {
        console.log(timeline.bodyData);
    })
}



