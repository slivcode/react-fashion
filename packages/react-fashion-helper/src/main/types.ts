export type T_filterProps = {
  none,
  blur,
  brightness,
  contrast,
  'drop-shadow',
  grayscale,
  'hue-rotate',
  'invert',
  'opacity',
  'saturate',
  'sepia',
  'url'
  [s: string]: any
};
export type T_transformProps = {
  matrix
  translate
  translateX
  translateY
  scale
  scaleX
  scaleY
  rotate
  skew
  skewX
  skewY
  matrix3d
  translate3d
  translateZ
  scale3d
  scaleZ
  rotate3d
  rotateX
  rotateY
  rotateZ
  perspective
  [s: string]: any
};
export type T_SpPropFn<A> = (o: Partial<Record<keyof A, any>>) => string;