const endPoint = "http://localhost:3000/api/v1/timelines"

document.addEventListener('DOMContentLoaded', () => {
    // console.log("LOADED");
    getTimeline();
})

function getTimeline() {
    fetch(endPoint)
    .then(resp => resp.json())
    .then(timeline => { 
        timeline.forEach(timeline => {
            const timelineMarkup = `
                <div data-id=${timeline.id}>
                <h3>${timeline.title}</h3>
                <p>${timeline.description}</p>
                <p>${timeline.events}</>
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

    function createFormHandler(e) {
        e.preventDefault()

    }
