console.log("in timeline.js");

class Timeline {
    constructor(id, timeline) {
        this.id = id;
        this.title = title;
        this.description = description;
        Timeline.call.push(this);
    }
    renderTimeline() {
        return `
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
    }
}

Timeline.all = [];