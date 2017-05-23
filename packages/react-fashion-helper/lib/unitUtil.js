"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * apply operation on a united number such as 12px
 * unitOp(s => s * 2)('12px') => '24px'
 * @param f operation function
 */
exports.unitOp = (f) => (s) => s.replace(/(\d|\.)+/, (s) => String(f(Number(s))));
