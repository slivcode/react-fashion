/// <reference types="react" />
import { CSSProperties, HTMLProps, SFC, SFCFactory } from 'react';
export declare type T_RFArg<P> = {
    displayName?: string;
    tag?: string | any;
    defaultProps?: Partial<P>;
    propTypes?: Partial<Record<keyof P, any>>;
    contextTypes?;
    cn?: (p: P) => (string | boolean)[];
    style?: (p: P) => (CSSProperties)[];
    nullIf?: (p: P) => boolean;
    decorator?: Function[];
};
export declare function RF<P>(o: T_RFArg<P>): SFC<P & HTMLProps<any>>;
export declare function RFF<P>(a: T_RFArg<P>): SFCFactory<P & HTMLProps<any>> & {
    original: SFC<P & HTMLProps<any>>;
};
