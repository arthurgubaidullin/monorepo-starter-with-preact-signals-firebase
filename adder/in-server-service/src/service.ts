import { type AddRequest, type AddResponse } from "@adder/http-interfaces";
import { add } from "@adder/business-rules";
import type { Info } from "./logger";

export class Adder {
  #logger: Info;

  constructor(logger: Info) {
    this.#logger = logger;
  }

  add(this: this, data: AddRequest): AddResponse {
    this.#logger.info(`I add the number ${data.a} to the number ${data.b}.`);

    const result = add(data.a, data.b);

    this.#logger.info(`The result is ${result}.`);

    return { result };
  }
}
