import { User } from "./User";

// FACT 019 remember: interfaces doesnt exist on execution time
// that is why DIOD propose the use of abstacts instead of interfaces
export abstract class UserRepository {
  abstract getAll(): User[];
}
