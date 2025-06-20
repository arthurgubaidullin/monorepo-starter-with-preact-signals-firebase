import { decodeAddResponse, type AddRequest } from "@adder/http-interfaces";
import { signal, type Signal } from "@preact/signals";
import {
  httpsCallable,
  type Functions,
  type HttpsCallable,
} from "firebase/functions";
import * as E from "fp-ts/Either";
import { identity, pipe } from "fp-ts/function";

export class Adder {
  #addFn: HttpsCallable<AddRequest, unknown, unknown>;
  #a: number | null = null;
  #b: number | null = null;
  #result: Signal<number | null> = signal(null);

  constructor(factory: { functions: Functions }) {
    this.#addFn = httpsCallable(factory.functions, "adder-add");
  }

  get result(): number | null {
    return this.#result.value;
  }

  async add(this: this, a: number, b: number): Promise<void> {
    const delay = Math.round(Math.random() * 10000);

    this.#a = a;
    this.#b = b;
    this.#result.value = null;

    try {
      const response = await this.#addFn({ a, b });

      await new Promise((r) => setTimeout(r, delay));

      const data = pipe(
        response.data,
        decodeAddResponse,
        E.fold((error) => {
          throw error;
        }, identity)
      );

      if (this.#a === a && this.#b === b) {
        this.#result.value = data.result;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
