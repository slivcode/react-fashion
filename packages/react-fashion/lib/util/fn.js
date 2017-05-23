"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.identity = i => i;
exports.flatten = (a) => a.reduce((pr, ne) => pr.concat(Array.isArray(ne) ? exports.flatten(ne) : ne), []);
exports.compact = a => a.filter(exports.identity);
exports.applyIf = (b, f) => b ? f : exports.identity;
exports.mergeObjArr = (a) => a.reduce((pr, ne) => Object.assign(pr, ne), {});
exports.pipe = (...fs) => t => fs.reduce((pr, ne) => ne(pr), t);
exports.partitionObj = (lKey, o) => {
    const isInL = k => lKey.indexOf(k) !== -1;
    return Object.keys(o).reduce((pr, ne) => {
        pr[isInL(ne) ? 0 : 1][ne] = o[ne];
        return pr;
    }, [{}, {}]);
};
exports.objOf = k => v => ({ [k]: v });
exports.join = t => s => s.join(t);
