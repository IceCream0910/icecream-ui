import { p as s, D as d } from "../../util-BTUNPfJ8.js";
/* empty css                                  */
var l = "ic-xzu7hf0";
let n = globalThis.HTMLElement || class {
};
typeof window < "u" && (n = window.HTMLElement);
const i = class i extends n {
  constructor() {
    super(), this.inputElement = this.buildInput();
  }
  buildInput() {
    if (typeof window < "u") {
      const e = document.createElement("input");
      return e.setAttribute("type", "checkbox"), e.classList.add(l), e;
    }
    return null;
  }
  connectedCallback() {
    typeof window < "u" && (this.inputElement && this.appendChild(this.inputElement), this.setAttribute("role", "checkbox"), s(this.inputElement, this, ["checked", "disabled"]));
  }
};
i.observedAttributes = ["checked", "disabled"];
let t = i;
typeof window < "u" && d.define("ic-checkbox", t);
const c = typeof window < "u" ? "ic-checkbox" : () => null;
export {
  c as default
};
//# sourceMappingURL=index.js.map
