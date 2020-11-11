const endPoint = "http://localhost:3000/api/v1/events";

document.addEventListener('DOMContentLoaded', () => {
   getEvents()

    const createTimelineForm = document.querySelector("#create-timeline-form")

    createTimelineForm.addEventListener("submit", (e) => createFormHandler(e));
})

// GET request
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
    postFetch(titleInput, descriptionInput)
}

// POST request
function postFetch(title, description) {
console.log(title, description);
}
