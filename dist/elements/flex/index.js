import { D as f } from "../../util-BTUNPfJ8.js";
/* empty css                                  */
var o = "ic-10k57600", a = "ic-10k57601";
let s = globalThis.HTMLElement || class {
};
typeof window < "u" && (s = window.HTMLElement);
const n = class n extends s {
  connectedCallback() {
    typeof window < "u" && this.classList.add(o);
  }
  attributeChangedCallback(i, p, e) {
    typeof window < "u" && (i === "gap" ? this.style.gap = e + "rem" : i === "p" ? this.style.padding = e + "rem" : i === "px" ? this.style.paddingInline = e + "rem" : i === "py" && (this.style.paddingBlock = e + "rem"));
  }
};
n.observedAttributes = ["gap", "p", "px", "py"];
let t = n;
const y = typeof window < "u" ? "ic-horz" : () => null;
typeof window < "u" && f.define(y, t);
const l = class l extends s {
  connectedCallback() {
    typeof window < "u" && this.classList.add(a);
  }
  attributeChangedCallback(i, p, e) {
    typeof window < "u" && (i === "gap" ? this.style.gap = e + "rem" : i === "p" ? this.style.padding = e + "rem" : i === "px" ? this.style.paddingInline = e + "rem" : i === "py" && (this.style.paddingBlock = e + "rem"));
  }
};
l.observedAttributes = ["gap", "p", "px", "py"];
let d = l;
const h = typeof window < "u" ? "ic-vert" : () => null;
typeof window < "u" && f.define(h, d);
export {
  y as horz,
  h as vert
};
//# sourceMappingURL=index.js.map
