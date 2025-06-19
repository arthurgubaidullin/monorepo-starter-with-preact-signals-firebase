import { Adder } from "@adder/in-server-service";
import { Factory } from "./factory";

let factory: Factory | null = null;

const get = (): Factory => {
  if (!factory) {
    factory = new Factory();
  }
  return factory;
};

export const adder = (): Adder => get().adder;
