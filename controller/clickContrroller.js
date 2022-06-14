export default class ClickController {
    constructor($startStopButton, $lapResetButton, $timeDisplay) {
        this.$startStopButton = $startStopButton;
        this.$lapResetButton = $lapResetButton;
        this.$timeDisplay = $timeDisplay;
    }

    initializeStopwatch() {
        this.
    }

    handlStartStopButtonClick () {
        if (this.$startStopButton.innerHTML === "Start") {
            this.interval = this.$lapResetButton.addEventListener(() => {
                console.log("Hello Start");
            })
        } else if (this.$startStopButton.innerHTML === "Stop") {
            clearInterval(this.interval);
        }
    }

    handleLapResetButtonClick () {
        if (this.$lapResetButton.innerHTML === "Lap" && this.$startStopButton.innerHTML === "Stop") {
 
        } else if (this.$lapResetButton.innerHTML === "Reset") {
            
        }
    }
}