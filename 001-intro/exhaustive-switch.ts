/*
  FACT 003
  the usage of enums in a switch case can be more dev-secure
  using a method that receives a 'never' parameter
*/

export const enum CourseCategory {
  FRONTEND,
  BACKEND,
  BEST_PRACTICES,
}

const frontendCourseCategory = CourseCategory.FRONTEND;

export function print(courseCategory: CourseCategory) {
  switch (courseCategory) {
    case CourseCategory.FRONTEND:
      return "This is the frontend course category";
    case CourseCategory.BACKEND:
      return "This is the backend course category";
    case CourseCategory.BEST_PRACTICES:
      return "This is the backend course category";
    default:
      assertNever(courseCategory);
  }
}

function assertNever(value: never) {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
}

print(frontendCourseCategory);