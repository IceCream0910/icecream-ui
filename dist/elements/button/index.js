import { D as r } from "../../util-BTUNPfJ8.js";
import { c } from "../../style.css-B7i2xZU0.js";
/* empty css                                  */
var u = "ic-cgneus0", h = "ic-cgneus1", f = "ic-cgneus2", b = "ic-cgneus3", p = "ic-cgneus4", a = "ic-cgneus5", y = "ic-cgneus6";
let l = globalThis.HTMLElement || class {
};
typeof window < "u" && (l = window.HTMLElement);
const g = {
  accent: h,
  secondary: f,
  ghost: b,
  danger: p
}, n = class n extends l {
  constructor() {
    super(), this.typeClass = null, this.loadingIcon = null, typeof window < "u" && (this.loadingIcon = document.createElement("div"), this.loadingIcon.classList.add(y), this.loadingIcon.innerHTML = `
        <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <style>.spinner_aj0A{transform-origin:center;animation:spinner_KYSC .75s infinite linear}@keyframes spinner_KYSC{100%{transform:rotate(360deg)}}</style>
        <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z" class="spinner_aj0A" fill="currentColor"/></svg>
      `);
  }
  connectedCallback() {
    typeof window < "u" && (this.addEventListener("click", () => {
      this.getAttribute("type") === "submit" && this.submit();
    }), this.addEventListener("keydown", (i) => {
      const e = i.key === "Enter", t = i.key === " ";
      !e && !t || (this.getAttribute("type") === "submit" ? this.submit() : this.click());
    }), this.setAttribute("aria-atomic", "true"), this.classList.add(u, c), this.loadingIcon && this.insertAdjacentElement("afterbegin", this.loadingIcon), this.setInitialAttributes());
  }
  submit() {
    var i, e;
    if (typeof window < "u") {
      const t = document.createElement("input");
      t.type = "submit", t.style.display = "none", (i = this.parentElement) == null || i.appendChild(t), t.click(), (e = this.parentElement) == null || e.removeChild(t);
    }
  }
  setInitialAttributes() {
    const i = this.getAttribute("type") || n.defaultType;
    this.setTypeClass(i);
    const e = this.getAttribute("disabled") !== null, t = this.getAttribute("loading") !== null;
    this.setDisability(e, t);
  }
  attributeChangedCallback(i, e, t) {
    if (i === "disabled") {
      const s = this.getAttribute("loading") !== null;
      this.setDisability(t !== null, s);
      return;
    }
    if (i === "type") {
      this.setTypeClass(t);
      return;
    }
    if (i === "loading") {
      this.setLoading(t !== null);
      const s = this.getAttribute("disabled") !== null;
      this.setDisability(s, t !== null);
      return;
    }
  }
  setTypeClass(i) {
    if (!i) return;
    this.typeClass && this.classList.remove(this.typeClass);
    const e = g[i];
    e && (this.classList.add(e), this.typeClass = e);
  }
  setDisability(i, e) {
    if (typeof window < "u") {
      const t = this.parentElement instanceof HTMLAnchorElement, s = i || e, d = t || s ? "-1" : "0";
      s ? (this.classList.add(a), this.setAttribute("aria-disabled", "true")) : (this.classList.remove(a), this.removeAttribute("aria-disabled")), this.setAttribute("tabindex", d);
    }
  }
  setLoading(i) {
    typeof window < "u" && this.loadingIcon && (i ? (this.setAttribute("aria-live", "polite"), this.setAttribute("aria-busy", "true"), this.loadingIcon.style.setProperty("display", "block")) : (this.removeAttribute("aria-live"), this.removeAttribute("aria-busy"), this.loadingIcon.style.setProperty("display", "none")));
  }
  set textContent(i) {
    if (typeof window < "u") {
      const e = Array.from(this.childNodes).filter(
        (t) => {
          var s;
          return t instanceof Text && ((s = t.textContent) == null ? void 0 : s.trim().length);
        }
      );
      for (const t of e)
        this.removeChild(t);
      this.appendChild(document.createTextNode(i));
    }
  }
};
n.observedAttributes = ["disabled", "type", "icon", "loading"], n.defaultType = "primary";
let o = n;
typeof window < "u" && r.define("ic-button", o);
const C = typeof window < "u" ? "ic-button" : () => null;
export {
  C as default
};
//# sourceMappingURL=index.js.map
