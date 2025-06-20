import { decodeAddRequest, type AddResponse } from "@adder/http-interfaces";
import * as Factory from "@factory/in-server";
import {
  HttpsError,
  onCall,
  type CallableRequest,
} from "firebase-functions/v2/https";
import * as E from "fp-ts/Either";
import { identity, pipe } from "fp-ts/function";

const add = onCall((req: CallableRequest<unknown>): AddResponse => {
  const adder = Factory.adder();

  const data = pipe(
    decodeAddRequest(req.data),
    E.fold((error) => {
      throw new HttpsError("failed-precondition", error.message);
    }, identity)
  );

  return adder.add(data);
});

export const adder = { add };
