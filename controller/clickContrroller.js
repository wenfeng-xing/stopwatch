import LapTimer from "../model/lapTimer.model.js";
import Timer from "../model/timer.model.js";
import timeDifferenceGenerator from "../utils/timeDifferenceGenerator.js";
import { formatTimeToText } from "../utils/timeFormatter.js";

export default class ClickController {
    constructor(buttonControl, lapList, timeDisplay) {
        this.buttonControl = buttonControl;
        this.timeDisplay = timeDisplay;
        this.lapList = lapList;
        this.interval = 0;
        this.timer = new Timer();
        this.lapTimer = new LapTimer();
    }

    initializeStopWatch() {
        this.lapList.initializeLap();
    }

    handlStartStopButtonClick() {
        if (this.buttonControl.getStartStopButtonState() === "Start") {
            this.buttonControl.toggleStartStopButtonText();
            this.interval = setInterval(() => {
                this.timeDisplay.setTimeText(this.timer.getTimePassedText());
                this.lapList.updateCurrentLap({ ...this.lapTimer.getTimePassedText() });
            }, 16);
        } else if (this.buttonControl.getStartStopButtonState() === "Stop") {
            this.buttonControl.toggleStartStopButtonText();
            clearInterval(this.interval);
        }
    }

    handleLapResetButtonClick() {
        if (this.buttonControl.getLapResetButtonState() === "Reset") {
            this.timeDisplay.initializeTimeText();
            this.timer.resetTimer();
            this.lapTimer.resetTimer();
            this.lapList.initializeLap();
        } else if (this.buttonControl.getLapResetButtonState() === "Lap" && this.buttonControl.getStartStopButtonState() === "Stop") {
            this.lapTimer.resetTimer();
            this.lapTimer.incrementCount();

            this.lapList.addNewLap({ ...this.lapTimer.getTimePassedText() });
            this.lapList.highlightFastestSlowestLap();
        }
    }
}