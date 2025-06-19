import * as Adder from "@adder/business-rules";
import { type AddRequest, type AddResponse } from "@adder/http-interfaces";
import { onCall, type CallableRequest } from "firebase-functions/v2/https";

const add = onCall((req: CallableRequest<AddRequest>): AddResponse => {
  const result = Adder.add(req.data.a, req.data.b);

  return { result: result };
});

export const adder = { add };
