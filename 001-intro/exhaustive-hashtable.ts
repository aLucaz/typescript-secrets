/*
  FACT 002
  when you make a hashmap based on enum, an error will be showed if we dont use
  all the enum values in the map

  it can be used to ensure certain values inside the map
*/

export const enum CourseCategory {
  FRONTEND,
  BACKEND,
  BEST_PRACTICES,
}

const frontedCourseCategory = CourseCategory.FRONTEND;

const printf = (courseCategory: CourseCategory) => {
  const OPTIONS: { [key in CourseCategory]: string } = {
    [CourseCategory.FRONTEND]: 'This is the frontend course category',
    [CourseCategory.BACKEND]: 'This is the backend course category',
    [CourseCategory.BEST_PRACTICES]: 'This is the best practices course category',
  };

  return OPTIONS[courseCategory];
};

console.log(printf(frontedCourseCategory));