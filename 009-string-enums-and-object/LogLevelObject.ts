/**
 * notes
 * 
 * 1. object allows that, even if i dont use const,
 * the object cannot be re-declared like with enums
 * 
 * 2. the const in the declaration means that the
 * value cannot be reassigned to the variable
 * 
 * 3. the 'as const' in the declaration means
 * that i cannot change the inner properties
 * of the function
 * 
 * 4. this can be used in EVERY object declaration
 * 
 * 5. typeof LogLevelObject generates a type based on a object
 * 
 * 6. keyof extract the keys of an object
 * 
 * this code is made to try to simulate enums with object
 */
export const LogLevelObject = {
  WARN: "WARN",
  INFO: "INFO",
  ERROR: "ERROR",
  DEBUG: "DEBUG",
} as const;

export type LogLevel = keyof typeof LogLevelObject;