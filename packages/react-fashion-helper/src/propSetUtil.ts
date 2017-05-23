export function objOf (k) {
  return function (v) {
    return ({ [k]: v });
  };
}
export function condProp (key: string, ...rest: [boolean, any][]) {
  const t = rest.find(([b]) => b) || [];
  return objOf(key)(t[1]);
}
export function statefulProp (key: string, o) {
  const pO = objOf(key);
  return Object.keys(o).map(k => {
    const v = o[k];
    return (k === '_') ? pO(v) : objOf(k)(pO(v));
  });
}