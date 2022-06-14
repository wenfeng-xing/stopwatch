import timeDifferenceGenerator from "../utils/timeDifferenceGenerator.js";
import { formatTimeToText } from "../utils/timeFormatter.js";

export default class Timer {
    constructor() {
        this.timer = timeDifferenceGenerator();
    }

    resetTimer() {
        this.timer = timeDifferenceGenerator();
    }

    getTimePassed() {
        return this.timer.next().value;
    }

    getTimePassedText() {
        return formatTimeToText(this.getTimePassed());
    }
}