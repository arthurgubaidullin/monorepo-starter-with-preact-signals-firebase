import { getApp, type FirebaseApp } from "firebase/app";
import { Adder } from "@adder/in-browser-service";
import { getFunctions } from "firebase/functions";

export class Factory {
  #app: FirebaseApp;
  #adder: Adder;

  constructor() {
    this.#app = getApp();
    this.#adder = new Adder(getFunctions(this.#app));
  }

  get adder(): Adder {
    return this.#adder;
  }
}
