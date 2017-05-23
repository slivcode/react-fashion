import { createElement, CSSProperties, HTMLProps, SFC, SFCFactory } from 'react';
import { applyIf, compact, flatten, join, mergeObjArr, partitionObj, pipe } from '../util/fn';
import { wrapWithCreateFactory } from './wrapWithCreateFactory';
export type T_RFArg<P> = {
  displayName?: string,
  tag?: string | any,
  defaultProps?: Partial<P>
  propTypes?: Partial<Record<keyof P, any>>,
  contextTypes?
  cn?: (p: P) => (string | boolean)[]
  style?: (p: P) => (CSSProperties)[]
  nullIf?: (p: P) => boolean,
  decorator?: Function[]
}
export function RF<P> (o: T_RFArg<P>): SFC<P & HTMLProps<any>> {
  const {
    tag = 'div',
    propTypes,
    cn,
    style: _s,
    nullIf = () => false,
    decorator,
    ...rest,
  } = o;
  const applyCn = applyIf(cn, pipe(cn, flatten, compact, join(' ')));
  const applyStyle = applyIf(_s, pipe(_s, flatten, compact, mergeObjArr));
  const applyDecorator = applyIf(decorator, s => pipe(...decorator)(s));
  const pK = Object.keys(propTypes || {});
  const RFStatelessComponent = applyDecorator((p) => {
    const [eP, dP] = partitionObj(pK, p);
    if (nullIf(eP)) return null;
    const className = applyCn(eP);
    const style = applyStyle(eP);
    return createElement(tag, {
      className,
      style,
      ...dP,
    });
  });
  return Object.assign(RFStatelessComponent, { propTypes, ...rest });
}
export function RFF<P> (a: T_RFArg<P>): SFCFactory<P & HTMLProps<any>> & { original: SFC<P & HTMLProps<any>> } {
  return wrapWithCreateFactory(RF)(a) as any;
}