import { adder } from "@factory/in-browser";
import { useSignal, useSignalEffect } from "@preact/signals";
import "./app.css";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";

export function App() {
  const a = useSignal(0);
  const b = useSignal(0);

  const result = adder().result;

  useSignalEffect(() => {
    adder().add(a.value, b.value);
  });

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank" rel="noreferrer">
          <img src={preactLogo} className="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact + Signals + Firebase</h1>
      <div className="card">
        <button onClick={() => (a.value = a.peek() + 1)}>{a.value}</button>

        <span> + </span>

        <button onClick={() => (b.value = b.peek() + 1)}>{b.value}</button>

        <span> = </span>

        {result !== null ? (
          <span> {result}</span>
        ) : (
          <span className="rotating">🤷</span>
        )}

        <p>
          Edit <code>src/app.tsx</code> and save to test HMR
        </p>
      </div>
      <p>
        Check out{" "}
        <a
          href="https://preactjs.com/guide/v10/getting-started#create-a-vite-powered-preact-app"
          target="_blank"
          rel="noreferrer"
        >
          create-preact
        </a>
        , the official Preact + Vite starter
      </p>
      <p className="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}
