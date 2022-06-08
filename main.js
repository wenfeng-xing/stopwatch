const btnStart = document.querySelector('.btn-start');
const btnLap = document.querySelector('.btn-lap');
const timeDisplay = document.querySelector('.time-display');

let count = {minute: 0, second: 0, milliSecond: 0};
let timeInterval;

btnStart.addEventListener('click', controlTimer);

function controlTimer () {
    if (btnStart.innerHTML === "Stop") {
        stopTimer();
        btnStart.innerHTML = "Start";
        btnLap.innerHTML = "Reset";
    } else if (btnStart.innerHTML === "Start") {
        startTimer();
        btnStart.innerHTML = "Stop";
        btnLap.innerHTML = "Lap";
    }
}

function startTimer() {
    timeInterval = setInterval(() => {
        displayTime();
        timer();
    }, 10);
}

function stopTimer() {
    clearInterval(timeInterval);
}

function timer() {
    if (count.milliSecond < 99) {
        count.milliSecond++;
    } else {
        count.milliSecond = 0;
        count.second++;
    }

    if (count.second === 60) {
        count.second = 0;
        count.minute++;
    }
}

btnLap.addEventListener('click', controlLap);

function controlLap() {
    if(btnLap.innerHTML === "Reset") {
        count = {minute: 0, second: 0, milliSecond: 0};
        displayTime();
    }
}

function displayTime() {
    const minute = count.minute >= 10 ? count.minute : "0" + count.minute;
    const second = count.second >= 10 ? count.second : "0" + count.second;
    const milliSecond = count.milliSecond >= 10 ? count.milliSecond : "0" + count.milliSecond;
    timeDisplay.innerHTML = minute + ":" + second + "." + milliSecond;
}