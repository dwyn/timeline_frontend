// let addTimeline = false;
const startButton = document.querySelector('#startButton')
const createButton = document.querySelector('#create-button');
const URL = 'http://localhost:3000/api/v1/timelines';
const timelineForm = document.querySelector('.create-timeline-form');
const newEventUI = document.getElementById("events");
const addButton = document.getElementById("add-button");
// const displayedTimeline = document.querySelector('#displayed-timeline');

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM is loaded");
        getTimeline()
});

// getTimeline is working except that still can't view individual events associated with timeline....returns '[Object, object]'
function getTimeline() {
    fetch(URL)
    .then(res => res.json())
    .then(timeline => {
        // console.log(timeline.data[1]);
        timeline.data.forEach(timeline => {
            // debugger 
            // console.log(timeline.attributes);       
            var obj = timeline.attributes.events;
            for (var i in obj) {
                var year = obj[i].year;
                var title = obj[i].title;
                var description = obj[i].description;
                console.log(title);
            }
            

            // const timelineMarkup = `
            // <div data-id=${timeline.id}>
            //     <h5 class="card-title">${timeline.title} </h5>
            //     <h6 class="card-subtitle mb-2 text-muted">${timeline.attributes.title} </h6>
            //     <p class="card-text">${timeline.attributes.description} </p>
            // </div>
            // <br><br>`;

            // document.querySelector('#displayed-timeline').innerHTML += timelineMarkup;
        })

    .catch(error => {
        alert('An error occurred while retrieving some essential timeline info. The error was: ' + error.toString())
    })
})




       

// formHandler function grabs all of the values input through the timeline form 
// function createFormHandler(e) {
//     e.preventDefault()
//     const titleInput = document.querySelector('#title').value
//     const descriptionInput = document.querySelector('#description').value
//     postFetch(titleInput, descriptionInput)
// }

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

document.getElementById("startButton").addEventListener('click', formToggle);

function formToggle(button) {
    if (timelineForm.style.display === "block") {
        timelineForm.style.display = "none";
        document.getElementById(startButton.id).value = 'Start Building';
    } else {
        timelineForm.style.display = "block";
        document.getElementById(startButton.id).value = "Nevermind";
    }
}}