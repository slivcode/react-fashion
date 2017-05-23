export declare function objOf(k: any): (v: any) => {
    [x: number]: any;
};
export declare function condProp(key: string, ...rest: [boolean, any][]): {
    [x: number]: any;
};
export declare function statefulProp(key: string, o: any): {
    [x: number]: any;
}[];
