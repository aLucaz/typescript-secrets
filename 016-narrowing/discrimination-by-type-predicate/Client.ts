/**
 * FACT 023
 * 
 * type predicate is an special function that helps ts
 * to apply narrowing! line 25
 * 
 */

import { InvalidEmailError } from "./InvalidEmailError";
import { NoEditorUserError } from "./NoEditorUserError";
import { User } from "./User";
import { UserTypes } from "./UserType";

try {
  const user = User.fromPrimitives({
    name: "Javi",
    email: "javimail.com",
    type: UserTypes.Standard,
  });

  user.createCourse();
} catch (error) {
  if (error instanceof InvalidEmailError) {
    console.warn(error.message);
  } else if (isNoEditorError(error)) {
    console.info(error.message);
  }
}
// here we are not returning 'boolean' cause we need to 
// 'hack' the ts transpiler by indicating the error type
// if we return boolean, it will throw an error, cause doesnt know
// with which class to asociate 'error'
function isNoEditorError(error: unknown): error is NoEditorUserError {
  return error instanceof NoEditorUserError;
}
