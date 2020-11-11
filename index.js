const endPoint = "http://localhost:3000/api/v1/events";

document.addEventListener('DOMContentLoaded', () => {
   getEvents()
})

function getEvents() {
    fetch(endPoint)
    .then(response => response.json())
    .then(events => {
        // console.log(events);
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


