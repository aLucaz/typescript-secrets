/*
  FACT 005
  private & readonly ONLY exist in ts and during the transpile time, 
  it help us to do better code and in the js result it doesnt exist
*/

export class Codelyber {
  private GREETING = "Hi";
  constructor(private readonly name: string) {}

  greet(): string {
    return `${this.GREETING} ${this.name} from Codely TypeScript Basic Skeleton!`;
  }
}