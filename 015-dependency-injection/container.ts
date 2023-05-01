import { ContainerBuilder } from "diod";

import { InMemoryUserRepository } from "./InMemoryUserRepository";
import { registeredUseCases } from "./UseCase";
import { UserRepository } from "./UserRepository";

const builder = new ContainerBuilder();

/**
 * FACT 019
 * diod has autowired feature which allows to automanage the dependencies 
 * without the necesity of implicit adding it as parameter of a class
 */

export const buildContainer = () => {
  builder.register(UserRepository).use(InMemoryUserRepository);

  registeredUseCases.forEach((useCase) => {
    builder.registerAndUse(useCase);
  });

  return builder.build();
};
