let addTimeline = false;
const createTimelineButton = document.querySelector('#createButton');
const URL = 'http://localhost:3000/timelines';
const timelineFormContainer = document.querySelector('.formContainer');
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
    // insert code for animated timeline + json references
}

{/* <section class="timeline">
  <ul>
    <li>
      <div>
        <time>1934</time> At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
      </div>
    </li>
    <li></li> */}












createTimelineButton.addEventListener("click", () => {
    // only want timeline form to appear if user clicks create button; otherwise, should be hidden

    addTimeline = !addTimeline;
    if (addTimeline) {
        timelineFormContainer.getElementsByClassName.style.display = "block";
        const newTimeline = document.querySelector('#create-timeline-form')
        newTimeline.addEventListener('submit', function(e) {
            e.preventDefault()

            const timelineTitle = document.querySelector('#timeline-title')
            const timelineDescription = document.querySelector('#timeline-description')

            fetch(URL, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                        "title": timelineTitle.value,
                        "description": timelineDescription.value
                    })
                })
                .then(res => res.json())
                .then(timeline => {
                    displayedTimeline.innerHTML += `
                    <div class="container">
                    <h4>${timeline.title}</h4>
                    <p>${timeline.description}</p>
                    <button id="Edit" class="editButton"</button>
                    </div>
                    `
                })
        })
    } else {
        timelineContainer.style.display = "none";
    }
});