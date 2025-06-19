import { type AddRequest, type AddResponse } from "@adder/http-interfaces";
import * as Factory from "@factory/in-server";
import { onCall, type CallableRequest } from "firebase-functions/v2/https";

const add = onCall((req: CallableRequest<AddRequest>): AddResponse => {
  const adder = Factory.adder();

  return adder.add(req.data);
});

export const adder = { add };
