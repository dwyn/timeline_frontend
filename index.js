let addTimeline = false;
const startButton = document.querySelector('#startButton')
const URL = 'http://localhost:3000/api/v1/timelines';
const timelineForm = document.querySelector('.create-timeline-form');
const newEventUI = document.getElementById("events");
const addButton = document.getElementById("addEvent")
const createButton = document.querySelector('#createButton');
const displayedTimeline = document.querySelector('.card-columns');



document.addEventListener("DOMContentLoaded", () => {
    console.log('LOADED');
    getTimeline();

    timelineForm.addEventListener("submit", (e) => 
    createFormHandler(e))

            // formHandler function grabs all of the values input through the timeline form 
            function createFormHandler(e) {
                e.preventDefault()
                // these variables get the value of the form inputs
                const timelineTitle = document.getElementById("timelineTitle").value
                const timelineDescription = document.getElementById("timelineDescription").value
                const eventYear = document.getElementById("eventYear").value
                const eventTitle = document.getElementById("eventTitle").value
                const eventDescription = document.getElementById("eventDescription").value
                postTimeline(timelineTitle, timelineDescription, eventYear, eventTitle, eventDescription)
            }

            // POST FETCH REQUEST
            function postTimeline(title, description, eventYear, eventTitle, eventDescription) {
                // debugger
                // console.log(timeline)
                fetch(URL, {
                    // POST request
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Accept": "application/json"
                },
                    body: JSON.stringify({
                        title, description, eventYear, eventTitle, eventDescription
                    }),
                })
                .then(response => response.json())
                .then(timeline => {
                     this.timeline.forEach(timeline => {
                        // console.log(timeline);
                            // .attributes.events);
                        // const timelineMarkup = `
                        // <div class="card bg-light">
                        //     <div class="card-body text-center">
                        //     <h4 class="card-text">${timeline.attributes.events.title}</h4>
                        //     <div class="card-body">
                        //     <p class="card-text">${timeline.attributes.events.description} </p>
                        //     <button type="button" class="btn btn-sm">Select</button>
                        // </div>
                        // <br><br>`;

                        // document.querySelector('.card-columns').innerHTML += timelineMarkup
                     })
                })
            }
        })

// GET FETCH REQUEST - GET TIMELINE(S) TO DISPLAY
function getTimeline() {
    fetch(URL)
    .then(res => res.json())
    .then(timeline => {
        // console.log(timeline.data[1]);
        timeline.data.forEach(timeline => {
            //  console.log(timeline.attributes.events);
            const timelineMarkup = `
            <div class="card bg-light">
                <div class="card-body text-center">
                <h4 class="card-text">${timeline.attributes.title}</h4>
                <div class="card-body">
                <p class="card-text">${timeline.attributes.description} </p>
                <button type="button" class="btn btn-sm">Select</button>
            </div>
            <br><br>`;

            document.querySelector('.card-columns').innerHTML += timelineMarkup
        })
    })
    .catch(error => {
        alert('An error occurred while retrieving some essential timeline info. The error was: ' + error.toString())
})
}



// START BUTTON AND FORM TOGGLE
document.getElementById("startButton").addEventListener('click', formToggle);

function formToggle(button) {
    if (timelineForm.style.display === "block") {
        timelineForm.style.display = "none";
        document.getElementById(startButton.id).value = 'Start Building';
    } else {
        timelineForm.style.display = "block";
        document.getElementById(startButton.id).value = "Nevermind";
    }
}