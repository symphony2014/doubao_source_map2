// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Resolved require(352636) to 'mathml-abstract-node-util'
// - Resolved require(142412) to 'mathjax-utilities'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 43274.dfa78498.js
         * chunkId: 43274
         * moduleId: 526347
         */
module.exports = function (module, exports, require) {
  var r;
  var T = this && this.__read || function (t, e) {
    var Q = typeof Symbol == "function" && t[Symbol.iterator];
    if (!Q) {
      return t;
    }
    var r;
    var T;
    var n = Q.call(t);
    var o = [];
    try {
      while ((e === undefined || e-- > 0) && !(r = n.next()).done) {
        o.push(r.value);
      }
    } catch (t) {
      T = {
        error: t
      };
    } finally {
      try {
        if (r && !r.done && (Q = n.return)) {
          Q.call(n);
        }
      } finally {
        if (T) {
          throw T.error;
        }
      }
    }
    return o;
  };
  var n = this && this.__values || function (t) {
    var e = typeof Symbol == "function" && Symbol.iterator;
    var Q = e && t[e];
    var r = 0;
    if (Q) {
      return Q.call(t);
    }
    if (t && typeof t.length == "number") {
      return {
        next: function () {
          if (t && r >= t.length) {
            t = undefined;
          }
          return {
            value: t && t[r++],
            done: !t
          };
        }
      };
    }
    throw TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
  };
  var o = this && this.__importDefault || function (t) {
    if (t && t.__esModule) {
      return t;
    } else {
      return {
        default: t
      };
    }
  };
  exports.clearDocument = exports.saveDocument = exports.makeBsprAttributes = exports.removeProperty = exports.getProperty = exports.setProperty = exports.balanceRules = undefined;
  var i = o(require("mathml-abstract-node-util") /*id: 352636*/);
  var a = o(require("mathjax-utilities") /*id: 142412*/);
  var u = null;
  var s = null;
  function l(t) {
    s.root = t;
    return u.outputJax.getBBox(s, u).w;
  }
  function c(t) {
    var e = 0;
    for (; t && !i.default.isType(t, "mtable");) {
      if (i.default.isType(t, "text")) {
        return null;
      }
      if (i.default.isType(t, "mrow")) {
        t = t.childNodes[0];
        e = 0;
        continue;
      }
      t = t.parent.childNodes[e];
      e++;
    }
    return t;
  }
  function p(t, e) {
    return t.childNodes[+(e === "up")].childNodes[0].childNodes[0].childNodes[0].childNodes[0];
  }
  function h(t, e) {
    return t.childNodes[e].childNodes[0].childNodes[0];
  }
  function f(t) {
    return h(t, 0);
  }
  function d(t, e) {
    return t.childNodes[+(e !== "up")].childNodes[0].childNodes[0].childNodes[0];
  }
  function D(t) {
    while (t && !i.default.isType(t, "mtd")) {
      t = t.parent;
    }
    return t;
  }
  function L(t) {
    while (t && exports.getProperty(t, "inference") == null) {
      t = t.parent;
    }
    return t;
  }
  function m(t, e, Q = false) {
    var r = 0;
    if (t === e) {
      return r;
    }
    if (t !== e.parent) {
      var T = t.childNodes;
      var n = Q ? T.length - 1 : 0;
      if (i.default.isType(T[n], "mspace")) {
        r += l(T[n]);
      }
      t = e.parent;
    }
    if (t === e) {
      return r;
    }
    var o = t.childNodes;
    var a = Q ? o.length - 1 : 0;
    if (o[a] !== e) {
      r += l(o[a]);
    }
    return r;
  }
  function y(t, Q = false) {
    var r = c(t);
    var T = d(r, exports.getProperty(r, "inferenceRule"));
    return m(t, r, Q) + (l(r) - l(T)) / 2;
  }
  function H(t, Q, r, T = false) {
    if (exports.getProperty(Q, "inferenceRule") || exports.getProperty(Q, "labelledRule")) {
      var n = t.nodeFactory.create("node", "mrow");
      Q.parent.replaceChild(n, Q);
      n.setChildren([Q]);
      v(Q, n);
      Q = n;
    }
    var o = T ? Q.childNodes.length - 1 : 0;
    var u = Q.childNodes[o];
    if (i.default.isType(u, "mspace")) {
      i.default.setAttribute(u, "width", a.default.Em(a.default.dimen2em(i.default.getAttribute(u, "width")) + r));
      return;
    }
    u = t.nodeFactory.create("node", "mspace", [], {
      width: a.default.Em(r)
    });
    if (T) {
      Q.appendChild(u);
      return;
    }
    u.parent = Q;
    Q.childNodes.unshift(u);
  }
  function v(t, Q) {
    ["inference", "proof", "maxAdjust", "labelledRule"].forEach(function (r) {
      var T = exports.getProperty(t, r);
      if (T != null) {
        exports.setProperty(Q, r, T);
        exports.removeProperty(t, r);
      }
    });
  }
  function g(t) {
    var Q = t.nodeLists.sequent;
    if (Q) {
      var r = Q.length - 1;
      var T = undefined;
      for (; T = Q[r]; r--) {
        if (exports.getProperty(T, "sequentProcessed")) {
          exports.removeProperty(T, "sequentProcessed");
          continue;
        }
        var n = [];
        var o = L(T);
        if (exports.getProperty(o, "inference") === 1) {
          for (n.push(T); exports.getProperty(o, "inference") === 1;) {
            var i = f(p(o = c(o), exports.getProperty(o, "inferenceRule")));
            var a = exports.getProperty(i, "inferenceRule") ? d(i, exports.getProperty(i, "inferenceRule")) : i;
            if (exports.getProperty(a, "sequent")) {
              T = a.childNodes[0];
              n.push(T);
              exports.setProperty(T, "sequentProcessed", true);
            }
            o = i;
          }
          E(t, n);
        }
      }
    }
  }
  function b(t, Q, r, T, n) {
    var o = t.nodeFactory.create("node", "mspace", [], {
      width: a.default.Em(n)
    });
    if (T === "left") {
      var i = Q.childNodes[r].childNodes[0];
      o.parent = i;
      i.childNodes.unshift(o);
    } else {
      Q.childNodes[r].appendChild(o);
    }
    exports.setProperty(Q.parent, "sequentAdjust_" + T, n);
  }
  function E(t, Q) {
    var r = Q.pop();
    for (; Q.length;) {
      var n = Q.pop();
      var o = T(C(r, n), 2);
      var i = o[0];
      var a = o[1];
      if (exports.getProperty(r.parent, "axiom")) {
        b(t, i < 0 ? r : n, 0, "left", Math.abs(i));
        b(t, a < 0 ? r : n, 2, "right", Math.abs(a));
      }
      r = n;
    }
  }
  function C(t, e) {
    var Q = l(t.childNodes[2]);
    var r = l(e.childNodes[2]);
    return [l(t.childNodes[0]) - l(e.childNodes[0]), Q - r];
  }
  exports.balanceRules = function (t) {
    s = new t.document.options.MathItem("", null, t.math.display);
    var Q;
    var r;
    var T = t.data;
    g(T);
    var o = T.nodeLists.inference || [];
    try {
      var i = n(o);
      var a = i.next();
      for (; !a.done; a = i.next()) {
        var u;
        var l = a.value;
        var d = exports.getProperty(l, "proof");
        var v = c(l);
        var b = p(v, exports.getProperty(v, "inferenceRule"));
        var E = f(b);
        if (exports.getProperty(E, "inference")) {
          var C = y(E);
          if (C) {
            H(T, E, -C);
            var V = m(l, v, false);
            H(T, l, C - V);
          }
        }
        var M = h(b, b.childNodes.length - 1);
        if (exports.getProperty(M, "inference") != null) {
          var F = y(M, true);
          H(T, M, -F, true);
          var x = m(l, v, true);
          var O = exports.getProperty(l, "maxAdjust");
          if (O != null) {
            F = Math.max(F, O);
          }
          var A = undefined;
          if (d || !(A = D(l))) {
            H(T, exports.getProperty(l, "proof") ? l : l.parent, F - x, true);
            continue;
          }
          var _ = (u = A).parent.childNodes[u.parent.childNodes.indexOf(u) + 1];
          if (_) {
            var S = T.nodeFactory.create("node", "mspace", [], {
              width: F - x + "em"
            });
            _.appendChild(S);
            l.removeProperty("maxAdjust");
            continue;
          }
          var w = L(A);
          if (w) {
            F = exports.getProperty(w, "maxAdjust") ? Math.max(exports.getProperty(w, "maxAdjust"), F) : F;
            exports.setProperty(w, "maxAdjust", F);
          }
        }
      }
    } catch (t) {
      Q = {
        error: t
      };
    } finally {
      try {
        if (a && !a.done && (r = i.return)) {
          r.call(i);
        }
      } finally {
        if (Q) {
          throw Q.error;
        }
      }
    }
  };
  var V = "bspr_";
  (r = {})[V + "maxAdjust"] = true;
  var M = r;
  exports.setProperty = function (t, e, Q) {
    i.default.setProperty(t, V + e, Q);
  };
  exports.getProperty = function (t, e) {
    return i.default.getProperty(t, V + e);
  };
  exports.removeProperty = function (t, e) {
    t.removeProperty(V + e);
  };
  exports.makeBsprAttributes = function (t) {
    t.data.root.walkTree(function (t, e) {
      var Q = [];
      t.getPropertyNames().forEach(function (e) {
        if (!M[e] && e.match(RegExp("^" + V))) {
          Q.push(e + ":" + t.getProperty(e));
        }
      });
      if (Q.length) {
        i.default.setAttribute(t, "semantics", Q.join(";"));
      }
    });
  };
  exports.saveDocument = function (t) {
    if (!("getBBox" in (u = t.document).outputJax)) {
      throw Error("The bussproofs extension requires an output jax with a getBBox() method");
    }
  };
  exports.clearDocument = function (t) {
    u = null;
  };
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
}