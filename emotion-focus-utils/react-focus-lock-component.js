// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'ZP' to 'FocusLock'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 21069.33dd1f3c.js
         * chunkId: 21069
         * moduleId: 195701
         */
module.exports = function (module, exports, require) {
  var r;
  var o;
  var objectOmitUtil_3 = require("object-omit-util_3") /*id: 435902*/;
  var objectAssignUtil = require("object-assign-util") /*id: 513453*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var a = "data-focus-lock";
  var f = "data-focus-lock-disabled";
  var useRefSyncHook = require("use-ref-sync-hook") /*id: 205347*/;
  var l = {
    width: "1px",
    height: "0px",
    padding: 0,
    overflow: "hidden",
    position: "fixed",
    top: "1px",
    left: "1px"
  };
  var sidecarMediumFactory = require("sidecar-medium-factory") /*id: 561894*/;
  var v = sidecarMediumFactory.createMedium({}, function (e) {
    return {
      target: e.target,
      currentTarget: e.currentTarget
    };
  });
  var p = sidecarMediumFactory.createMedium();
  var h = sidecarMediumFactory.createMedium();
  var m = sidecarMediumFactory.createSidecar({
    async: true,
    ssr: typeof document != "undefined"
  });
  var b = reactCoreLibraryReexport.createContext(undefined);
  var y = [];
  var g = reactCoreLibraryReexport.forwardRef(function (e, n) {
    var t;
    var r = reactCoreLibraryReexport.useState();
    var o = r[0];
    var u = r[1];
    var d = reactCoreLibraryReexport.useRef();
    var h = reactCoreLibraryReexport.useRef(false);
    var g = reactCoreLibraryReexport.useRef(null);
    var x = reactCoreLibraryReexport.useState({})[1];
    var w = e.children;
    var O = e.disabled;
    var E = O !== undefined && O;
    var P = e.noFocusGuards;
    var A = P !== undefined && P;
    var S = e.persistentFocus;
    var $ = e.crossFrame;
    var k = e.autoFocus;
    e.allowTextSelection;
    var M = e.group;
    var N = e.className;
    var j = e.whiteList;
    var C = e.hasPositiveIndices;
    var D = e.shards;
    var F = D === undefined ? y : D;
    var G = e.as;
    var T = e.lockProps;
    var I = e.sideCar;
    var _ = e.returnFocus;
    var R = _ !== undefined && _;
    var L = e.focusOptions;
    var U = e.onActivation;
    var q = e.onDeactivation;
    var K = reactCoreLibraryReexport.useState({})[0];
    var W = reactCoreLibraryReexport.useCallback(function (e) {
      var n = e.captureFocusRestore;
      if (!g.current) {
        var t;
        var r = (t = document) == null ? undefined : t.activeElement;
        g.current = r;
        if (r !== document.body) {
          g.current = n(r);
        }
      }
      if (d.current && U) {
        U(d.current);
      }
      h.current = true;
      x();
    }, [U]);
    var z = reactCoreLibraryReexport.useCallback(function () {
      h.current = false;
      if (q) {
        q(d.current);
      }
      x();
    }, [q]);
    var B = reactCoreLibraryReexport.useCallback(function (e) {
      var n = g.current;
      if (n) {
        var t = (typeof n == "function" ? n() : n) || document.body;
        var r = typeof R == "function" ? R(t) : R;
        if (r) {
          var o = typeof r == "object" ? r : undefined;
          g.current = null;
          if (e) {
            Promise.resolve().then(function () {
              return t.focus(o);
            });
          } else {
            t.focus(o);
          }
        }
      }
    }, [R]);
    var H = reactCoreLibraryReexport.useCallback(function (e) {
      if (h.current) {
        v.useMedium(e);
      }
    }, []);
    var J = p.useMedium;
    var Z = reactCoreLibraryReexport.useCallback(function (e) {
      if (d.current !== e) {
        d.current = e;
        u(e);
      }
    }, []);
    var Q = objectAssignUtil.objectAssign(((t = {})[f] = E && "disabled", t[a] = M, t), T === undefined ? {} : T);
    var V = A !== true;
    var Y = V && A !== "tail";
    var X = useRefSyncHook.useRefSync([n, Z]);
    var ee = reactCoreLibraryReexport.useMemo(function () {
      return {
        observed: d,
        shards: F,
        enabled: !E,
        active: h.current
      };
    }, [E, h.current, F, o]);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, V && [reactCoreLibraryReexport.createElement("div", {
      key: "guard-first",
      "data-focus-guard": true,
      tabIndex: E ? -1 : 0,
      style: l
    }), C ? reactCoreLibraryReexport.createElement("div", {
      key: "guard-nearest",
      "data-focus-guard": true,
      tabIndex: E ? -1 : 1,
      style: l
    }) : null], !E && reactCoreLibraryReexport.createElement(I, {
      id: K,
      sideCar: m,
      observed: o,
      disabled: E,
      persistentFocus: S !== undefined && S,
      crossFrame: $ === undefined || $,
      autoFocus: k === undefined || k,
      whiteList: j,
      shards: F,
      onActivation: W,
      onDeactivation: z,
      returnFocus: B,
      focusOptions: L,
      noFocusGuards: A
    }), reactCoreLibraryReexport.createElement(G === undefined ? "div" : G, objectAssignUtil.objectAssign({
      ref: X
    }, Q, {
      className: N,
      onBlur: J,
      onFocus: H
    }), reactCoreLibraryReexport.createElement(b.Provider, {
      value: ee
    }, w)), Y && reactCoreLibraryReexport.createElement("div", {
      "data-focus-guard": true,
      tabIndex: E ? -1 : 0,
      style: l
    }));
  });
  g.propTypes = {};
  var classInheritanceHelper_1 = require("class-inheritance-helper_1") /*id: 298550*/;
  var objectPropertySetter = require("object-property-setter") /*id: 84841*/;
  function O(e) {
    var n = Array(e.length);
    var t = 0;
    for (; t < e.length; ++t) {
      n[t] = e[t];
    }
    return n;
  }
  function E(e) {
    if (Array.isArray(e)) {
      return e;
    } else {
      return [e];
    }
  }
  function P(e) {
    if (Array.isArray(e)) {
      return e[0];
    } else {
      return e;
    }
  }
  function A(e) {
    if (e.nodeType !== Node.ELEMENT_NODE) {
      return false;
    }
    var n = window.getComputedStyle(e, null);
    return !!n && !!n.getPropertyValue && (n.getPropertyValue("display") === "none" || n.getPropertyValue("visibility") === "hidden");
  }
  function S(e) {
    if (e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      return e.parentNode.host;
    } else {
      return e.parentNode;
    }
  }
  function $(e) {
    return e === document || e && e.nodeType === Node.DOCUMENT_NODE;
  }
  function k(e, n) {
    var t;
    var r;
    var o = e.get(n);
    if (o !== undefined) {
      return o;
    }
    t = n;
    r = k.bind(undefined, e);
    var u = !t || $(t) || !A(t) && !t.hasAttribute("inert") && r(S(t));
    e.set(n, u);
    return u;
  }
  function M(e, n) {
    var t;
    var r = e.get(n);
    if (r !== undefined) {
      return r;
    }
    t = M.bind(undefined, e);
    var o = !n || !!$(n) || !!D(n) && t(S(n));
    e.set(n, o);
    return o;
  }
  function N(e) {
    return e.dataset;
  }
  function j(e) {
    return e.tagName === "INPUT";
  }
  function C(e) {
    return j(e) && e.type === "radio";
  }
  function D(e) {
    return ![true, "true", ""].includes(e.getAttribute("data-no-autofocus"));
  }
  function F(e) {
    return !!e && !!N(e)?.focusGuard;
  }
  function G(e) {
    return !F(e);
  }
  function T(e) {
    return !!e;
  }
  function I(e, n) {
    var t = Math.max(0, e.tabIndex);
    var r = Math.max(0, n.tabIndex);
    var o = t - r;
    var u = e.index - n.index;
    if (o) {
      if (!t) {
        return 1;
      }
      if (!r) {
        return -1;
      }
    }
    return o || u;
  }
  function _(e, n, t) {
    return O(e).map(function (e, n) {
      var r = e.tabIndex < 0 && !e.hasAttribute("tabindex") ? 0 : e.tabIndex;
      return {
        node: e,
        index: n,
        tabIndex: t && r === -1 ? (e.dataset || {}).focusGuard ? 0 : -1 : r
      };
    }).filter(function (e) {
      return !n || e.tabIndex >= 0;
    }).sort(I);
  }
  var R = "button:enabled,select:enabled,textarea:enabled,input:enabled,a[href],area[href],summary,iframe,object,embed,audio[controls],video[controls],[tabindex],[contenteditable],[autofocus]";
  var L = `${R}, [data-focus-guard]`;
  function U(e, n) {
    return O((e.shadowRoot || e).children).reduce(function (e, t) {
      return e.concat(t.matches(n ? L : R) ? [t] : [], U(t));
    }, []);
  }
  function q(e, n) {
    if (e instanceof HTMLIFrameElement && e.contentDocument?.body) {
      return K([e.contentDocument.body], n);
    } else {
      return [e];
    }
  }
  function K(e, n) {
    return e.reduce(function (e, t) {
      var r;
      var o = U(t, n);
      var u = (r = []).concat.apply(r, o.map(function (e) {
        return q(e, n);
      }));
      return e.concat(u, t.parentNode ? O(t.parentNode.querySelectorAll(R)).filter(function (e) {
        return e === t;
      }) : []);
    }, []);
  }
  function W(e, n) {
    return O(e).filter(function (e) {
      return k(n, e);
    }).filter(function (e) {
      var n;
      return !j(n = e) && n.tagName !== "BUTTON" || n.type !== "hidden" && !n.disabled;
    });
  }
  function z(e, n = new Map()) {
    return O(e).filter(function (e) {
      return M(n, e);
    });
  }
  function B(e, n, t) {
    return _(W(K(e, t), n), true, t);
  }
  function H(e, n) {
    return _(W(K(e), n), false);
  }
  function J(e, n) {
    if (e.shadowRoot) {
      return J(e.shadowRoot, n);
    } else {
      return Object.getPrototypeOf(e).contains !== undefined && !!Object.getPrototypeOf(e).contains.call(e, n) || O(e.children).some(function (e) {
        if (e instanceof HTMLIFrameElement) {
          var r = e.contentDocument?.body;
          return !!r && J(r, n);
        }
        return J(e, n);
      });
    }
  }
  function Z(e) {
    try {
      return e();
    } catch (e) {
      return;
    }
  }
  function Q(e = document) {
    if (e && e.activeElement) {
      var n = e.activeElement;
      if (n.shadowRoot) {
        return Q(n.shadowRoot);
      } else if (n instanceof HTMLIFrameElement && Z(function () {
        return n.contentWindow.document;
      })) {
        return Q(n.contentWindow.document);
      } else {
        return n;
      }
    }
  }
  function V(e = document) {
    var n = Q(e);
    return !!n && O(e.querySelectorAll(`[data-no-focus-lock]`)).some(function (e) {
      return J(e, n);
    });
  }
  function Y(e) {
    var n = new Set();
    var t = e.length;
    var r = 0;
    for (; r < t; r += 1) {
      for (var o = r + 1; o < t; o += 1) {
        var u = e[r].compareDocumentPosition(e[o]);
        if ((u & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0) {
          n.add(o);
        }
        if ((u & Node.DOCUMENT_POSITION_CONTAINS) > 0) {
          n.add(r);
        }
      }
    }
    return e.filter(function (e, t) {
      return !n.has(t);
    });
  }
  function X(e) {
    if (e.parentNode) {
      return X(e.parentNode);
    } else {
      return e;
    }
  }
  function ee(e) {
    return E(e).filter(Boolean).reduce(function (e, n) {
      var t = n.getAttribute(a);
      e.push.apply(e, t ? Y(O(X(n).querySelectorAll(`[${a}="${t}"]:not([${f}="disabled"])`))) : [n]);
      return e;
    }, []);
  }
  function en(e, n = Q(P(e).ownerDocument)) {
    return !!n && (!n.dataset || !n.dataset.focusGuard) && ee(e).some(function (e) {
      var t;
      return J(e, n) || (t = n, !!O(e.querySelectorAll("iframe")).some(function (e) {
        return e === t;
      }));
    });
  }
  function et(e, n) {
    if (e) {
      if ("focus" in e) {
        e.focus(n);
      }
      if ("contentWindow" in e && e.contentWindow) {
        e.contentWindow.focus();
      }
    }
  }
  function er(e, n) {
    if (C(e) && e.name) {
      return n.filter(C).filter(function (n) {
        return n.name === e.name;
      }).filter(function (e) {
        return e.checked;
      })[0] || e;
    }
    return e;
  }
  function eo(e) {
    var n = new Set();
    e.forEach(function (t) {
      return n.add(er(t, e));
    });
    return e.filter(function (e) {
      return n.has(e);
    });
  }
  function eu(e) {
    if (e[0] && e.length > 1) {
      return er(e[0], e);
    } else {
      return e[0];
    }
  }
  function ei(e, n) {
    return e.indexOf(er(n, e));
  }
  var ec = "NEW_FOCUS";
  function ea(e, n, t, r, o) {
    var u = e.length;
    var i = e[0];
    var c = e[u - 1];
    var a = F(r);
    if (!r || !(e.indexOf(r) >= 0)) {
      var f = r !== undefined ? t.indexOf(r) : -1;
      var s = o ? t.indexOf(o) : f;
      var l = o ? e.indexOf(o) : -1;
      if (f === -1) {
        if (l !== -1) {
          return l;
        } else {
          return ec;
        }
      }
      if (l === -1) {
        return ec;
      }
      var d = f - s;
      var v = t.indexOf(i);
      var p = t.indexOf(c);
      var h = eo(t);
      var m = (r !== undefined ? h.indexOf(r) : -1) - (o ? h.indexOf(o) : f);
      if (!d && l >= 0 || n.length === 0) {
        return l;
      }
      var b = ei(e, n[0]);
      var y = ei(e, n[n.length - 1]);
      if (f <= v && a && Math.abs(d) > 1) {
        return y;
      }
      if (f >= p && a && Math.abs(d) > 1) {
        return b;
      }
      if (d && Math.abs(m) > 1) {
        return l;
      }
      if (f <= v) {
        return y;
      }
      if (f > p) {
        return b;
      }
      if (d) {
        if (Math.abs(d) > 1) {
          return l;
        } else {
          return (u + l + d) % u;
        }
      }
    }
  }
  function ef(e, n, t) {
    var r = z(e.map(function (e) {
      return e.node;
    }).filter(function (e) {
      var r = N(e)?.autofocus;
      return e.autofocus || r !== undefined && r !== "false" || t.indexOf(e) >= 0;
    }));
    if (r && r.length) {
      return eu(r);
    } else {
      return eu(z(n));
    }
  }
  function es(e, n = []) {
    n.push(e);
    if (e.parentNode) {
      es(e.parentNode.host || e.parentNode, n);
    }
    return n;
  }
  function el(e, n) {
    var t = es(e);
    var r = es(n);
    var o = 0;
    for (; o < t.length; o += 1) {
      var u = t[o];
      if (r.indexOf(u) >= 0) {
        return u;
      }
    }
    return false;
  }
  function ed(e, n, t) {
    var r = E(e);
    var o = E(n);
    var u = r[0];
    var i = false;
    o.filter(Boolean).forEach(function (e) {
      i = el(i || e, e) || i;
      t.filter(Boolean).forEach(function (e) {
        var n = el(u, e);
        if (n) {
          i = !i || J(n, i) ? n : el(n, i);
        }
      });
    });
    return i;
  }
  function ev(e, n) {
    return e.reduce(function (e, t) {
      var r;
      var o;
      return e.concat((r = t, o = n, W(O(r.querySelectorAll(`[data-autofocus-inside]`)).map(function (e) {
        return K([e]);
      }).reduce(function (e, n) {
        return e.concat(n);
      }, []), o)));
    }, []);
  }
  function ep(e, n) {
    var t = new Map();
    n.forEach(function (e) {
      return t.set(e.node, e);
    });
    return e.map(function (e) {
      return t.get(e);
    }).filter(T);
  }
  function eh(e, n) {
    var t = Q(E(e).length > 0 ? document : P(e).ownerDocument);
    var r = ee(e).filter(G);
    var o = ed(t || e, e, r);
    var u = new Map();
    var i = H(r, u);
    var c = i.filter(function (e) {
      return G(e.node);
    });
    if (c[0]) {
      var a = H([o], u).map(function (e) {
        return e.node;
      });
      var f = ep(a, c);
      var s = f.map(function (e) {
        return e.node;
      });
      var l = f.filter(function (e) {
        return e.tabIndex >= 0;
      }).map(function (e) {
        return e.node;
      });
      var d = ea(s, l, a, t, n);
      if (d === ec) {
        var v = ef(i, l, ev(r, u)) || ef(i, s, ev(r, u));
        if (v) {
          return {
            node: v
          };
        } else {
          return undefined;
        }
      }
      if (d === undefined) {
        return d;
      } else {
        return f[d];
      }
    }
  }
  var em = 0;
  var eb = false;
  function ey(e, n, t = {}) {
    var r = eh(e, n);
    if (!eb && r) {
      if (em > 2) {
        eb = true;
        setTimeout(function () {
          eb = false;
        }, 1);
        return;
      }
      em++;
      et(r.node, t.focusOptions);
      em--;
    }
  }
  function eg(e) {
    if (!e) {
      return null;
    }
    if (typeof WeakRef == "undefined") {
      return function () {
        return e || null;
      };
    }
    var n = e ? new WeakRef(e) : null;
    return function () {
      return (n == null ? undefined : n.deref()) || null;
    };
  }
  function ex(e) {
    if (!e) {
      return null;
    }
    var n = [];
    var t = e;
    while (t && t !== document.body) {
      n.push({
        current: eg(t),
        parent: eg(t.parentElement),
        left: eg(t.previousElementSibling),
        right: eg(t.nextElementSibling)
      });
      t = t.parentElement;
    }
    return {
      element: eg(e),
      stack: n,
      ownerDocument: e.ownerDocument
    };
  }
  function ew(e) {
    if (e) {
      var n;
      var t;
      var r;
      var i = e.stack;
      var c = e.ownerDocument;
      var a = new Map();
      var f = 0;
      for (; f < i.length; f++) {
        var s = i[f];
        var l = (n = s.parent) === null || n === undefined ? undefined : n.call(s);
        if (l && c.contains(l)) {
          var d = (t = s.left) === null || t === undefined ? undefined : t.call(s);
          var v = s.current();
          var p = l.contains(v) ? v : undefined;
          var h = (r = s.right) === null || r === undefined ? undefined : r.call(s);
          var m = B([l], a);
          var b = p ?? (d == null ? undefined : d.nextElementSibling) ?? h ?? d;
          while (b) {
            for (var y = 0; y < m.length; y++) {
              var g = m[y];
              if (b == null ? undefined : b.contains(g.node)) {
                return g.node;
              }
            }
            b = b.nextElementSibling;
          }
          if (m.length) {
            return m[0].node;
          }
        }
      }
    }
  }
  function eO(e) {
    var n = ex(e);
    return function () {
      return ew(n);
    };
  }
  function eE(e) {
    var n = ee(e).filter(G);
    var t = _(K([ed(e, e, n)], true), true, true);
    var r = K(n, false);
    return t.map(function (e) {
      var n = e.node;
      return {
        node: n,
        index: e.index,
        lockItem: r.indexOf(n) >= 0,
        guard: F(n)
      };
    });
  }
  function eP(e, n, t) {
    if (!e || !n) {
      return {};
    }
    var r = E(n);
    if (r.every(function (n) {
      return !J(n, e);
    })) {
      return {};
    }
    var o = t ? B(r, new Map()) : H(r, new Map());
    var u = o.findIndex(function (n) {
      return n.node === e;
    });
    if (u !== -1) {
      return {
        prev: o[u - 1],
        next: o[u + 1],
        first: o[0],
        last: o[o.length - 1]
      };
    }
  }
  function eA(e, n) {
    var t = n ? B(E(e), new Map()) : H(E(e), new Map());
    return {
      first: t[0],
      last: t[t.length - 1]
    };
  }
  function eS(e, n = {}, t) {
    var r;
    r = n;
    var o = Object.assign({
      scope: document.body,
      cycle: true,
      onlyTabbable: true
    }, r);
    var u = eP(e, o.scope, o.onlyTabbable);
    if (u) {
      var i = t(u, o.cycle);
      if (i) {
        et(i.node, o.focusOptions);
      }
    }
  }
  function e$(e, n, t) {
    var r;
    var o = eA(e, (r = n.onlyTabbable) === null || r === undefined || r)[t];
    if (o) {
      et(o.node, n.focusOptions);
    }
  }
  function ek(e) {
    setTimeout(e, 1);
  }
  function eM(e) {
    if (e && "current" in e) {
      return e.current;
    } else {
      return e;
    }
  }
  function eN() {
    return document && document.activeElement === document.body;
  }
  var ej = null;
  var eC = null;
  function eD() {
    return null;
  }
  var eF = null;
  var eG = false;
  var eT = false;
  function eI(e, n) {
    eF = {
      observerNode: e,
      portaledElement: n
    };
  }
  function e_(e, n, t, r) {
    var o = null;
    var u = e;
    do {
      var i = r[u];
      if (i.guard) {
        if (i.node.dataset.focusAutoGuard) {
          o = i;
        }
      } else if (i.lockItem) {
        if (u !== e) {
          return;
        }
        o = null;
      } else {
        break;
      }
    } while ((u += t) !== n);
    if (o) {
      o.node.tabIndex = 0;
    }
  }
  function eR(e) {
    return H(e, new Map());
  }
  function eL() {
    var e = false;
    if (ej) {
      var n = ej;
      var t = n.observed;
      var r = n.persistentFocus;
      var o = n.autoFocus;
      var u = n.shards;
      var i = n.crossFrame;
      var c = n.focusOptions;
      var a = n.noFocusGuards;
      var f = t || eF && eF.portaledElement;
      if (eN() && eC && eC !== document.body && (!document.body.contains(eC) || !eR([(d = eC).parentNode]).some(function (e) {
        return e.node === d;
      }))) {
        var s = eD();
        if (s) {
          s.focus();
        }
      }
      var l = document && document.activeElement;
      if (f) {
        var d;
        var v = [f].concat(u.map(eM).filter(Boolean));
        if ((!l || (ej.whiteList || function () {
          return true;
        })(l)) && (r || function () {
          if (!(i ? !!eG : eG === "meanwhile") || !a || !eC || eT) {
            return false;
          }
          var e = eR(v);
          var n = e.findIndex(function (e) {
            return e.node === eC;
          });
          return n === 0 || n === e.length - 1;
        }() || !eN() && !V() || !eC && o)) {
          if (f && !en(v) && (!l || !v.some(function (e) {
            return function e(n, t, r) {
              return t && (t.host === n && (!t.activeElement || r.contains(t.activeElement)) || t.parentNode && e(n, t.parentNode, r));
            }(l, e, e);
          })) && (!eF || eF.portaledElement !== l)) {
            if (document && !eC && l && !o) {
              if (l.blur) {
                l.blur();
              }
              document.body.focus();
            } else {
              e = ey(v, eC, {
                focusOptions: c
              });
              eF = {};
            }
          }
          if ((eC = document && document.activeElement) !== document.body) {
            eD = eO(eC);
          }
          eG = false;
        }
        if (document && l !== document.activeElement && document.querySelector("[data-focus-auto-guard]")) {
          var p = document && document.activeElement;
          var h = eE(v);
          var m = h.map(function (e) {
            return e.node;
          }).indexOf(p);
          if (m > -1) {
            h.filter(function (e) {
              var n = e.guard;
              var t = e.node;
              return n && t.dataset.focusAutoGuard;
            }).forEach(function (e) {
              return e.node.removeAttribute("tabIndex");
            });
            e_(m, h.length, 1, h);
            e_(m, -1, -1, h);
          }
        }
      }
    }
    return e;
  }
  function eU(e) {
    if (eL() && e) {
      e.stopPropagation();
      e.preventDefault();
    }
  }
  function eq() {
    return ek(eL);
  }
  function eK() {
    eT = true;
  }
  function eW() {
    eT = false;
    eG = "just";
    ek(function () {
      eG = "meanwhile";
    });
  }
  function ez() {
    document.addEventListener("focusin", eU);
    document.addEventListener("focusout", eq);
    window.addEventListener("focus", eK);
    window.addEventListener("blur", eW);
  }
  function eB() {
    document.removeEventListener("focusin", eU);
    document.removeEventListener("focusout", eq);
    window.removeEventListener("focus", eK);
    window.removeEventListener("blur", eW);
  }
  var eH = {
    moveFocusInside: ey,
    focusInside: en,
    focusNextElement: function (e, n = {}) {
      eS(e, n, function (e, n) {
        var t = e.next;
        var r = e.first;
        return t || n && r;
      });
    },
    focusPrevElement: function (e, n = {}) {
      eS(e, n, function (e, n) {
        var t = e.prev;
        var r = e.last;
        return t || n && r;
      });
    },
    focusFirstElement: function (e, n = {}) {
      e$(e, n, "first");
    },
    focusLastElement: function (e, n = {}) {
      e$(e, n, "last");
    },
    captureFocusRestore: eO
  };
  v.assignSyncMedium(function (e) {
    var n = e.target;
    var t = e.currentTarget;
    if (!t.contains(n)) {
      eI(t, n);
    }
  });
  p.assignMedium(eq);
  h.assignMedium(function (e) {
    return e(eH);
  });
  var eJ = (r = function (e) {
    return e.filter(function (e) {
      return !e.disabled;
    });
  }, o = function (e) {
    var n = e.slice(-1)[0];
    if (n && !ej) {
      ez();
    }
    var t = ej;
    var r = t && n && n.id === t.id;
    ej = n;
    if (!!t && !r) {
      t.onDeactivation();
      if (!e.filter(function (e) {
        return e.id === t.id;
      }).length) {
        t.returnFocus(!n);
      }
    }
    if (n) {
      eC = null;
      if (!r || t.observed !== n.observed) {
        n.onActivation(eH);
      }
      eL(true);
      ek(eL);
    } else {
      eB();
      eC = null;
    }
  }, function (e) {
    var n;
    var t = [];
    function u() {
      o(n = r(t.map(function (e) {
        return e.props;
      })));
    }
    var i = function (r) {
      function o() {
        return r.apply(this, arguments) || this;
      }
      classInheritanceHelper_1.setupInheritance(o, r);
      o.peek = function () {
        return n;
      };
      var i = o.prototype;
      i.componentDidMount = function () {
        t.push(this);
        u();
      };
      i.componentDidUpdate = function () {
        u();
      };
      i.componentWillUnmount = function () {
        var e = t.indexOf(this);
        t.splice(e, 1);
        u();
      };
      i.render = function () {
        return reactCoreLibraryReexport.createElement(e, this.props);
      };
      return o;
    }(reactCoreLibraryReexport.PureComponent);
    objectPropertySetter.setObjectProperty(i, "displayName", "SideEffect(" + (e.displayName || e.name || "Component") + ")");
    return i;
  })(function () {
    return null;
  });
  var eZ = reactCoreLibraryReexport.forwardRef(function (e, n) {
    return reactCoreLibraryReexport.createElement(g, objectAssignUtil.objectAssign({
      sideCar: eJ,
      ref: n
    }, e));
  });
  var eQ = g.propTypes || {};
  eQ.sideCar;
  objectOmitUtil_3.omitKeys(eQ, ["sideCar"]);
  eZ.propTypes = {};
  var eV = eZ;
  require.d(exports, {
    FocusLock: function () {
      return eV;
    }
  });
}