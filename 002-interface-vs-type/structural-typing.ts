/* 
  FACT 007
  in this example is the same to use interface or type
  it will depends on how we understand the object, as type or interface,

  to me it has more sense as type, cause i dont have any method
*/

interface CourseI {
  title: string;
  desc: string;
}

type CourseType =  {
  title: string;
  desc: string;
}

const register: CourseI = {
  title: 'maths',
  desc: 'only numbers'
}


const register2: CourseType = {
  title: 'maths',
  desc: 'only numbers'
}
