"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
function wrapWithCreateFactory(f) {
    return function (a) {
        const original = f(a);
        return Object.assign(react_1.createFactory(original), { original });
    };
}
exports.wrapWithCreateFactory = wrapWithCreateFactory;
