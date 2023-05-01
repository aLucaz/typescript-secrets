export const enum LogLevel {
  WARN = "WARN",
  INFO = "INFO",
  ERROR = "ERROR",
  DEBUG = "DEBUG",
}
/**
 * note
 * if we dont use const in enum, we well be
 * able to re-declare the enum, and
 * the final result will be the combination
 * of both declarations
 */