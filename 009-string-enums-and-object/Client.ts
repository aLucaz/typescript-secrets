import { Log } from "./Log";
import { LogLevel } from "./LogLevel";
import { printLogMessage } from "./printLogMessage";

/**
 * FACT 014
 * 
 * enum can be used as string also.
 * 
 */

const infoLog = new Log("Message sent successfully", LogLevel.INFO);

printLogMessage(infoLog);