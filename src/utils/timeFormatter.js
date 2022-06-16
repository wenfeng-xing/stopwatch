export function formatTimeToText(time) {
    const minute = Math.floor(time / 60000);
    const secondReminder = time % 60000;
    const second = Math.floor(secondReminder / 1000);
    const milliSecondReminder = secondReminder % 1000;
    const milliSecond = Math.floor(milliSecondReminder / 10);

    const minuteText = minute < 10 ? `0${minute}` : minute;
    const secondText = second < 10 ? `0${second}` : second;
    const milliSecondText = milliSecond < 10 ? `0${milliSecond}` : milliSecond;

    return `${minuteText}:${secondText}.${milliSecondText}`;
}

export function formatTextToTime(timeText) {
    if (!timeText) {
        return 0;
    }
    const [minute, second, milliSecond] = timeText.split(/[:.]/);

    return minute * 60000 + second * 1000 + milliSecond * 10;
}