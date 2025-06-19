import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";
import { add } from "@adder/business-rules";

export const helloWorld = onRequest((request, response) => {
  const a = 2;
  const b = 2;

  logger.debug("Хочешь пирожок?", { a, b, result: add(a, b) });

  response.send("Hello from Firebase Function!").end();
});
