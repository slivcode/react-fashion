export const identity = i => i;
export const flatten = (a) => a.reduce((pr, ne) =>
  pr.concat(Array.isArray(ne) ? flatten(ne) : ne), []);
export const compact = a => a.filter(identity);
export const applyIf = (b, f) => b ? f : identity;
export const mergeObjArr = (a: Object[]) =>
  a.reduce((pr, ne) => Object.assign(pr, ne), {});
export const of = a => Array.isArray(a) ? a : [a];
export const pipe = (...fs) => t => fs.reduce((pr, ne) => ne(pr), t);
export const partitionObj = <O extends Object> (lKey: string[], o: O) => {
  const isInL = k => lKey.indexOf(k) !== -1;
  return Object.keys(o).reduce((pr, ne) => {
    pr[isInL(ne) ? 0 : 1][ne] = o[ne];
    return pr;
  }, [{}, {}]) as [Partial<O>, Partial<O>];
};
export const objOf = k => v => ({ [k]: v });
export const join = t => s => s.join(t);