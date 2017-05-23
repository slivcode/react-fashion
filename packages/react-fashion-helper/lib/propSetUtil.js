"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function objOf(k) {
    return function (v) {
        return ({ [k]: v });
    };
}
exports.objOf = objOf;
function condProp(key, ...rest) {
    const t = rest.find(([b]) => b) || [];
    return objOf(key)(t[1]);
}
exports.condProp = condProp;
function statefulProp(key, o) {
    const pO = objOf(key);
    return Object.keys(o).map(k => {
        const v = o[k];
        return (k === '_') ? pO(v) : objOf(k)(pO(v));
    });
}
exports.statefulProp = statefulProp;
