import { formatTextToTime, formatTimeToText } from "../utils/timeFormatter.js";
import HtmlNodeBuilder from "../utils/htmlNodeBuilder.js";

export default class LapList {
    constructor($lapListNode) {
        this.$lapListNode = $lapListNode;
    }

    addNewLap({ lapCountText, lapTimeText }) {
        const $lapCountNode = new HtmlNodeBuilder('p').addClassName('count-lap').addInnerHTML(lapCountText).build();
        const $lapTimeNode = new HtmlNodeBuilder('p').addClassName('time').addInnerHTML(lapTimeText).build();
        const $newLapNode = new HtmlNodeBuilder('li').addChildNode($lapCountNode).addChildNode($lapTimeNode).build();
        this.$lapListNode.appendChild($newLapNode);
    }

    getFastestLap() {
        const list = [];
        this.$lapListNode.childNodes.forEach(node => list.push(node));
        return list.filter((node, index, arr) => node.childNodes[1].innerHTML !== "" && index !== arr.length - 1).reduce((acc, curr) => {
            if (!acc) {
                return curr;
            }
            return formatTextToTime(acc?.childNodes[1]?.innerHTML) > formatTextToTime(curr.childNodes[1].innerHTML) ? curr : acc;
        }, null);
    }

    getSlowestLap() {
        const list = [];
        this.$lapListNode.childNodes.forEach(node => list.push(node));
        return list.filter(node => node.childNodes[1].innerHTML !== "").reduce((acc, curr) =>
            formatTextToTime(acc.childNodes[1].innerHTML) < formatTextToTime(curr.childNodes[1].innerHTML) ? curr : acc);
    }

    updateCurrentLap({ lapCountText, lapTimeText }) {
        this.$lapListNode.childNodes[this.$lapListNode.childNodes.length - 1].childNodes[0].innerHTML = lapCountText;
        this.$lapListNode.childNodes[this.$lapListNode.childNodes.length - 1].childNodes[1].innerHTML = lapTimeText;
    }

    highlightFastestSlowestLap() {
        if (this.$lapListNode.childNodes.length > 1) {
            this.$lapListNode.childNodes.forEach(node => node.childNodes.forEach(element => element.style.color = "white"));
            this.getSlowestLap().childNodes?.forEach(element => element.style.color = "red");
            this.getFastestLap()?.childNodes?.forEach(element => element.style.color = "green");
        }
    }

    initializeLap() {
        let emptyLapRecodNumber = 5;
        this.$lapListNode.innerHTML = "";
        while (emptyLapRecodNumber > 0) {
            this.addNewLap({ lapCountText: "", lapTimeText: "" });
            emptyLapRecodNumber--;
        }
    }
}