"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
const glamor_1 = require("glamor");
const react_fashion_1 = require("react-fashion");
function RFG(a) {
    const { rule = [], cn = (p) => [] } = a, rest = __rest(a, ["rule", "cn"]);
    const baseCn = glamor_1.css(rule).toString();
    const eCn = (p) => [baseCn, ...cn(p)];
    return react_fashion_1.RF(Object.assign({ cn: eCn }, rest));
}
exports.RFG = RFG;
function RFGF(a) {
    return react_fashion_1.wrapWithCreateFactory(RFG)(a);
}
exports.RFGF = RFGF;
