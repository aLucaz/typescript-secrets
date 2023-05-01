import { UseCase } from "./UseCase";
import { User } from "./User";
import { UserRepository } from "./UserRepository";

// FACT 019 look how DIOD allows you to create your own decoratos
// this avoids to couple your services, useCases, with the DI library
@UseCase()
export class UserSearcher {
  constructor(private readonly userRepository: UserRepository) {}

  search(): User[] {
    return this.userRepository.getAll();
  }
}
