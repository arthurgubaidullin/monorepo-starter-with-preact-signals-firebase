import { Adder } from "@adder/in-browser-service";
import { Factory } from "./factory";

const factory: Factory = new Factory();

export const adder = (): Adder => factory.adder;
