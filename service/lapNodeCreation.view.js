import HtmlNodeCreation from "./htmlNodeCreation.view";

export default class LapNodeCreation extends HtmlNodeCreation{
    constructor(lapNumText, lapTimeText) {
        const lapNumNode = new HtmlNodeCreation('p').addClassName('count-lap').addInnerHTML(lapNumText).build();
        const lapTimeNode = new HtmlNodeCreation('p').addClassName('time').addInnerHTML(lapTimeText).build();
        super(new HtmlNodeCreation('li').addChildNode(lapNumNode).addChildNode(lapTimeNode)) ;
    }
}