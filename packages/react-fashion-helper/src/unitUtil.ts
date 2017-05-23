/**
 * apply operation on a united number such as 12px
 * unitOp(s => s * 2)('12px') => '24px'
 * @param f operation function
 */
export const unitOp = (f: (n: number) => number) => (s: string) => s.replace(/(\d|\.)+/, (s) => String(f(Number(s))));