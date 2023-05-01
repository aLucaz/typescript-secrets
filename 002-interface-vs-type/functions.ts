/*
  FACT 006
  types and interfaces can be used to solve similar problems
  ts documentation prefers interfaces over types
*/

interface SayHi {
  (name: string) : string;
}

type sayHiType = (name: string) => string

const sayHiCall01: SayHi = (name: string) => {
  return `Hello my name is ${name}`;
}

const sayHiCall02: sayHiType = function (name) {
  return `Hello my name is ${name}`;
}

sayHiCall01("HI")
sayHiCall02("HI x2")

