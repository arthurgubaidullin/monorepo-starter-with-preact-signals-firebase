import { Adder } from "@adder/in-server-service";
import { logger } from "firebase-functions";

export class Factory {
  get logger(): typeof logger {
    return logger;
  }

  get adder(): Adder {
    return new Adder(this);
  }
}
