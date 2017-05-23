/// <reference types="react" />
import { CSSProperties, HTMLProps, SFC } from 'react';
import { T_RFArg } from 'react-fashion';
export declare type T_RFGArg<P> = {
    rule?: (CSSProperties)[];
} & T_RFArg<P>;
export declare function RFG<P>(a: T_RFGArg<P>): SFC<P & HTMLProps<any>>;
export declare function RFGF<P>(a: T_RFGArg<P>): SFC<P & HTMLProps<any>>;
