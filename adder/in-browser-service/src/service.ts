import { signal, type Signal } from "@preact/signals";
import {
  httpsCallable,
  type Functions,
  type HttpsCallable,
} from "firebase/functions";
import { type AddRequest, type AddResponse } from "@adder/http-interfaces";

export class Adder {
  #addFn: HttpsCallable<AddRequest, AddResponse, unknown>;
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

      if (this.#a === a && this.#b === b) {
        this.#result.value = response.data.result;
      }
    } catch (error) {
      console.error(error);
    }
  }
}
