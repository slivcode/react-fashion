/**
 * apply operation on a united number such as 12px
 * unitOp(s => s * 2)('12px') => '24px'
 * @param f operation function
 */
const unitOp = (f: (n: number) => number) => (s: string) => s.replace(/(\d|\.)+/, (s) => String(f(Number(s))));
const t = (s) => (v) => `${v}${t}`;

export const RFHUnit = {
  unitOp,
  units: (function () {
    const o = { 'percent': t('%') };
    const units = ['cm', 'em', 'ex', 'in', 'mm', 'pc', 'pt', 'px', 'vh', 'vw', 'vmin'];
    units.forEach(u => o[u] = t(u));
    return o as {
      'percent', 'cm', 'em', 'ex', 'in', 'mm', 'pc', 'pt', 'px', 'vh', 'vw', 'vmin'
    };
  })(),
};