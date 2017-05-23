const ifElseBlank = (b, s) => b ? s : '';
const toPercent = s => `${s * 100}%`;
const genColor = (t: string) => (x, y, z, a?: number) => `${t}${ifElseBlank(a, 'a')}(${x},${y},${z}${ifElseBlank(a, `,${a}`)})`;
const genHsl = genColor('hsl');
export const RFHColor = {
  genColor,
  /**
   * generate hsl, s, l < 1 and automatically convert to percent
   * @param h
   * @param s
   * @param l
   * @param a
   * @returns {string}
   */
  hsla: (h: number, s: number, l: number, a?: number) => genHsl(h, toPercent(s), toPercent(l)),
  rgba: genColor('rgb'),
};