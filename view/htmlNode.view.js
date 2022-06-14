export default class HtmlNode {
    constructor(node) {
        this.$node = node;
    }

    render(text) {
        this.$node.innerHTML = text;
    }

    getNodeContent() {
        return this.$node.innerHTML;
    }

    appendNode($node) {
        this.$node.appendChild($node);

        return this;
    }
}