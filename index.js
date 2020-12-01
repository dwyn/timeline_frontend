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
    const timelineTitle = document.getElementById("title").value
    const timelineDesc = document.getElementById("description").value
    const eventYear = document.getElementById("event-year").value
    const eventTitle = document.getElementById("event-title").value
    const eventDesc = document.getElementById("event-description").value
    postFetch(timelineTitle, timelineDesc, eventYear, eventTitle, eventDesc)
    }

       // POST FETCH REQUEST
    function postFetch(timelineTitle, timelineDesc, eventYear, eventTitle, eventDesc) {
        console.log(timelineTitle, timelineDesc, eventYear, eventTitle, eventDesc);
    }
        // build body object
//         let bodyData = {title, description, image_url, category_id}
      
//         fetch(endPoint, {
           // POST request
//           method: "POST",
//           headers: {"Content-Type": "application/json"},
//           body: JSON.stringify(bodyData)
//         })
//         .then(response => response.json())
//         .then(syllabus => {
//           console.log(syllabus);
//           const syllabusData = syllabus.data
           // render JSON response
//           const syllabusMarkup = `
//           <div data-id=${syllabus.id}>
//             <img src=${syllabusData.attributes.image_url} height="200" width="250">
//             <h3>${syllabusData.attributes.title}</h3>
//             <p>${syllabusData.attributes.category.name}</p>
//             <button data-id=${syllabusData.id}>edit</button>
//           </div>
//           <br><br>`;
      
//           document.querySelector('#syllabus-container').innerHTML += syllabusMarkup;
//         })

//  }

})
 

// GET FETCH REQUEST - GET TIMELINE(S) TO DISPLAY
function getTimeline() {
    fetch(URL)
    .then(res => res.json())
    .then(timeline => {
        // console.log(timeline.data[1]);
        timeline.data.forEach(timeline => {
            // console.log(timeline.attributes);
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
}