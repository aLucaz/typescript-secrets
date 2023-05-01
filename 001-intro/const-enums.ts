/*
  FACT 001
  when we DONT use const to declare enums, 
  ts creates a function that receives arguments and indexes the key.
  it forces the conversion.

  using const it transpile a simpler switch case.
*/

const enum CourseCategory {
  FRONTEND,
  BACKEND,
  BEST_PRACTICES,
}

const frontendCourseCategory = CourseCategory.FRONTEND;

function printf(courseCategory: CourseCategory) {
  switch (courseCategory) {
    case CourseCategory.FRONTEND:
      return "This is the frontend course category";
    case CourseCategory.BACKEND:
      return "This is the frontend course category";
    case CourseCategory.BEST_PRACTICES:
      return "This is the frontend course category";
    default:
      return "No frontend course category";
  }
}

console.log(printf(frontendCourseCategory));