/**
 * FACT 015
 * 
 * a good way to detect errors on development time, is when you 
 * guard your parameters and methods with a validation
 * in this case we are validating that the string parameter
 * is a keyof for the enum Operator.
 */


/* eslint-disable @typescript-eslint/no-unused-vars */
import { FilterOperator } from "./FilterOperator";
import { FilterOperatorKeyof } from "./FilterKeyof";

/* 1 - Filter operator without keyof */

const gtFilter = FilterOperator.fromValue("GT");

const invalidFilter = FilterOperator.fromValue("INVALID_FILTER"); // it is not showing an error

/* 2 - Filter operator with keyof */

const ltFilter = FilterOperatorKeyof.fromValue("LT");

const imposibleInvalidFilter = FilterOperatorKeyof.fromValue("INVALID_FILTER");