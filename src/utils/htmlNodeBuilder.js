export default class HtmlNodeBuilder {
    constructor(tagName) {
        this.$node = document.createElement(tagName);
    }

    addClassName(className) {
        this.$node.className = className;
        return this;
    }

    addInnerHTML(text) {
        this.$node.innerHTML = text;
        return this;
    }

    addChildNode($node) {
        this.$node.appendChild($node);

        return this;
    }

    build() {
        return this.$node;
    }
}