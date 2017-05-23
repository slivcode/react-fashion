const ifElseBlank = (b, s) => b ? s : '';
const toPercent = s => `${s * 100}%`;
const genColor = (t) => (x, y, z, a?) => `${t}${ifElseBlank(a, 'a')}(${x},${y},${z}${ifElseBlank(a, `,${a}`)})`;
const genHsl = genColor('hsl');
/**
 * generate hsl, s, l < 1 and automatically convert to percent
 * @param h
 * @param s
 * @param l
 * @param a
 * @returns {string}
 */
export const hslaStr = (h: number, s: number, l: number, a?: number) => genHsl(h, toPercent(s), toPercent(l));
export const rgbaStr = genColor('rgb');
