import { D as d } from "../../util-BTUNPfJ8.js";
import { TITLE as c } from "../typo/index.js";
/* empty css                                  */
var f = "ic-lxgccj0";
let s = globalThis.HTMLElement || class {
};
typeof window < "u" && (s = window.HTMLElement);
const t = class t extends s {
  constructor() {
    super(), this.titleElement = null, typeof window < "u" && (this.titleElement = document.createElement(c));
  }
  connectedCallback() {
    typeof window < "u" && this.titleElement && (this.classList.add(f), this.insertAdjacentElement("afterbegin", this.titleElement));
  }
  attributeChangedCallback(n, a, l) {
    if (typeof window < "u" && this.titleElement) {
      if (n === "title") {
        this.titleElement.textContent = l || "";
        return;
      }
      if (n === "back") {
        const e = l !== null, o = this.titleElement.textContent || "";
        this.titleElement.textContent = (e ? "←  " : "") + o, this.titleElement.style.cursor = e ? "pointer" : "default", e ? this.titleElement.addEventListener(
          "click",
          t.onTitleClicked
        ) : this.titleElement.removeEventListener(
          "click",
          t.onTitleClicked
        );
        return;
      }
    }
  }
  static onTitleClicked() {
    typeof window < "u" && history.back();
  }
};
t.observedAttributes = ["title", "back"];
let i = t;
typeof window < "u" && d.define("ic-title-bar", i);
const h = typeof window < "u" ? "ic-title-bar" : () => null;
export {
  h as default
};
//# sourceMappingURL=index.js.map
