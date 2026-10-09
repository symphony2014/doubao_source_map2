// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'MD' to 'MapSetPlugin'
// - Renamed export 'P2' to 'createDraft'
// - Renamed export 'QE' to 'applyPatches'
// - Renamed export 'Uy' to 'produce'
// - Renamed export '_x' to 'finishDraft'
// - Renamed export 'mv' to 'isDraft'
// - Renamed export 'vI' to 'PatchesPlugin'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 24583.e6de5b2b.js
         * chunkId: 24583
         * moduleId: 828474
         */
module.exports = function (module, exports, require) {
  var r;
  var i = Symbol.for("immer-nothing");
  var o = Symbol.for("immer-draftable");
  var a = Symbol.for("immer-state");
  function s(e) {
    var t = arguments.length;
    var n = Array(t > 1 ? t - 1 : 0);
    var r = 1;
    for (; r < t; r++) {
      n[r - 1] = arguments[r];
    }
    throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
  }
  var u = Object.getPrototypeOf;
  function c(e) {
    return !!e && !!e[a];
  }
  function l(e) {
    return !!e && (h(e) || Array.isArray(e) || !!e[o] || !!e.constructor?.[o] || y(e) || b(e));
  }
  var f = Object.prototype.constructor.toString();
  function h(e) {
    if (!e || typeof e != "object") {
      return false;
    }
    let t = u(e);
    if (t === null) {
      return true;
    }
    let n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object || typeof n == "function" && Function.toString.call(n) === f;
  }
  function d(e, t) {
    if (p(e) === 0) {
      Object.entries(e).forEach(n => {
        let [r, i] = n;
        t(r, i, e);
      });
    } else {
      e.forEach((n, r) => t(r, n, e));
    }
  }
  function p(e) {
    let t = e[a];
    if (t) {
      return t.type_;
    } else if (Array.isArray(e)) {
      return 1;
    } else if (y(e)) {
      return 2;
    } else {
      return !!b(e) * 3;
    }
  }
  function g(e, t) {
    if (p(e) === 2) {
      return e.has(t);
    } else {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
  }
  function v(e, t) {
    if (p(e) === 2) {
      return e.get(t);
    } else {
      return e[t];
    }
  }
  function m(e, t, n) {
    let r = p(e);
    if (r === 2) {
      e.set(t, n);
    } else if (r === 3) {
      e.add(n);
    } else {
      e[t] = n;
    }
  }
  function y(e) {
    return e instanceof Map;
  }
  function b(e) {
    return e instanceof Set;
  }
  function _(e) {
    return e.copy_ || e.base_;
  }
  function w(e, t) {
    if (y(e)) {
      return new Map(e);
    }
    if (b(e)) {
      return new Set(e);
    }
    if (Array.isArray(e)) {
      return Array.prototype.slice.call(e);
    }
    if (!t && h(e)) {
      if (u(e)) {
        return {
          ...e
        };
      } else {
        return Object.assign(Object.create(null), e);
      }
    }
    let n = Object.getOwnPropertyDescriptors(e);
    delete n[a];
    let r = Reflect.ownKeys(n);
    for (let t = 0; t < r.length; t++) {
      let i = r[t];
      let o = n[i];
      if (o.writable === false) {
        o.writable = true;
        o.configurable = true;
      }
      if (o.get || o.set) {
        n[i] = {
          configurable: true,
          writable: true,
          enumerable: o.enumerable,
          value: e[i]
        };
      }
    }
    return Object.create(u(e), n);
  }
  function E(e, t = false) {
    if (!x(e) && !c(e) && !!l(e)) {
      if (p(e) > 1) {
        e.set = e.add = e.clear = e.delete = S;
      }
      Object.freeze(e);
      if (t) {
        d(e, (e, t) => E(t, true), true);
      }
    }
    return e;
  }
  function S() {
    s(2);
  }
  function x(e) {
    return Object.isFrozen(e);
  }
  var k = {};
  function O(e) {
    let t = k[e];
    if (!t) {
      s(0, e);
    }
    return t;
  }
  function A(e, t) {
    if (t) {
      O("Patches");
      e.patches_ = [];
      e.inversePatches_ = [];
      e.patchListener_ = t;
    }
  }
  function T(e) {
    R(e);
    e.drafts_.forEach(M);
    e.drafts_ = null;
  }
  function R(e) {
    if (e === r) {
      r = e.parent_;
    }
  }
  function C(e) {
    return r = {
      drafts_: [],
      parent_: r,
      immer_: e,
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function M(e) {
    let t = e[a];
    if (t.type_ === 0 || t.type_ === 1) {
      t.revoke_();
    } else {
      t.revoked_ = true;
    }
  }
  function P(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    let n = t.drafts_[0];
    if (e !== undefined && e !== n) {
      if (n[a].modified_) {
        T(t);
        s(4);
      }
      if (l(e)) {
        e = D(t, e);
        if (!t.parent_) {
          I(t, e);
        }
      }
      if (t.patches_) {
        O("Patches").generateReplacementPatches_(n[a].base_, e, t.patches_, t.inversePatches_);
      }
    } else {
      e = D(t, n, []);
    }
    T(t);
    if (t.patches_) {
      t.patchListener_(t.patches_, t.inversePatches_);
    }
    if (e !== i) {
      return e;
    } else {
      return undefined;
    }
  }
  function D(e, t, n) {
    if (x(t)) {
      return t;
    }
    let r = t[a];
    if (!r) {
      d(t, (i, o) => j(e, r, t, i, o, n), true);
      return t;
    }
    if (r.scope_ !== e) {
      return t;
    }
    if (!r.modified_) {
      I(e, r.base_, true);
      return r.base_;
    }
    if (!r.finalized_) {
      r.finalized_ = true;
      r.scope_.unfinalizedDrafts_--;
      let t = r.copy_;
      let i = t;
      let o = false;
      if (r.type_ === 3) {
        i = new Set(t);
        t.clear();
        o = true;
      }
      d(i, (i, a) => j(e, r, t, i, a, n, o));
      I(e, t, false);
      if (n && e.patches_) {
        O("Patches").generatePatches_(r, n, e.patches_, e.inversePatches_);
      }
    }
    return r.copy_;
  }
  function j(e, t, n, r, i, o, a) {
    if (c(i)) {
      let a = D(e, i, o && t && t.type_ !== 3 && !g(t.assigned_, r) ? o.concat(r) : undefined);
      m(n, r, a);
      if (!c(a)) {
        return;
      }
      e.canAutoFreeze_ = false;
    } else if (a) {
      n.add(i);
    }
    if (l(i) && !x(i)) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) {
        return;
      }
      D(e, i);
      if (!t || !t.scope_.parent_) {
        I(e, i);
      }
    }
  }
  function I(e, t, n = false) {
    if (!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_) {
      E(t, n);
    }
  }
  var N = {
    get(e, t) {
      if (t === a) {
        return e;
      }
      let n = _(e);
      if (!g(n, t)) {
        return function (e, t, n) {
          var r;
          let i = Z(t, n);
          if (i) {
            if ("value" in i) {
              return i.value;
            } else if ((r = i.get) === null || r === undefined) {
              return undefined;
            } else {
              return r.call(e.draft_);
            }
          } else {
            return undefined;
          }
        }(e, n, t);
      }
      let r = n[t];
      if (e.finalized_ || !l(r)) {
        return r;
      } else if (r === B(e.base_, t)) {
        z(e);
        return e.copy_[t] = F(r, e);
      } else {
        return r;
      }
    },
    has: (e, t) => t in _(e),
    ownKeys: e => Reflect.ownKeys(_(e)),
    set(e, t, n) {
      let r = Z(_(e), t);
      if (r == null ? undefined : r.set) {
        r.set.call(e.draft_, n);
        return true;
      }
      if (!e.modified_) {
        let r = B(_(e), t);
        let i = r == null ? undefined : r[a];
        if (i && i.base_ === n) {
          e.copy_[t] = n;
          e.assigned_[t] = false;
          return true;
        }
        if ((n === r ? n !== 0 || 1 / n == 1 / r : n != n && r != r) && (n !== undefined || g(e.base_, t))) {
          return true;
        }
        z(e);
        U(e);
      }
      return e.copy_[t] === n && (n !== undefined || !!(t in e.copy_)) || !!Number.isNaN(n) && !!Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = true, true);
    },
    deleteProperty: (e, t) => {
      if (B(e.base_, t) !== undefined || t in e.base_) {
        e.assigned_[t] = false;
        z(e);
        U(e);
      } else {
        delete e.assigned_[t];
      }
      if (e.copy_) {
        delete e.copy_[t];
      }
      return true;
    },
    getOwnPropertyDescriptor(e, t) {
      let n = _(e);
      let r = Reflect.getOwnPropertyDescriptor(n, t);
      if (r) {
        return {
          writable: true,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: r.enumerable,
          value: n[t]
        };
      } else {
        return r;
      }
    },
    defineProperty() {
      s(11);
    },
    getPrototypeOf: e => u(e.base_),
    setPrototypeOf() {
      s(12);
    }
  };
  var L = {};
  function B(e, t) {
    let n = e[a];
    return (n ? _(n) : e)[t];
  }
  function Z(e, t) {
    if (!(t in e)) {
      return;
    }
    let n = u(e);
    while (n) {
      let e = Object.getOwnPropertyDescriptor(n, t);
      if (e) {
        return e;
      }
      n = u(n);
    }
  }
  function U(e) {
    if (!e.modified_) {
      e.modified_ = true;
      if (e.parent_) {
        U(e.parent_);
      }
    }
  }
  function z(e) {
    e.copy_ ||= w(e.base_, e.scope_.immer_.useStrictShallowCopy_);
  }
  function F(e, t) {
    let n = y(e) ? O("MapSet").proxyMap_(e, t) : b(e) ? O("MapSet").proxySet_(e, t) : function (e, t) {
      let n = Array.isArray(e);
      let i = {
        type_: +!!n,
        scope_: t ? t.scope_ : r,
        modified_: false,
        finalized_: false,
        assigned_: {},
        parent_: t,
        base_: e,
        draft_: null,
        copy_: null,
        revoke_: null,
        isManual_: false
      };
      let o = i;
      let a = N;
      if (n) {
        o = [i];
        a = L;
      }
      let {
        revoke: s,
        proxy: u
      } = Proxy.revocable(o, a);
      i.draft_ = u;
      i.revoke_ = s;
      return u;
    }(e, t);
    (t ? t.scope_ : r).drafts_.push(n);
    return n;
  }
  function H() {
    var e;
    var t;
    let n = "replace";
    let r = "remove";
    function a(e) {
      if (!l(e)) {
        return e;
      }
      if (Array.isArray(e)) {
        return e.map(a);
      }
      if (y(e)) {
        return new Map(Array.from(e.entries()).map(e => {
          let [t, n] = e;
          return [t, a(n)];
        }));
      }
      if (b(e)) {
        return new Set(Array.from(e).map(a));
      }
      let t = Object.create(u(e));
      for (let n in e) {
        t[n] = a(e[n]);
      }
      if (g(e, o)) {
        t[o] = e[o];
      }
      return t;
    }
    function f(e) {
      if (c(e)) {
        return a(e);
      } else {
        return e;
      }
    }
    e = "Patches";
    t = {
      applyPatches_: function (e, t) {
        t.forEach(t => {
          let {
            path: i,
            op: o
          } = t;
          let u = e;
          for (let e = 0; e < i.length - 1; e++) {
            let t = p(u);
            let n = i[e];
            if (typeof n != "string" && typeof n != "number") {
              n = "" + n;
            }
            if ((t === 0 || t === 1) && (n === "__proto__" || n === "constructor")) {
              s(19);
            }
            if (typeof u == "function" && n === "prototype") {
              s(19);
            }
            if (typeof (u = v(u, n)) != "object") {
              s(18, i.join("/"));
            }
          }
          let c = p(u);
          let l = a(t.value);
          let f = i[i.length - 1];
          switch (o) {
            case n:
              switch (c) {
                case 2:
                  return u.set(f, l);
                case 3:
                  s(16);
                default:
                  return u[f] = l;
              }
            case "add":
              switch (c) {
                case 1:
                  if (f === "-") {
                    return u.push(l);
                  } else {
                    return u.splice(f, 0, l);
                  }
                case 2:
                  return u.set(f, l);
                case 3:
                  return u.add(l);
                default:
                  return u[f] = l;
              }
            case r:
              switch (c) {
                case 1:
                  return u.splice(f, 1);
                case 2:
                  return u.delete(f);
                case 3:
                  return u.delete(t.value);
                default:
                  return delete u[f];
              }
            default:
              s(17, o);
          }
        });
        return e;
      },
      generatePatches_: function (e, t, i, o) {
        switch (e.type_) {
          case 0:
          case 2:
            return function (e, t, i, o) {
              let {
                base_: a,
                copy_: s
              } = e;
              d(e.assigned_, (e, u) => {
                let c = v(a, e);
                let l = v(s, e);
                let h = u ? g(a, e) ? n : "add" : r;
                if (c === l && h === n) {
                  return;
                }
                let d = t.concat(e);
                i.push(h === r ? {
                  op: h,
                  path: d
                } : {
                  op: h,
                  path: d,
                  value: l
                });
                o.push(h === "add" ? {
                  op: r,
                  path: d
                } : h === r ? {
                  op: "add",
                  path: d,
                  value: f(c)
                } : {
                  op: n,
                  path: d,
                  value: f(c)
                });
              });
            }(e, t, i, o);
          case 1:
            return function (e, t, i, o) {
              let {
                base_: a,
                assigned_: s
              } = e;
              let u = e.copy_;
              if (u.length < a.length) {
                [a, u] = [u, a];
                [i, o] = [o, i];
              }
              for (let e = 0; e < a.length; e++) {
                if (s[e] && u[e] !== a[e]) {
                  let r = t.concat([e]);
                  i.push({
                    op: n,
                    path: r,
                    value: f(u[e])
                  });
                  o.push({
                    op: n,
                    path: r,
                    value: f(a[e])
                  });
                }
              }
              for (let e = a.length; e < u.length; e++) {
                let n = t.concat([e]);
                i.push({
                  op: "add",
                  path: n,
                  value: f(u[e])
                });
              }
              for (let e = u.length - 1; a.length <= e; --e) {
                let n = t.concat([e]);
                o.push({
                  op: r,
                  path: n
                });
              }
            }(e, t, i, o);
          case 3:
            return function (e, t, n, i) {
              let {
                base_: o,
                copy_: a
              } = e;
              let s = 0;
              o.forEach(e => {
                if (!a.has(e)) {
                  let o = t.concat([s]);
                  n.push({
                    op: r,
                    path: o,
                    value: e
                  });
                  i.unshift({
                    op: "add",
                    path: o,
                    value: e
                  });
                }
                s++;
              });
              s = 0;
              a.forEach(e => {
                if (!o.has(e)) {
                  let o = t.concat([s]);
                  n.push({
                    op: "add",
                    path: o,
                    value: e
                  });
                  i.unshift({
                    op: r,
                    path: o,
                    value: e
                  });
                }
                s++;
              });
            }(e, t, i, o);
        }
      },
      generateReplacementPatches_: function (e, t, r, o) {
        r.push({
          op: n,
          path: [],
          value: t === i ? undefined : t
        });
        o.push({
          op: n,
          path: [],
          value: e
        });
      }
    };
    k[e] ||= t;
  }
  function G() {
    var e;
    var t;
    class n extends Map {
      get size() {
        return _(this[a]).size;
      }
      has(e) {
        return _(this[a]).has(e);
      }
      set(e, t) {
        let n = this[a];
        c(n);
        if (!_(n).has(e) || _(n).get(e) !== t) {
          i(n);
          U(n);
          n.assigned_.set(e, true);
          n.copy_.set(e, t);
          n.assigned_.set(e, true);
        }
        return this;
      }
      delete(e) {
        if (!this.has(e)) {
          return false;
        }
        let t = this[a];
        c(t);
        i(t);
        U(t);
        if (t.base_.has(e)) {
          t.assigned_.set(e, false);
        } else {
          t.assigned_.delete(e);
        }
        t.copy_.delete(e);
        return true;
      }
      clear() {
        let e = this[a];
        c(e);
        if (_(e).size) {
          i(e);
          U(e);
          e.assigned_ = new Map();
          d(e.base_, t => {
            e.assigned_.set(t, false);
          });
          e.copy_.clear();
        }
      }
      forEach(e, t) {
        _(this[a]).forEach((n, r, i) => {
          e.call(t, this.get(r), r, this);
        });
      }
      get(e) {
        let t = this[a];
        c(t);
        let n = _(t).get(e);
        if (t.finalized_ || !l(n) || n !== t.base_.get(e)) {
          return n;
        }
        let r = F(n, t);
        i(t);
        t.copy_.set(e, r);
        return r;
      }
      keys() {
        return _(this[a]).keys();
      }
      values() {
        let e = this.keys();
        return {
          [Symbol.iterator]: () => this.values(),
          next: () => {
            let t = e.next();
            if (t.done) {
              return t;
            } else {
              return {
                done: false,
                value: this.get(t.value)
              };
            }
          }
        };
      }
      entries() {
        let e = this.keys();
        return {
          [Symbol.iterator]: () => this.entries(),
          next: () => {
            let t = e.next();
            if (t.done) {
              return t;
            }
            let n = this.get(t.value);
            return {
              done: false,
              value: [t.value, n]
            };
          }
        };
      }
      [Symbol.iterator]() {
        return this.entries();
      }
      constructor(e, t) {
        super();
        this[a] = {
          type_: 2,
          parent_: t,
          scope_: t ? t.scope_ : r,
          modified_: false,
          finalized_: false,
          copy_: undefined,
          assigned_: undefined,
          base_: e,
          draft_: this,
          isManual_: false,
          revoked_: false
        };
      }
    }
    function i(e) {
      if (!e.copy_) {
        e.assigned_ = new Map();
        e.copy_ = new Map(e.base_);
      }
    }
    class o extends Set {
      get size() {
        return _(this[a]).size;
      }
      has(e) {
        let t = this[a];
        c(t);
        if (t.copy_) {
          return !!t.copy_.has(e) || !!t.drafts_.has(e) && !!t.copy_.has(t.drafts_.get(e));
        } else {
          return t.base_.has(e);
        }
      }
      add(e) {
        let t = this[a];
        c(t);
        if (!this.has(e)) {
          u(t);
          U(t);
          t.copy_.add(e);
        }
        return this;
      }
      delete(e) {
        if (!this.has(e)) {
          return false;
        }
        let t = this[a];
        c(t);
        u(t);
        U(t);
        return t.copy_.delete(e) || !!t.drafts_.has(e) && t.copy_.delete(t.drafts_.get(e));
      }
      clear() {
        let e = this[a];
        c(e);
        if (_(e).size) {
          u(e);
          U(e);
          e.copy_.clear();
        }
      }
      values() {
        let e = this[a];
        c(e);
        u(e);
        return e.copy_.values();
      }
      entries() {
        let e = this[a];
        c(e);
        u(e);
        return e.copy_.entries();
      }
      keys() {
        return this.values();
      }
      [Symbol.iterator]() {
        return this.values();
      }
      forEach(e, t) {
        let n = this.values();
        let r = n.next();
        while (!r.done) {
          e.call(t, r.value, r.value, this);
          r = n.next();
        }
      }
      constructor(e, t) {
        super();
        this[a] = {
          type_: 3,
          parent_: t,
          scope_: t ? t.scope_ : r,
          modified_: false,
          finalized_: false,
          copy_: undefined,
          base_: e,
          draft_: this,
          drafts_: new Map(),
          revoked_: false,
          isManual_: false
        };
      }
    }
    function u(e) {
      if (!e.copy_) {
        e.copy_ = new Set();
        e.base_.forEach(t => {
          if (l(t)) {
            let n = F(t, e);
            e.drafts_.set(t, n);
            e.copy_.add(n);
          } else {
            e.copy_.add(t);
          }
        });
      }
    }
    function c(e) {
      if (e.revoked_) {
        s(3, JSON.stringify(_(e)));
      }
    }
    e = "MapSet";
    t = {
      proxyMap_: function (e, t) {
        return new n(e, t);
      },
      proxySet_: function (e, t) {
        return new o(e, t);
      }
    };
    k[e] ||= t;
  }
  d(N, (e, t) => {
    L[e] = function () {
      arguments[0] = arguments[0][0];
      return t.apply(this, arguments);
    };
  });
  L.deleteProperty = function (e, t) {
    return L.set.call(this, e, t, undefined);
  };
  L.set = function (e, t, n) {
    return N.set.call(this, e[0], t, n, e[0]);
  };
  var V = new class {
    createDraft(e) {
      var t;
      if (!l(e)) {
        s(8);
      }
      if (c(e)) {
        if (!c(t = e)) {
          s(10, t);
        }
        e = function e(t) {
          let n;
          if (!l(t) || x(t)) {
            return t;
          }
          let r = t[a];
          if (r) {
            if (!r.modified_) {
              return r.base_;
            }
            r.finalized_ = true;
            n = w(t, r.scope_.immer_.useStrictShallowCopy_);
          } else {
            n = w(t, true);
          }
          d(n, (t, r) => {
            m(n, t, e(r));
          });
          if (r) {
            r.finalized_ = false;
          }
          return n;
        }(t);
      }
      let n = C(this);
      let r = F(e, undefined);
      r[a].isManual_ = true;
      R(n);
      return r;
    }
    finishDraft(e, t) {
      let n = e && e[a];
      if (!n || !n.isManual_) {
        s(9);
      }
      let {
        scope_: r
      } = n;
      A(r, t);
      return P(undefined, r);
    }
    setAutoFreeze(e) {
      this.autoFreeze_ = e;
    }
    setUseStrictShallowCopy(e) {
      this.useStrictShallowCopy_ = e;
    }
    applyPatches(e, t) {
      let n;
      for (n = t.length - 1; n >= 0; n--) {
        let r = t[n];
        if (r.path.length === 0 && r.op === "replace") {
          e = r.value;
          break;
        }
      }
      if (n > -1) {
        t = t.slice(n + 1);
      }
      let r = O("Patches").applyPatches_;
      if (c(e)) {
        return r(e, t);
      } else {
        return this.produce(e, e => r(e, t));
      }
    }
    constructor(e) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.produce = (e, t, n) => {
        let r;
        if (typeof e == "function" && typeof t != "function") {
          let n = t;
          t = e;
          let r = this;
          return function (e = n) {
            var i = arguments.length;
            var o = Array(i > 1 ? i - 1 : 0);
            var a = 1;
            for (; a < i; a++) {
              o[a - 1] = arguments[a];
            }
            return r.produce(e, e => t.call(this, e, ...o));
          };
        }
        if (typeof t != "function") {
          s(6);
        }
        if (n !== undefined && typeof n != "function") {
          s(7);
        }
        if (l(e)) {
          let i = C(this);
          let o = F(e, undefined);
          let a = true;
          try {
            r = t(o);
            a = false;
          } finally {
            if (a) {
              T(i);
            } else {
              R(i);
            }
          }
          A(i, n);
          return P(r, i);
        }
        if (e && typeof e == "object") {
          s(1, e);
        } else {
          if ((r = t(e)) === undefined) {
            r = e;
          }
          if (r === i) {
            r = undefined;
          }
          if (this.autoFreeze_) {
            E(r, true);
          }
          if (n) {
            let t = [];
            let i = [];
            O("Patches").generateReplacementPatches_(e, r, t, i);
            n(t, i);
          }
          return r;
        }
      };
      this.produceWithPatches = (e, t) => {
        let n;
        let r;
        if (typeof e == "function") {
          var i = this;
          return function (t) {
            var n = arguments.length;
            var r = Array(n > 1 ? n - 1 : 0);
            var o = 1;
            for (; o < n; o++) {
              r[o - 1] = arguments[o];
            }
            return i.produceWithPatches(t, t => e(t, ...r));
          };
        }
        return [this.produce(e, t, (e, t) => {
          n = e;
          r = t;
        }), n, r];
      };
      if (typeof (e == null ? undefined : e.autoFreeze) == "boolean") {
        this.setAutoFreeze(e.autoFreeze);
      }
      if (typeof (e == null ? undefined : e.useStrictShallowCopy) == "boolean") {
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
      }
    }
  }();
  var $ = V.produce;
  V.produceWithPatches.bind(V);
  V.setAutoFreeze.bind(V);
  V.setUseStrictShallowCopy.bind(V);
  var W = V.applyPatches.bind(V);
  var q = V.createDraft.bind(V);
  var K = V.finishDraft.bind(V);
  require.d(exports, {
    MapSetPlugin: function () {
      return G;
    },
    createDraft: function () {
      return q;
    },
    applyPatches: function () {
      return W;
    },
    produce: function () {
      return $;
    },
    finishDraft: function () {
      return K;
    },
    isDraft: function () {
      return c;
    },
    PatchesPlugin: function () {
      return H;
    }
  });
}