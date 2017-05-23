"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ifElseBlank = (b, s) => b ? s : '';
const toPercent = s => `${s * 100}%`;
const genColor = (t) => (x, y, z, a) => `${t}${ifElseBlank(a, 'a')}(${x},${y},${z}${ifElseBlank(a, `,${a}`)})`;
const genHsl = genColor('hsl');
/**
 * generate hsl, s, l < 1 and automatically convert to percent
 * @param h
 * @param s
 * @param l
 * @param a
 * @returns {string}
 */
exports.hslaStr = (h, s, l, a) => genHsl(h, toPercent(s), toPercent(l));
exports.rgbaStr = genColor('rgb');
