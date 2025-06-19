import { render } from "preact";
import "./index.css";
import { App } from "./app.tsx";
import { initializeApp } from "firebase/app";
import { connectFunctionsEmulator, getFunctions } from "firebase/functions";

const app = initializeApp({
  projectId: "demo-monorepo",
});

const functions = getFunctions(app);

connectFunctionsEmulator(functions, "127.0.0.1", 5001);

render(<App />, document.getElementById("app")!);
