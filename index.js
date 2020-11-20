const endPoint = "http://localhost:3000/api/v1/timelines"

document.addEventListener('DOMContentLoaded', () => {
    // console.log("LOADED");
    getTimeline();

    const createTimelineForm = document.querySelector("#create-timeline-form")
    createTimelineForm.addEventListener("submit", (e) => createFormHandler(e))

})

function getTimeline() {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(timeline => { 
        timeline.map(timeline => {
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
            
                for (var i = 0; i < timeline.events.length; i++) {
                    console.log(timeline.events[i])
                }
               

                document.querySelector('#displayedTimeline').innerHTML += timelineMarkup
            
                    })
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
    }