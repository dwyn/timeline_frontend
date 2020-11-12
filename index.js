const endPoint = "http://localhost:3000/api/v1/events";

document.addEventListener('DOMContentLoaded', () => {
   getEvents()

    const createTimelineForm = document.querySelector("#create-timeline-form")

    createTimelineForm.addEventListener("submit", (e) => createFormHandler(e));
})

// Events GET request
function getEvents() {
    fetch(endPoint)
    .then(response => response.json())
    .then(events => {
        events.data.forEach(event => {
            const eventInfo = `
            <div data-id=${event.id}>
            <h3>${event.attributes.year} - ${event.attributes.title}</h3>
            <p>${event.attributes.description}</p>
            </div>
            <br><br>`;

            document.querySelector('#event-container').innerHTML += eventInfo
        })
    })
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const descriptionInput = document.querySelector("#input-description").value
    postTimeline(titleInput, descriptionInput)
}
// queried values here and not at top because I won't reuse this form input data anywhere else


// POST request
function postTimeline(title, description) {
let timelineFetchData = {title, description}

fetch(endPoint, {
    method: "POST",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(timelineFetchData)
})
.then(response => response.json())
.then(timeline => {
    console.log(timeline);
    const timelineData = timeline.data 
    // render JSON response
    const 
})
}
