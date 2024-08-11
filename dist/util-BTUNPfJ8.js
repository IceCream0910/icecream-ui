function u(s, t, e) {
  for (const i of e) {
    const n = t.getAttribute(i);
    n !== null && s.setAttribute(i, n);
  }
}
class c {
  static define(t, e) {
    customElements.get(t) || customElements.define(t, e);
  }
}
export {
  c as D,
  u as p
};
//# sourceMappingURL=util-BTUNPfJ8.js.map
