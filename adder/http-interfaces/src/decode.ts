import * as E from "fp-ts/Either";
import { pipe } from "fp-ts/function";
import * as t from "io-ts";

export const decode =
  <Codec extends t.Mixed>(codec: Codec, errorMessage: string) =>
  (data: unknown): E.Either<Error, t.TypeOf<Codec>> =>
    pipe(
      data,
      codec.decode,
      E.mapLeft(
        (errors) =>
          new Error(errorMessage, {
            cause: new Error(errors.join("\n")),
          })
      )
    );
