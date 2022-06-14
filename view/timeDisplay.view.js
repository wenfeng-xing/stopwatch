export default class TimeDisplay {
    constructor($timeDisplayNode) {
        this.$timeDisplayNode = $timeDisplayNode;
    }

    setTimeText(timeText) {
        this.$timeDisplayNode.innerHTML = timeText;
    }

    initializeTimeText() {
        this.$timeDisplayNode.innerHTML = "00:00.00";
    }

    updateTimeText(timeText) {
        this.$timeDisplayNode.innerHTML = timeText;
    }
}