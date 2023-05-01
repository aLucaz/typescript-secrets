/* eslint-disable @typescript-eslint/no-explicit-any */
interface Newable<T> extends Function {
  new (...args: any[]): T;
}

// FACT 019 this allows to have all my usecases registered
export const registeredUseCases: Newable<any>[] = [];

// FACT 019 here we define the decorator, always return target 
// in this case the target is any class that extends Function that has 'new' as method
export const UseCase = () => {
  return (target: Newable<any>): Newable<any> => {
    registeredUseCases.push(target);

    return target;
  };
};
