import _ from "../util/index";
import { DOM, RETURN_FALSE } from "../const";
import { MethodError } from "../errors";
import SelectorMatcher from "../util/selectormatcher";
import HOOK from "../util/selectorhooks";

DOM.register({
    /**
     * Check if the element matches selector
     * @memberof! $Element#
     * @alias $Element#matches
     * @param  {String}   selector  css selector for checking
     * @return {Boolean} returns <code>true</code> if success and <code>false</code> otherwise
     * @example
     * DOM.find("body").matches("html>body"); // => true
     * DOM.find("body").matches("body>html"); // => false
     */
    matches(selector) {
        if (!selector || typeof selector !== "string") throw new MethodError("matches", arguments);

        var checker = HOOK[selector] || SelectorMatcher(selector);

        return !!checker(this[0]);
    }
}, null, () => RETURN_FALSE);
