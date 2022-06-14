import { formatTimeToText } from "../utils/timeFormatter.js";
import Timer from "./timer.model.js";

export default class LapTimer extends Timer {
    constructor() {
        super();
        this.count = 0;
    }

    incrementCount() {
        this.count++;
    }

    getTimePassed() {
        return { count: this.count, time: this.timer.next().value };
    }

    getTimePassedText() {
        const { count, time } = this.getTimePassed();
        const lapCountText = `Lap ${count}`;
        const lapTimeText = formatTimeToText(time);
        return { lapCountText, lapTimeText };
    }
}