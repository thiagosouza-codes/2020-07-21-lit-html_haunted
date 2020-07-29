import { html } from "https://unpkg.com/lit-html/lit-html.js";
import { component, useState } from "https://unpkg.com/haunted/haunted.js";

function CustomApp() {
  return html`
    <style>
      main {
        display: flex;
        justify-content: center;
        align-items: center;

        background-color: #222;
        width: 100%;
        height: 100vh;
      }
    </style>
    <main>
      <custom-counter button-text="Incrementar"></custom-counter>
    </main>
  `;
}

window.customElements.define("custom-app", component(CustomApp));

function CustomCounter({ buttonText }) {
  const [counter, setCounter] = useState(0);

  const handlebutton = () => {
    setCounter(counter + 1);
  };

  return html`
    <style>
      main {
        display: flex;
        align-items: center;
        flex-direction: column;
        color: #fff;
      }

      button {
        background-color: #397;
        border: none;
        border-radius: 4px;
        padding: 12px;
        cursor: pointer;
        color: #fff;
      }

      button:hover {
        background-color: #286;
      }
    </style>
    <main>
      <h1>${counter}</h1>
      <button @click=${handlebutton}>${buttonText}</button>
    </main>
  `;
}

window.customElements.define(
  "custom-counter",
  component(CustomCounter, { observedAttributes: ["button-text"] })
);
