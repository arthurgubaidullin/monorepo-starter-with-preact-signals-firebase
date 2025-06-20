import * as E from "fp-ts/Either";
import * as t from "io-ts";
import { decode } from "./decode";

export type AddRequest = t.TypeOf<typeof AddRequest>;

const AddRequest: t.ReadonlyC<
  t.ExactC<
    t.TypeC<{
      a: t.NumberC;
      b: t.NumberC;
    }>
  >
> = t.readonly(
  t.strict({
    a: t.number,
    b: t.number,
  })
);

export const decodeAddRequest: (data: unknown) => E.Either<Error, AddRequest> =
  decode(AddRequest, "Failed to decode request.");

export type AddResponse = t.TypeOf<typeof AddResponse>;

const AddResponse: t.ReadonlyC<
  t.ExactC<
    t.TypeC<{
      result: t.NumberC;
    }>
  >
> = t.readonly(
  t.strict({
    result: t.number,
  })
);

export const decodeAddResponse: (
  data: unknown
) => E.Either<Error, AddResponse> = decode(
  AddResponse,
  "Failed to decode response."
);
