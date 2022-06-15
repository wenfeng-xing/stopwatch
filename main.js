import Click from "./controller/click.contrroller.js";
import ButtonControl from "./view/buttonControl.view.js";
import LapList from "./view/lapList.view.js";
import TimeDisplay from "./view/timeDisplay.view.js";

function main() {
    const $lapResetButton = document.querySelector('.btn-lap');
    const $startStopButton = document.querySelector('.btn-start');
    const $timeDisplay = document.querySelector('.display p');
    const $lapList = document.querySelector('.laps-list');

    const buttonControl = new ButtonControl($startStopButton, $lapResetButton);
    const timeDisplay = new TimeDisplay($timeDisplay);
    const lapList = new LapList($lapList);

    const clickContrroller = new Click(buttonControl, lapList, timeDisplay);

    clickContrroller.initializeStopWatch();

    // $startStopButton.click = clickContrroller.handlStartStopButtonClick.bind(clickContrroller));
    // $lapResetButton.click = clickContrroller.handleLapResetButtonClick.bind(clickContrroller));
    $startStopButton.addEventListener('click', clickContrroller.handlStartStopButtonClick.bind(clickContrroller));
    $lapResetButton.addEventListener('click', clickContrroller.handleLapResetButtonClick.bind(clickContrroller));
}

main();