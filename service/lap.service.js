import { formatTextToTime } from "../utils/timeFormatter";
import HtmlNodeBuilder from "../view/htmlNodeBuilder.view";



export default class LapService {
    constructor(lapNode) {
        this.lapNode = lapNode;
    }

    appendLap(lapCountText, lapTimeText) {
        const lapCountNode = new HtmlNodeBuilder('p').addClassName('count-lap').addInnerHTML(lapCountText).build();
        const lapTimeNode = new HtmlNodeBuilder('p').addClassName('time').addInnerHTML(lapTimeText).build();
        this.lapNode.appendNode(lapCountNode).appendNode(lapTimeNode);
    }

    getFastestLap() {
        return this.lapNode.childNodes.reduce((acc, curr) =>
            formatTextToTime(acc.childNodes[1].innerHTML) > formatTextToTime(curr.childNodes[1].innerHTML) ? curr : acc);
    }

    getSlowestLap() {
        return this.lapNode.childNodes.reduce((acc, curr) =>
            formatTextToTime(acc.childNodes[1].innerHTML) < formatTextToTime(curr.childNodes[1].innerHTML) ? curr : acc);
    }

    updateCurrentLap(lapCountText, lapTimeText) {
        this.lapNode.childNodes[this.lapNode.childNodes.length - 1].childNodes[0].innerHTML = lapCountText;
        this.lapNode.childNodes[this.lapNode.childNodes.length - 1].childNodes[1].innerHTML = lapCountText;
    }
}