import { css } from 'glamor';
import { CSSProperties, HTMLProps, SFC } from 'react';
import { RF, T_RFArg, wrapWithCreateFactory } from 'react-fashion';
export type T_RFGArg<P> = { rule?: (CSSProperties)[] } & T_RFArg<P>

export function RFG<P> (a: T_RFGArg<P>): SFC<P & HTMLProps<any>> {
  const { rule = [], cn = (p) => [], ...rest } = a;
  const baseCn = css(rule).toString();
  const eCn = (p) => [baseCn, ...cn(p)];
  return RF({
    cn: eCn,
    ...rest,
  });
}

export function RFGF<P> (a: T_RFGArg<P>): SFC<P & HTMLProps<any>> {
  return wrapWithCreateFactory(RFG)(a);
}