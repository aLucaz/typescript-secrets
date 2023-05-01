import express, { Request, Response } from "express";

import { fibonacci } from "./fibonacci";
import { MeasureTime } from "./MeasureTime";
import { ResponseWrapper } from "./ResponseWrapper";

const app = express();

/**
 * FACT 018
 *
 * in ts this feature is already availale
 * in javascript this feature will be available soon
 * https://github.com/tc39/proposal-decorators
 * here we are using a custom method decorator
 * 
 */
export class FibonacciGetController {
  @MeasureTime
  calculateFibonacci(
    req: Request<void, void, void, { number: string }>,
    res: Response
  ): void {
    const responseWrapper = new ResponseWrapper();
    const response = fibonacci(parseInt(req.query.number) || 1);

    const wrappedResponse = responseWrapper.wrap({ response });

    res.send(wrappedResponse);
  }
}

const controller = new FibonacciGetController();

app.get("/", controller.calculateFibonacci);

app.listen(8000);
