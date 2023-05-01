import "reflect-metadata"; // FACT 019: this provides a way to add metadata to classes, methods and properties in a declarative way

import { buildContainer } from "./container";
import { UserSearcher } from "./UserSearcher";

const container = buildContainer();

const userSearcher = container.get(UserSearcher);

console.log(userSearcher.search());
