require("./main.css");
var $iEn1Z$lit = require("lit");

function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "Button", () => $e489b17736934cf0$export$353f5b6fc5456de1);

class $e489b17736934cf0$export$353f5b6fc5456de1 extends (0, $iEn1Z$lit.LitElement) {
    static styles = (0, $iEn1Z$lit.css)`
    :host {
      display: block;
      padding: 16px;
    }
  `;
    render() {
        return (0, $iEn1Z$lit.html)` <button>Hello from t-button!</button> `;
    }
}
customElements.define("t-button", $e489b17736934cf0$export$353f5b6fc5456de1);





