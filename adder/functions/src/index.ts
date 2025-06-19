import { logger } from "firebase-functions";
import { onRequest } from "firebase-functions/v2/https";

export const helloWorld = onRequest((request, response) => {
  logger.debug("Хочешь пирожок?");

  response.send("Hello from Firebase Function!").end();
});
