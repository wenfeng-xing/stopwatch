export function formatTimeToText(time) {
    const minute = Math.floor(time / 60000);
    const secondReminder = time % 60000;
    const second = Math.floor(secondReminder / 1000);
    const milliSecondReminder = secondReminder % 1000;
    const milliSecond = Math.floor(milliSecondReminder / 10);

    const minuteText = minute < 10 ? `0${minute}` : minute;
    const secondText = second < 10 ? `0${second}` : second;
    const milliSecondTextß = milliSecond < 10 ? `0${milliSecond}` : milliSecond;

    return `${minute}:${second}.${milliSecond}`;
}

export function formatTextToTime(timeText) {
    const [minute, second, milliSecond] = timeText.split(/[:.]/);

    return minute * 60000 + second * 1000 + milliSecond * 10;
}