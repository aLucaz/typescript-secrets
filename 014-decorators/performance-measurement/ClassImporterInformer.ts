/**
 * note
 * our decorator is of any type that extends of class
 * new(...arg: any[]): {}
 * it is always executed when we do an import of our class
 * in this case we use any cause we have limitations of the unknown
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
export function ClassImporterInformer<T extends { new (...args: any[]): {} }>(
  decoratedClassInstance: T
) {
  console.info(`Importing an instance of ${decoratedClassInstance.name}`);
}
