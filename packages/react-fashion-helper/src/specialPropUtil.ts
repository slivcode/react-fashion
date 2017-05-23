import { CSSProperties } from 'react';
const toPairs = (o) => Object.keys(o).map(k => [k, o[k]]);
const objToStrFn = (f, t) => (o) => toPairs(o).map(f).join(t);
const quotedObjToStrFn = objToStrFn(([k, v]) => `${k}(${v})`, ' ');
export const transitionStr: (o: Partial<Record<keyof CSSProperties, string>>) => string =
  objToStrFn(([k, v]) => `${k} ${v}`, ', ');
export type T_filterProps = {
  none,
  blur,
  brightness,
  contrast,
  'drop-shadow',
  grayscale,
  'hue-rotate',
  'invert',
  'opacity',
  'saturate',
  'sepia',
  'url'
  [s: string]: any
};
export const filterStr: (o: Partial<Record<keyof T_filterProps, string | number>>) => string =
  quotedObjToStrFn;
export type T_transformProps = {
  matrix
  translate
  translateX
  translateY
  scale
  scaleX
  scaleY
  rotate
  skew
  skewX
  skewY
  matrix3d
  translate3d
  translateZ
  scale3d
  scaleZ
  rotate3d
  rotateX
  rotateY
  rotateZ
  perspective
  [s: string]: any
};
export const transformStr: (o: Partial<Record<keyof T_transformProps, string | number>>) => string =
  quotedObjToStrFn;