export const RFHLevel = {
  l3: ([s, m, l]: any[]) => ({ s, m, l }),
  l5: ([xs, s, m, l, xl]: any[]) => ({ xs, s, m, l, xl }),
  stepper: (size: number, seed, stepFn: Function) => {
    const a = [seed];
    for (let n = 1; n < size; n++) a[n] = stepFn(a[n - 1]);
    return a;
  },
};