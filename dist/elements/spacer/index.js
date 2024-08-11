import { D as o } from "../../util-BTUNPfJ8.js";
var f = "ic-1flsu8i0";
let l = globalThis.HTMLElement || class {
};
typeof window < "u" && (l = window.HTMLElement);
const i = class i extends l {
  constructor() {
    super();
  }
  connectedCallback() {
    this.classList.add(f);
  }
  attributeChangedCallback(s, d, t) {
    if (d === t) return;
    const n = t === null ? "0px" : +t + "px";
    s === "x" && this.style.setProperty("width", n), s === "y" && this.style.setProperty("height", n);
  }
};
i.observedAttributes = ["x", "y"];
let e = i;
typeof window < "u" && o.define("ic-spacer", e);
const a = typeof window < "u" ? "ic-spacer" : () => null;
export {
  a as default
};
//# sourceMappingURL=index.js.map
