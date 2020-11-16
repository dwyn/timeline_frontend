const endPointEvents = "http://localhost:3000/api/v1/events";
const endPointTimelines = "http://localhost:3000/api/v1/timelines";


document.addEventListener('DOMContentLoaded', () => {
    console.log('LOADED');
//    getEvents()
    getTimelines()
    postTimeline()

    const createTimelineForm = document.querySelector("#create-timeline-form")

    createTimelineForm.addEventListener("submit", (e) => createFormHandler(e));
})

// Timelines GET request
function getTimelines() {
    fetch(endPointTimelines)
    .then(response => response.json())
    .then(timelines => {
        timelines.data.forEach(timeline => {
            const timelineInfo = `
            <div data-id=${timeline.id}>
            <h3>${timeline.attributes.title}</h3>
            <p>${timeline.attributes.description}</p>
            </div>
            <br><br>`;

            document.querySelector('#displayedTimeline').innerHTML += timelineInfo
        })
    })
}

// timelines POST request
function postTimeline(title, description, user_id) {
    let timelineFetchData = {title, description, user_id}
    
    fetch(endPointTimelines, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(timelineFetchData)
    })
    .then(response => response.json())
    .then(timeline => {
        console.log(timeline);
        const timelineData = timeline.data
        //render JSON response
        const timelineMarkup = `
            <div data-id=${timeline.id}>
            <h4>${timelineData.attributes.title}</h4>
            <p>${timelineData.attributes.description}</p>
            </div>
            <br><br>`;
    
            document.querySelector('.timeline').innerHTML += timelineMarkup;
    })
    }

// Events GET request
// function getEvents() {
//     fetch(endPointEvents)
//     .then(response => response.json())
//     .then(events => {
//         events.data.forEach(event => {
//             const eventInfo = `
//             <div data-id=${event.id}>
//             <h3>${event.attributes.year} - ${event.attributes.title}</h3>
//             <p>${event.attributes.description}</p>
//             </div>
//             <br><br>`;

//             document.querySelector('#event-container').innerHTML += eventInfo
//         })
//     })
// }

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value

    const descriptionInput = document.querySelector("#input-description").value

    postTimeline(titleInput, descriptionInput)
}
// queried values here and not at top because I won't reuse this form input data anywhere else



