// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'Uy' to 'produce'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: async-business-layout.ca200119.js
         * chunkId: 14925
         * moduleId: 949322
         */
module.exports = function (module, exports, require) {
  var i;
  var r = Symbol.for("immer-nothing");
  var o = Symbol.for("immer-draftable");
  var a = Symbol.for("immer-state");
  function s(e) {
    var t = arguments.length;
    var n = Array(t > 1 ? t - 1 : 0);
    var i = 1;
    for (; i < t; i++) {
      n[i - 1] = arguments[i];
    }
    throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`);
  }
  var l = Object.getPrototypeOf;
  function c(e) {
    return !!e && !!e[a];
  }
  function d(e) {
    return !!e && (h(e) || Array.isArray(e) || !!e[o] || !!e.constructor?.[o] || g(e) || _(e));
  }
  var u = Object.prototype.constructor.toString();
  function h(e) {
    if (!e || typeof e != "object") {
      return false;
    }
    let t = l(e);
    if (t === null) {
      return true;
    }
    let n = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
    return n === Object || typeof n == "function" && Function.toString.call(n) === u;
  }
  function f(e, t) {
    if (p(e) === 0) {
      Reflect.ownKeys(e).forEach(n => {
        t(n, e[n], e);
      });
    } else {
      e.forEach((n, i) => t(i, n, e));
    }
  }
  function p(e) {
    let t = e[a];
    if (t) {
      return t.type_;
    } else if (Array.isArray(e)) {
      return 1;
    } else if (g(e)) {
      return 2;
    } else {
      return !!_(e) * 3;
    }
  }
  function m(e, t) {
    if (p(e) === 2) {
      return e.has(t);
    } else {
      return Object.prototype.hasOwnProperty.call(e, t);
    }
  }
  function v(e, t, n) {
    let i = p(e);
    if (i === 2) {
      e.set(t, n);
    } else if (i === 3) {
      e.add(n);
    } else {
      e[t] = n;
    }
  }
  function g(e) {
    return e instanceof Map;
  }
  function _(e) {
    return e instanceof Set;
  }
  function b(e) {
    return e.copy_ || e.base_;
  }
  function y(e, t) {
    if (g(e)) {
      return new Map(e);
    }
    if (_(e)) {
      return new Set(e);
    }
    if (Array.isArray(e)) {
      return Array.prototype.slice.call(e);
    }
    let n = h(e);
    if (t !== true && (t !== "class_only" || n)) {
      let t = l(e);
      if (t !== null && n) {
        return {
          ...e
        };
      } else {
        return Object.assign(Object.create(t), e);
      }
    }
    {
      let t = Object.getOwnPropertyDescriptors(e);
      delete t[a];
      let n = Reflect.ownKeys(t);
      for (let i = 0; i < n.length; i++) {
        let r = n[i];
        let o = t[r];
        if (o.writable === false) {
          o.writable = true;
          o.configurable = true;
        }
        if (o.get || o.set) {
          t[r] = {
            configurable: true,
            writable: true,
            enumerable: o.enumerable,
            value: e[r]
          };
        }
      }
      return Object.create(l(e), t);
    }
  }
  function w(e, t = false) {
    if (!x(e) && !c(e) && !!d(e)) {
      if (p(e) > 1) {
        e.set = e.add = e.clear = e.delete = S;
      }
      Object.freeze(e);
      if (t) {
        Object.entries(e).forEach(e => {
          let [t, n] = e;
          return w(n, true);
        });
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
  var C = {};
  function k(e) {
    let t = C[e];
    if (!t) {
      s(0, e);
    }
    return t;
  }
  function T(e, t) {
    if (t) {
      k("Patches");
      e.patches_ = [];
      e.inversePatches_ = [];
      e.patchListener_ = t;
    }
  }
  function E(e) {
    I(e);
    e.drafts_.forEach(R);
    e.drafts_ = null;
  }
  function I(e) {
    if (e === i) {
      i = e.parent_;
    }
  }
  function j(e) {
    return i = {
      drafts_: [],
      parent_: i,
      immer_: e,
      canAutoFreeze_: true,
      unfinalizedDrafts_: 0
    };
  }
  function R(e) {
    let t = e[a];
    if (t.type_ === 0 || t.type_ === 1) {
      t.revoke_();
    } else {
      t.revoked_ = true;
    }
  }
  function N(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length;
    let n = t.drafts_[0];
    if (e !== undefined && e !== n) {
      if (n[a].modified_) {
        E(t);
        s(4);
      }
      if (d(e)) {
        e = $(t, e);
        if (!t.parent_) {
          P(t, e);
        }
      }
      if (t.patches_) {
        k("Patches").generateReplacementPatches_(n[a].base_, e, t.patches_, t.inversePatches_);
      }
    } else {
      e = $(t, n, []);
    }
    E(t);
    if (t.patches_) {
      t.patchListener_(t.patches_, t.inversePatches_);
    }
    if (e !== r) {
      return e;
    } else {
      return undefined;
    }
  }
  function $(e, t, n) {
    if (x(t)) {
      return t;
    }
    let i = t[a];
    if (!i) {
      f(t, (r, o) => M(e, i, t, r, o, n));
      return t;
    }
    if (i.scope_ !== e) {
      return t;
    }
    if (!i.modified_) {
      P(e, i.base_, true);
      return i.base_;
    }
    if (!i.finalized_) {
      i.finalized_ = true;
      i.scope_.unfinalizedDrafts_--;
      let t = i.copy_;
      let r = t;
      let o = false;
      if (i.type_ === 3) {
        r = new Set(t);
        t.clear();
        o = true;
      }
      f(r, (r, a) => M(e, i, t, r, a, n, o));
      P(e, t, false);
      if (n && e.patches_) {
        k("Patches").generatePatches_(i, n, e.patches_, e.inversePatches_);
      }
    }
    return i.copy_;
  }
  function M(e, t, n, i, r, o, a) {
    if (c(r)) {
      let a = $(e, r, o && t && t.type_ !== 3 && !m(t.assigned_, i) ? o.concat(i) : undefined);
      v(n, i, a);
      if (!c(a)) {
        return;
      }
      e.canAutoFreeze_ = false;
    } else if (a) {
      n.add(r);
    }
    if (d(r) && !x(r)) {
      if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) {
        return;
      }
      $(e, r);
      if ((!t || !t.scope_.parent_) && typeof i != "symbol" && Object.prototype.propertyIsEnumerable.call(n, i)) {
        P(e, r);
      }
    }
  }
  function P(e, t, n = false) {
    if (!e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_) {
      w(t, n);
    }
  }
  var L = {
    get(e, t) {
      if (t === a) {
        return e;
      }
      let n = b(e);
      if (!m(n, t)) {
        return function (e, t, n) {
          var i;
          let r = Z(t, n);
          if (r) {
            if ("value" in r) {
              return r.value;
            } else if ((i = r.get) === null || i === undefined) {
              return undefined;
            } else {
              return i.call(e.draft_);
            }
          } else {
            return undefined;
          }
        }(e, n, t);
      }
      let i = n[t];
      if (e.finalized_ || !d(i)) {
        return i;
      } else if (i === O(e.base_, t)) {
        W(e);
        return e.copy_[t] = B(i, e);
      } else {
        return i;
      }
    },
    has: (e, t) => t in b(e),
    ownKeys: e => Reflect.ownKeys(b(e)),
    set(e, t, n) {
      let i = Z(b(e), t);
      if (i == null ? undefined : i.set) {
        i.set.call(e.draft_, n);
        return true;
      }
      if (!e.modified_) {
        let i = O(b(e), t);
        let r = i == null ? undefined : i[a];
        if (r && r.base_ === n) {
          e.copy_[t] = n;
          e.assigned_[t] = false;
          return true;
        }
        if ((n === i ? n !== 0 || 1 / n == 1 / i : n != n && i != i) && (n !== undefined || m(e.base_, t))) {
          return true;
        }
        W(e);
        A(e);
      }
      return e.copy_[t] === n && (n !== undefined || !!(t in e.copy_)) || !!Number.isNaN(n) && !!Number.isNaN(e.copy_[t]) || (e.copy_[t] = n, e.assigned_[t] = true, true);
    },
    deleteProperty: (e, t) => {
      if (O(e.base_, t) !== undefined || t in e.base_) {
        e.assigned_[t] = false;
        W(e);
        A(e);
      } else {
        delete e.assigned_[t];
      }
      if (e.copy_) {
        delete e.copy_[t];
      }
      return true;
    },
    getOwnPropertyDescriptor(e, t) {
      let n = b(e);
      let i = Reflect.getOwnPropertyDescriptor(n, t);
      if (i) {
        return {
          writable: true,
          configurable: e.type_ !== 1 || t !== "length",
          enumerable: i.enumerable,
          value: n[t]
        };
      } else {
        return i;
      }
    },
    defineProperty() {
      s(11);
    },
    getPrototypeOf: e => l(e.base_),
    setPrototypeOf() {
      s(12);
    }
  };
  var D = {};
  function O(e, t) {
    let n = e[a];
    return (n ? b(n) : e)[t];
  }
  function Z(e, t) {
    if (!(t in e)) {
      return;
    }
    let n = l(e);
    while (n) {
      let e = Object.getOwnPropertyDescriptor(n, t);
      if (e) {
        return e;
      }
      n = l(n);
    }
  }
  function A(e) {
    if (!e.modified_) {
      e.modified_ = true;
      if (e.parent_) {
        A(e.parent_);
      }
    }
  }
  function W(e) {
    e.copy_ ||= y(e.base_, e.scope_.immer_.useStrictShallowCopy_);
  }
  function B(e, t) {
    let n = g(e) ? k("MapSet").proxyMap_(e, t) : _(e) ? k("MapSet").proxySet_(e, t) : function (e, t) {
      let n = Array.isArray(e);
      let r = {
        type_: +!!n,
        scope_: t ? t.scope_ : i,
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
      let o = r;
      let a = L;
      if (n) {
        o = [r];
        a = D;
      }
      let {
        revoke: s,
        proxy: l
      } = Proxy.revocable(o, a);
      r.draft_ = l;
      r.revoke_ = s;
      return l;
    }(e, t);
    (t ? t.scope_ : i).drafts_.push(n);
    return n;
  }
  f(L, (e, t) => {
    D[e] = function () {
      arguments[0] = arguments[0][0];
      return t.apply(this, arguments);
    };
  });
  D.deleteProperty = function (e, t) {
    return D.set.call(this, e, t, undefined);
  };
  D.set = function (e, t, n) {
    return L.set.call(this, e[0], t, n, e[0]);
  };
  var F = new class {
    createDraft(e) {
      var t;
      if (!d(e)) {
        s(8);
      }
      if (c(e)) {
        if (!c(t = e)) {
          s(10, t);
        }
        e = function e(t) {
          let n;
          if (!d(t) || x(t)) {
            return t;
          }
          let i = t[a];
          if (i) {
            if (!i.modified_) {
              return i.base_;
            }
            i.finalized_ = true;
            n = y(t, i.scope_.immer_.useStrictShallowCopy_);
          } else {
            n = y(t, true);
          }
          f(n, (t, i) => {
            v(n, t, e(i));
          });
          if (i) {
            i.finalized_ = false;
          }
          return n;
        }(t);
      }
      let n = j(this);
      let i = B(e, undefined);
      i[a].isManual_ = true;
      I(n);
      return i;
    }
    finishDraft(e, t) {
      let n = e && e[a];
      if (!n || !n.isManual_) {
        s(9);
      }
      let {
        scope_: i
      } = n;
      T(i, t);
      return N(undefined, i);
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
        let i = t[n];
        if (i.path.length === 0 && i.op === "replace") {
          e = i.value;
          break;
        }
      }
      if (n > -1) {
        t = t.slice(n + 1);
      }
      let i = k("Patches").applyPatches_;
      if (c(e)) {
        return i(e, t);
      } else {
        return this.produce(e, e => i(e, t));
      }
    }
    constructor(e) {
      this.autoFreeze_ = true;
      this.useStrictShallowCopy_ = false;
      this.produce = (e, t, n) => {
        let i;
        if (typeof e == "function" && typeof t != "function") {
          let n = t;
          t = e;
          let i = this;
          return function (e = n) {
            var r = arguments.length;
            var o = Array(r > 1 ? r - 1 : 0);
            var a = 1;
            for (; a < r; a++) {
              o[a - 1] = arguments[a];
            }
            return i.produce(e, e => t.call(this, e, ...o));
          };
        }
        if (typeof t != "function") {
          s(6);
        }
        if (n !== undefined && typeof n != "function") {
          s(7);
        }
        if (d(e)) {
          let r = j(this);
          let o = B(e, undefined);
          let a = true;
          try {
            i = t(o);
            a = false;
          } finally {
            if (a) {
              E(r);
            } else {
              I(r);
            }
          }
          T(r, n);
          return N(i, r);
        }
        if (e && typeof e == "object") {
          s(1, e);
        } else {
          if ((i = t(e)) === undefined) {
            i = e;
          }
          if (i === r) {
            i = undefined;
          }
          if (this.autoFreeze_) {
            w(i, true);
          }
          if (n) {
            let t = [];
            let r = [];
            k("Patches").generateReplacementPatches_(e, i, t, r);
            n(t, r);
          }
          return i;
        }
      };
      this.produceWithPatches = (e, t) => {
        let n;
        let i;
        if (typeof e == "function") {
          var r = this;
          return function (t) {
            var n = arguments.length;
            var i = Array(n > 1 ? n - 1 : 0);
            var o = 1;
            for (; o < n; o++) {
              i[o - 1] = arguments[o];
            }
            return r.produceWithPatches(t, t => e(t, ...i));
          };
        }
        return [this.produce(e, t, (e, t) => {
          n = e;
          i = t;
        }), n, i];
      };
      if (typeof (e == null ? undefined : e.autoFreeze) == "boolean") {
        this.setAutoFreeze(e.autoFreeze);
      }
      if (typeof (e == null ? undefined : e.useStrictShallowCopy) == "boolean") {
        this.setUseStrictShallowCopy(e.useStrictShallowCopy);
      }
    }
  }();
  var z = F.produce;
  F.produceWithPatches.bind(F);
  F.setAutoFreeze.bind(F);
  F.setUseStrictShallowCopy.bind(F);
  F.applyPatches.bind(F);
  F.createDraft.bind(F);
  F.finishDraft.bind(F);
  require.d(exports, {
    produce: function () {
      return z;
    }
  });
}