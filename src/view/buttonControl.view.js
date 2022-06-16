export default class ButtonControl {
    constructor($StartStopButtonNode, $LapResetButtonNode) {
        this.$LapResetButtonNode = $LapResetButtonNode;
        this.$StartStopButtonNode = document.querySelector('.btn-start');
    }

    getStartStopButtonState() {
        return this.$StartStopButtonNode.innerHTML;
    }

    getLapResetButtonState() {
        return this.$LapResetButtonNode.innerHTML;
    }

    toggleStartStopButtonText() {
        if (this.$StartStopButtonNode.innerHTML === "Start") {
            this.$StartStopButtonNode.innerHTML = "Stop";
            this.$StartStopButtonNode.className = "btn-start pause";
            this.$LapResetButtonNode.innerHTML = "Lap";
        } else if (this.$StartStopButtonNode.innerHTML === "Stop") {
            this.$StartStopButtonNode.innerHTML = "Start";
            this.$StartStopButtonNode.className = "btn-start start";
            this.$StartStopButtonNode.innerHTML = "Start";
            this.$LapResetButtonNode.innerHTML = "Reset";
        }
    }

    toggleLapReSetButtonText() {
        if (this.$LapResetButtonNode.innerHTML === "Reset") {
            this.$LapResetButtonNode.innerHTML = "Lap";
            this.$StartStopButtonNode.innerHTML = "Start";
        }
    }
}