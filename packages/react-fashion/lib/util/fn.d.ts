export declare const identity: (i: any) => any;
export declare const flatten: (a: any) => any;
export declare const compact: (a: any) => any;
export declare const applyIf: (b: any, f: any) => any;
export declare const mergeObjArr: (a: Object[]) => Object;
export declare const pipe: (...fs: any[]) => (t: any) => any;
export declare const partitionObj: <O extends Object>(lKey: string[], o: O) => [Partial<O>, Partial<O>];
export declare const objOf: (k: any) => (v: any) => {
    [x: number]: any;
};
export declare const join: (t: any) => (s: any) => any;
