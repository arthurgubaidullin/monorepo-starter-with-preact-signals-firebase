import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import * as Adder from "@adder/business-rules";

const add = onRequest((request, response) => {
  const a = 2;
  const b = 2;
  const result = Adder.add(a, b);

  logger.debug("Хочешь пирожок?", { a, b, result });

  response.json({ a, b, result: result }).end();
});

export const adder = { add };
