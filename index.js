let addTimeline = false;
const createButton = document.querySelector('#create-button');
const URL = 'http://localhost:3000/api/v1/timelines';
const timelineForm = document.querySelector('#create-timeline-form');
const displayedTimeline = document.querySelector('#displayed-timeline');


function getTimeline() {
    return fetch(URL)
    .then(res => res.json())
}

function postTimeline(timelineData) {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        body: JSON.stringify({
           "title": timelineData.title.value,
           "description": timelineData.description.value 
        })
    })
    .then(res => res.json())
    .then((obj_timeline) => {
        let new_timeline = renderTimeline(obj_timeline)
        displayedTimeline.append(new_timeline)
    })
}

function renderTimeline(timeline) {
    let h2 = document.createElement('h2')
    h2.innerText = `${timeline.title}`

    let p = document.createElement('p')
    p.innerText = `${timeline.description}`

    let divCard = document.createElement('div')
    divCard.setAttribute('class', 'card')
    divCard.append(h2, p)
    displayedTimeline.append(divCard)
}


createButton.addEventListener("click", () => {
    // only want timeline form to appear if user clicks create button; otherwise, should be hidden

    addTimeline = !addTimeline;
    if (addTimeline) {
        timelineForm.style.display = "block"
        timelineForm.addEventListener('submit', function(e) {
            e.preventDefault()
            postTimeline(e.target)
        })
    } else {
        timelineForm.style.display = "none"
    }
})

getTimeline().then(timelines => {
    timelines.forEach(timeline => {
        renderTimeline(timeline)
    })
})