import { CSSProperties } from 'react';
import { T_filterProps, T_transformProps } from './types';
const toPairs = (o) => Object.keys(o).map(k => [k, o[k]]);
const objToStrFn = (f, t) => (o) => toPairs(o).map(f).join(t);
const quotedObjToStrFn = objToStrFn(([k, v]) => `${k}(${v})`, ' ');
export const RFHSpecialProp: {
  transition: (o: Partial<Record<keyof CSSProperties, any>>) => string,
  filter: (o: Partial<Record<keyof T_filterProps, any>>) => string,
  transform: (o: Partial<Record<keyof T_transformProps, any>>) => string
} = {
  transition: objToStrFn(([k, v]) => `${k} ${v}`, ', '),
  filter: quotedObjToStrFn,
  transform: quotedObjToStrFn,
};