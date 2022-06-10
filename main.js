const btnStart = document.querySelector('.btn-start');
const btnLap = document.querySelector('.btn-lap');
const timeDisplay = document.querySelector('.time-display');
const lapsListElement = document.querySelector('.laps-list');

const PLACEHOLDER_LAPS_LIST = ["", "", "", "", "", "", "", "", ""];

let previousLapTimeCounter = {minute: 0, second: 0, milliSecond: 0}
let currentTimeCounter = { minute: 0, second: 0, milliSecond: 0 };
let timeInterval;
let lapCount = 0;

// Set the timer for counting time
function controlTimer() {
    if (btnStart.innerHTML === "Stop") {
        stopTimer(timeInterval);
        btnStart.innerHTML = "Start";
        btnLap.innerHTML = "Reset";
    } else if (btnStart.innerHTML === "Start") {
        timeInterval = startTimer();
        btnStart.innerHTML = "Stop";
        btnLap.innerHTML = "Lap";
    }
}

function startTimer() {
    const timeInterval = setInterval(() => {
        timeDisplay.innerHTML = formatTime(currentTimeCounter);
        currentTimeCounter = incrementTime(currentTimeCounter);
        updateCurrentLap(caculateTimeDifference(currentTimeCounter, previousLapTimeCounter), lapCount);
    }, 10);

    return timeInterval;
}

function stopTimer(timeInterval) {
    clearInterval(timeInterval);
}

function incrementTime(counter) {
    let {minute, second, milliSecond} = counter;
    if (milliSecond < 99) {
        milliSecond++;
    } else {
        milliSecond = 0;
        second++;
    }

    if (second === 60) {
        second = 0;
        minute++;
    }

    return {minute, second, milliSecond};
}

// Set the counter of time for each lap

function controlLap() {
    if (btnLap.innerHTML === "Lap" && btnStart.innerHTML === "Stop") {
        lapCount++;
        addNewLapElement(caculateTimeDifference(currentTimeCounter, previousLapTimeCounter), lapCount, false);
        previousLapTimeCounter = {minute: currentTimeCounter.minute, second: currentTimeCounter.second, milliSecond: currentTimeCounter.milliSecond};
    }

    if (btnLap.innerHTML === "Reset") {
        currentTimeCounter = { minute: 0, second: 0, milliSecond: 0 };
        timeDisplay.innerHTML = formatTime(currentTimeCounter);
        displayInitialLaps();
    }
}

function caculateTimeDifference(currentTimeCounter, previousTimeCounter) {
    let borrow = 0;
    let milliSecond = currentTimeCounter.milliSecond - previousTimeCounter.milliSecond;
    if (milliSecond < 0) {
        borrow = 1;
        milliSecond += 100;
    }
    let second = currentTimeCounter.second - borrow - previousTimeCounter.second;
    if (second < 0) {
        borrow = 1;
        second += 60;
    }
    const minute = currentTimeCounter.minute - borrow - previousTimeCounter.minute;

    return {minute, second, milliSecond};
}

function formatTime(counter) {
    const minute = counter.minute >= 10 ? counter.minute : "0" + counter.minute;
    const second = counter.second >= 10 ? counter.second : "0" + counter.second;
    const milliSecond = counter.milliSecond >= 10 ? counter.milliSecond : "0" + counter.milliSecond;
    return `${minute}:${second}.${milliSecond}`;
}

function createLiElementContent(lap, index, isPlaceHold) {
    const pLapNumberElement = document.createElement("p");
    pLapNumberElement.innerText = isPlaceHold ? "" : `Lap ${index}` ;
    pLapNumberElement.className = "count-lap";
    const pTimeElement = document.createElement("p");
    pTimeElement.innerText = isPlaceHold ? "" : lap;
    pTimeElement.className = "time";

    return {pLapNumberElement, pTimeElement};
}

function addNewLapElement(counter, index, isPlaceHold) {
    const lap = isPlaceHold ? counter : formatTime(counter);
    const {pLapNumberElement, pTimeElement} = createLiElementContent(lap, index, isPlaceHold);
    const liElement = document.createElement("li");
    liElement.appendChild(pLapNumberElement);
    liElement.appendChild(pTimeElement);

    const currentFirstLiElement = document.querySelector(".laps-list > li");
    lapsListElement.insertBefore(liElement, currentFirstLiElement);
}

function updateCurrentLap(counter, index) {
    const currentLiCountLap = document.querySelector(".laps-list > li .count-lap");
    const currentLiTime = document.querySelector(".laps-list > li .time");
    const currentCount = formatTime(counter);
    const {pLapNumberElement, pTimeElement} = createLiElementContent(currentCount, index);
    currentLiCountLap.replaceWith(pLapNumberElement);
    currentLiTime.replaceWith(pTimeElement);
}

function displayInitialLaps() {
    lapCount = 0;
    lapsListElement.innerHTML = "";
    PLACEHOLDER_LAPS_LIST.forEach((ele, index) => addNewLapElement(ele, index, true));
}

// start stopwatch
function execute() {
    btnLap.addEventListener('click', controlLap);
    btnStart.addEventListener('click', controlTimer);
    displayInitialLaps();
}

execute();