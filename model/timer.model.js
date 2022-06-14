import { timeDifferenceGenerator } from "../utils/timeFormatter.js";

export default class Timer {
    constructor() {
        this.timer = timeDifferenceGenerator();
    }

    getTimePassed() {
        return this.timer.next().value;
    }

    getTimePassedText() {
        return formatTimeToText(this.getTimePassed());
    }
}