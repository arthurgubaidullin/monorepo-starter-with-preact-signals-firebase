import { Adder } from "@adder/in-browser-service";
import { getFunctions, type Functions } from "firebase/functions";

export class Factory {
  #adder: Adder | null = null;

  get functions(): Functions {
    return getFunctions();
  }

  get adder(): Adder {
    if (!this.#adder) {
      this.#adder = new Adder(this);
    }

    return this.#adder;
  }
}
