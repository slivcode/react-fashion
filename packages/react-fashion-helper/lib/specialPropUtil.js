"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const toPairs = (o) => Object.keys(o).map(k => [k, o[k]]);
const objToStrFn = (f, t) => (o) => toPairs(o).map(f).join(t);
const quotedObjToStrFn = objToStrFn(([k, v]) => `${k}(${v})`, ' ');
exports.transitionStr = objToStrFn(([k, v]) => `${k} ${v}`, ', ');
exports.filterStr = quotedObjToStrFn;
exports.transformStr = quotedObjToStrFn;
