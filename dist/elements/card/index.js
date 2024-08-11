import { D as r } from "../../util-BTUNPfJ8.js";
/* empty css                                  */
var l = "ic-1ry269n0";
let d = globalThis.HTMLElement || class {
};
typeof window < "u" && (d = window.HTMLElement);
const i = class i extends d {
  constructor() {
    super();
  }
  connectedCallback() {
    this.setAttribute("role", "card"), this.classList.add(l);
  }
  attributeChangedCallback(s, o, t) {
    if (o === t) return;
    const n = t === null ? "0rem" : +t + "rem";
    s === "p" && this.style.setProperty("padding", n), s === "g" && this.style.setProperty("gap", n);
  }
};
i.observedAttributes = ["p", "g"];
let e = i;
typeof window < "u" && r.define("ic-card", e);
const p = typeof window < "u" ? "ic-card" : () => null;
export {
  p as default
};
//# sourceMappingURL=index.js.map
