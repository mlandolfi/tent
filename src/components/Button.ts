import { LitElement, html, css } from "lit";

export class Button extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html` <button>Hello from t-button!</button> `;
  }
}

customElements.define("t-button", Button);
