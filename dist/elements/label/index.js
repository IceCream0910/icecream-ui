import { SUBTITLE as E, SMALL_TEXT as a } from "../typo/index.js";
import { D as f } from "../../util-BTUNPfJ8.js";
/* empty css                                  */
var u = "ic-zjni4m0", p = "ic-zjni4m1", h = "ic-zjni4m2", g = "ic-zjni4m3";
let c = globalThis.HTMLElement || class {
};
typeof window < "u" && (c = window.HTMLElement);
const m = class m extends c {
  constructor() {
    super(), this._labelElement = null, this._titleElement = null, this._descriptionElement = null, this._messageElement = null;
  }
  connectedCallback() {
    typeof window < "u" && (this.labelElement && this.insertBefore(this.labelElement, this.firstChild), this.messageElement && this.append(this.messageElement));
  }
  attributeChangedCallback(e, t, i) {
    var o, s, r, d;
    if (typeof window < "u") {
      if (e === "title")
        this.titleElement.textContent = i || "";
      else if (e === "description")
        if (!i)
          (o = this._descriptionElement) == null || o.remove(), this._descriptionElement = null;
        else {
          const n = this.descriptionElement;
          n && (n.textContent = i, (r = (s = this._labelElement) == null ? void 0 : s.appendChild) == null || r.call(s, n));
        }
      else if (e === "message")
        if (!i)
          (d = this._messageElement) == null || d.remove(), this._messageElement = null;
        else {
          const n = this.messageElement;
          n && (n.textContent = i, this.append(n));
        }
    }
  }
  get labelElement() {
    if (typeof window < "u") {
      if (this._labelElement)
        return this._labelElement;
      const e = document.createElement("label");
      e.classList.add(p), e.append(this.titleElement);
      const t = this.descriptionElement;
      return t && e.append(t), this._labelElement = e, e;
    }
    return null;
  }
  get titleElement() {
    if (typeof window < "u") {
      if (this._titleElement)
        return this._titleElement;
      const e = document.createElement(E);
      return e.textContent = this.getAttribute("title") || "NO TITLE", e.classList.add(u), this._titleElement = e, e;
    }
    return null;
  }
  get descriptionElement() {
    if (typeof window < "u") {
      if (this._descriptionElement)
        return this._descriptionElement;
      const e = document.createElement(a), t = this.getAttribute("description");
      return t ? (e.textContent = t, e.classList.add(h), this._descriptionElement = e, e) : null;
    }
    return null;
  }
  get messageElement() {
    if (typeof window < "u") {
      if (this._messageElement)
        return this._messageElement;
      const e = this.getAttribute("message");
      if (!e)
        return null;
      const t = document.createElement(a);
      return t.textContent = e, t.classList.add(g), this._messageElement = t, t;
    }
    return null;
  }
};
m.observedAttributes = ["title", "message", "description"];
let l = m;
typeof window < "u" && f.define("ic-label", l);
const C = typeof window < "u" ? "ic-label" : () => null;
export {
  C as default
};
//# sourceMappingURL=index.js.map
