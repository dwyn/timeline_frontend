const endPointTimelines = "http://localhost:3000/api/v1/timelines";

document.addEventListener('DOMContentLoaded', () => {
    fetch(endPointTimelines)
        .then(res => res.json())
        .then(json => console.log(json));
    });

            // timeline.data.forEach(timeline => {
            //     const timelineMarkup = `
            //         <h4>${timeline.title}</h4>
            //         <p>${timeline.description}</p>`;

            //     document.querySelector('#displayedTimeline').innerHTML += timelineMarkup;
            // });
        // });
// });
