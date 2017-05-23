import { createFactory } from 'react';
export function wrapWithCreateFactory (f) {
  return function (a) {
    const original = f(a);
    return Object.assign(createFactory(original), { original });
  };
}