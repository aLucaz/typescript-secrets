import { AggregateRoot } from "./AggregateRoot";

/**
 * FACT 009
 * 
 * This abstraction can be dangerous at this point,
 * is useful but is better to wait until we have all our repositories 
 */
export interface Repository<T extends AggregateRoot> {
  search(item: T): T | null;

  save(item: T): void;

  delete(item: T): void;

  update(item: T): void;
}