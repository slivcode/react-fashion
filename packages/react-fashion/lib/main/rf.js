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
const react_1 = require("react");
const fn_1 = require("../util/fn");
const wrapWithCreateFactory_1 = require("./wrapWithCreateFactory");
function RF(o) {
    const { tag = 'div', propTypes, cn, style: _s, nullIf = () => false, decorator } = o, rest = __rest(o, ["tag", "propTypes", "cn", "style", "nullIf", "decorator"]);
    const applyCn = fn_1.applyIf(cn, fn_1.pipe(cn, fn_1.flatten, fn_1.compact, fn_1.join(' ')));
    const applyStyle = fn_1.applyIf(_s, fn_1.pipe(_s, fn_1.flatten, fn_1.compact, fn_1.mergeObjArr));
    const applyDecorator = fn_1.applyIf(decorator, s => fn_1.pipe(...decorator)(s));
    const pK = Object.keys(propTypes || {});
    const RFStatelessComponent = applyDecorator((p) => {
        const [eP, dP] = fn_1.partitionObj(pK, p);
        if (nullIf(eP))
            return null;
        const className = applyCn(eP);
        const style = applyStyle(eP);
        return react_1.createElement(tag, Object.assign({ className,
            style }, dP));
    });
    return Object.assign(RFStatelessComponent, Object.assign({ propTypes }, rest));
}
exports.RF = RF;
function RFF(a) {
    return wrapWithCreateFactory_1.wrapWithCreateFactory(RF)(a);
}
exports.RFF = RFF;
