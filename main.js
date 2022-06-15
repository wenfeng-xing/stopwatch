import Click from "./controller/click.contrroller.js";
import ButtonControl from "./view/buttonControl.view.js";
import LapList from "./view/lapList.view.js";
import TimeDisplay from "./view/timeDisplay.view.js";

function main() {
    const $lapResetButton = document.querySelector('.btn-lap');
    const $startStopButton = document.querySelector('.btn-start');
    const $timeDisplay = document.querySelector('.item-time-display');
    const $lapList = document.querySelector('.laps-list');

    const buttonControl = new ButtonControl($startStopButton, $lapResetButton);
    const timeDisplay = new TimeDisplay($timeDisplay);
    const lapList = new LapList($lapList);

    const clickContrroller = new Click(buttonControl, lapList, timeDisplay);

    clickContrroller.initializeStopWatch();

    $startStopButton.onclick = clickContrroller.handlStartStopButtonClick.bind(clickContrroller);
    $lapResetButton.onclick = clickContrroller.handleLapResetButtonClick.bind(clickContrroller);
}

main();