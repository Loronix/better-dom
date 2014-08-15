import { WINDOW, HTML } from "./constants";

/**
 * Used to represent a DOM element
 * @class $Element
 * @private
 */
function $Element(node) {
    if (node && node.__dom__) return node.__dom__;

    if (this instanceof $Element) {
        if (node) this[0] = node.__dom__ = this;

        this._ = { _node: node, _handlers: [] };
        this.length = node ? 1 : 0;
    } else {
        return new $Element(node);
    }
}

$Element.prototype.toString = function() {
    var node = this._._node;

    return node ? node.tagName.toLowerCase() : "";
};

/**
 * Global object to access DOM
 * @namespace DOM
 * @extends $Element
 */
var DOM = new $Element(HTML);

DOM.version = "<%= pkg.version %>";

WINDOW.DOM = DOM; /* expose DOM namespace globally */

export { $Element, DOM };
