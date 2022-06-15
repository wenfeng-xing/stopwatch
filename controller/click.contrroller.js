import LapTimer from "../model/lapTimer.model.js";
import Timer from "../model/timer.model.js";
import timeDifferenceGenerator from "../utils/timeDifferenceGenerator.js";
import { formatTimeToText } from "../utils/timeFormatter.js";

export default class Click {
    constructor(buttonControl, lapList, timeDisplay) {
        this.buttonControl = buttonControl;
        this.timeDisplay = timeDisplay;
        this.lapList = lapList;
        this.timer = new Timer();
        this.lapTimer = new LapTimer();
        this.pause = true;
    }

    initializeStopWatch() {
        this.lapList.initializeLap();
    }

    handlStartStopButtonClick() {
        if (this.buttonControl.getStartStopButtonState() === "Start") {
            this.buttonControl.toggleStartStopButtonText();
            this.timer.restartTimer();
            this.lapTimer.restartTimer();
            this.pause = false;
            this.interval = setTimeout(function run() {
                this.timeDisplay.setTimeText(this.timer.getTimePassedText());
                this.lapList.updateCurrentLap({ ...this.lapTimer.getTimePassedText() });
                const that = this;
                if (!this.pause) {
                    setTimeout(run.bind(that), 16);
                }
            }.bind(this), 10);
        } else if (this.buttonControl.getStartStopButtonState() === "Stop") {
            this.buttonControl.toggleStartStopButtonText();
            this.pause = true;
            this.timer.pauseTimer();
            this.lapTimer.pauseTimer();
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