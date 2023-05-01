/**
 * FACT 010
 * 
 * unknown is the secure alternative for any!
 * allows you to return or declare an object that you dont know
 * what type is it and then, if you want to use it, you have to 
 * cast it to a determined type.
 * 
 * its a guard for development time
 * 
 */

import { deserializeStorageAny } from "./deserializeStorageAny";
import { deserializeStorageUnkown } from "./deserializeStorageUnknown";
import { UserSettings } from "./UserSetting";

const userSettingsAny = deserializeStorageAny("userSettings");
// userSettingsAny: any

console.log(userSettingsAny.notValidProp); // ts: all ok, but we will get an error!!

const userSettings = deserializeStorageUnkown("userSettings");
// userSettingsAny: unknown

console.log(userSettings.notValidProp); // ts: object is of type unkown error

const userSettingsTyped = deserializeStorageUnkown(
  "userSettings"
) as UserSettings;
// userSettingsAny: UserSettings

console.log(userSettingsTyped.theme); // all right