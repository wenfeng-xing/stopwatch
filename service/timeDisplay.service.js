export default class TimeDisplayService {
    constructor(timeDisplayNode) {
        this.timeDisplayNode = timeDisplayNode;
    }

    setTimeText(timeText) {
        this.timeDisplayNode.render(timeText);
    }

    initializeTimeText() {
        this.setTimeText("00:00.00");
    }

    updateTimeText(timeText) {
        this.setTimeText(timeText);
    }
}