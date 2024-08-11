import { D as n } from "../../util-BTUNPfJ8.js";
import { t as c, s as o, a as i, b as a, c as l } from "../../style.css-B7i2xZU0.js";
const d = t("ic-title", c), f = t("ic-small-text", o), m = t("ic-subtitle", i), u = t("ic-text", a), E = t("ic-token", l);
function t(e, s) {
  return typeof window < "u" && n.define(
    e,
    class extends HTMLElement {
      constructor() {
        super();
      }
      connectedCallback() {
        this.classList.add(s);
      }
    }
  ), e;
}
export {
  f as SMALL_TEXT,
  m as SUBTITLE,
  u as TEXT_CONTENT,
  d as TITLE,
  E as TOKEN
};
//# sourceMappingURL=index.js.map
