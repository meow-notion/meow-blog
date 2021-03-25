import { createContext } from 'react';

/**
 * 泛型约束，对注入数据的类型推断支持
 *
 * @template T
 * @param {(...args: any) => T} _useFunc
 * @param {(T | undefined)} [initialData=undefined]
 * @returns
 */
export const getServiceToken = <T extends unknown>(
  _useFunc: (...args: any) => T,
  initialData: T | undefined = undefined,
) => {
  return createContext(initialData as T);
};
