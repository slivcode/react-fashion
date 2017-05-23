/// <reference types="react" />
export declare function wrapWithCreateFactory(f: any): (a: any) => React.ComponentFactory<{}, React.Component<{}, React.ComponentState>> & {
    original: any;
};
