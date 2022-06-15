import timeDifferenceGenerator from "../utils/timeDifferenceGenerator.js";
import { formatTimeToText } from "../utils/timeFormatter.js";
import Timer from "./timer.model.js";

export default class LapTimer extends Timer {
    constructor() {
        super();
        this.count = 0;
        this.currentTime = 0;
    }

    pauseTimer() {
        const { time } = this.timer.next().value;
        this.currentTime = time;
        this.timer = timeDifferenceGenerator();
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