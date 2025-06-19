import { signal, type Signal } from "@preact/signals";
import {
  httpsCallable,
  type Functions,
  type HttpsCallable,
} from "firebase/functions";
import { type AddRequest, type AddResponse } from "@adder/http-interfaces";

export class Adder {
  #add: HttpsCallable<AddRequest, AddResponse, unknown>;
  #result: Signal<number | null> = signal(null);

  constructor(functions: Functions) {
    this.#add = httpsCallable(functions, "adder-add");
  }

  get result(): number | null {
    return this.#result.value;
  }

  async add(this: this, a: number, b: number): Promise<void> {
    this.#result.value = null;

    try {
      const response = await this.#add({ a, b });

      this.#result.value = response.data.result;
    } catch (error) {
      console.error(error);
    }
  }
}
