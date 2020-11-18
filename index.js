const endPointTimelines = "http://localhost:3000/api/v1/timelines";

document.addEventListener('DOMContentLoaded', () => {
    getTimeline()
})

function getTimeline() {
    fetch(endPointTimelines)
        .then(res => res.json())
        .then(timeline => {
            timeline.data.forEach(timeline => {
            const timelineMarkup = `
                <div data-id=${timeline.id}>
                <h3>${timeline.title}</h3>
                <p>${timeline.description}</p>
                <br>
                <h4>${timeline.attributes.event.year} - ${timeline.attributes.event.title}</h4>
                <p>${timeline.attributes.event.description}</p>
                <button data-id=${timeline.id}>Edit</button>

                </div>
                <br><br>`;

            document.querySelector('#displayedTimeline').innerHTML += timelineMarkup;
        });
    })
}
