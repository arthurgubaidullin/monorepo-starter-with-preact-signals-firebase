import { Adder } from "@adder/in-server-service";
import { logger } from "firebase-functions";

export class Factory {
  #adder: Adder | null = null;

  get logger(): typeof logger {
    return logger;
  }

  get adder(): Adder {
    if (!this.#adder) {
      this.#adder = new Adder(this);
    }

    return this.#adder;
  }
}
