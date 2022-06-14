export default class ButtonControlService {
    constructor(StartStopButtonNode, LapResetButtonNode) {
        this.LapResetButtonNode = LapResetButtonNode;
        this.StartStopButtonNode = StartStopButtonNode;
    }

    toggleStartStopButtonText() {
        if (this.StartStopButtonNode.getNodeContent() === "Start") {
            this.StartStopButtonNode.render("Stop");
        }
        if (this.StartStopButtonNode.getNodeContent() === "Stop") {
            this.StartStopButtonNode.render("Start");
        }
    }

    toggleLapReSetButtonText() {
        if (this.LapResetButtonNode.getNodeContent() === "Reset") {
            this.LapResetButtonNode.render("Lap");
            this.StartStopButtonNode.render("Start");
        }
    }
}