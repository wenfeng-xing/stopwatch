import timeDifferenceGenerator from "../utils/timeDifferenceGenerator.js";
import { formatTimeToText } from "../utils/timeFormatter.js";

export default class Timer {
    constructor() {
        this.timer = timeDifferenceGenerator();
        this.currentTime = 0;
    }

    pauseTimer() {
        this.currentTime = this.timer.next().value;
    }

    restartTimer() {
        this.timer = timeDifferenceGenerator(this.currentTime);
    }

    resetTimer() {
        this.timer = timeDifferenceGenerator();
        this.currentTime = 0;
    }

    getTimePassed() {
        return this.timer.next().value;
    }

    getTimePassedText() {
        return formatTimeToText(this.getTimePassed());
    }
}