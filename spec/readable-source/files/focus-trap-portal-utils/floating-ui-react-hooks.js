// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'wD' to 'useFloatingContext'
// - Renamed export 'c0' to 'useFloatingTree'
// - Renamed export 'ox' to 'useTypeahead'
// - Renamed export 'eS' to 'FocusManager'
// - Renamed export 'JA' to 'useListItem'
// - Renamed export 'XI' to 'usePortal'
// - Renamed export 'qq' to 'useMergeRefs'
// - Renamed export 'Y$' to 'Arrow'
// - Renamed export 'xp' to 'safePolygon'
// - Renamed export 'YF' to 'useFloating'
// - Renamed export 'KK' to 'useClick'
// - Renamed export 'qs' to 'useRole'
// - Renamed export 'bQ' to 'useDismiss'
// - Renamed export 'll' to 'Portal'
// - Renamed export 'NI' to 'useHover'
// - Renamed export 'Y_' to 'useInteractions'
// - Renamed export 'vs' to 'useListNavigation'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 93720.713ae3d8.js
         * chunkId: 93720
         * moduleId: 75894
         */
module.exports = function (module, exports, require) {
  let r;
  var floatingUiPlatformUtils = require("floating-ui-platform-utils") /*id: 541179*/;
  var domLayoutUtils = require("dom-layout-utils") /*id: 229971*/;
  var floatingUiPositioningHook = require("floating-ui-positioning-hook") /*id: 965218*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var c = require.t(reactCoreLibraryReexport, 2);
  var domInertPolyfill = require("dom-inert-polyfill") /*id: 21928*/;
  var s = "input:not([inert]),select:not([inert]),textarea:not([inert]),a[href]:not([inert]),button:not([inert]),[tabindex]:not(slot):not([inert]),audio[controls]:not([inert]),video[controls]:not([inert]),[contenteditable]:not([contenteditable=\"false\"]):not([inert]),details>summary:first-of-type:not([inert]),details:not([inert])";
  var f = typeof Element == "undefined";
  var d = f ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
  var v = !f && Element.prototype.getRootNode ? function (e) {
    var t;
    if (e == null) {
      return undefined;
    } else if ((t = e.getRootNode) === null || t === undefined) {
      return undefined;
    } else {
      return t.call(e);
    }
  } : function (e) {
    if (e == null) {
      return undefined;
    } else {
      return e.ownerDocument;
    }
  };
  var m = function e(t, n = true) {
    var r;
    var u = t == null ? undefined : (r = t.getAttribute) === null || r === undefined ? undefined : r.call(t, "inert");
    return u === "" || u === "true" || n && t && e(t.parentNode);
  };
  function p(e) {
    var t;
    var n = e == null ? undefined : (t = e.getAttribute) === null || t === undefined ? undefined : t.call(e, "contenteditable");
    return n === "" || n === "true";
  }
  function g(e, t, n) {
    if (m(e)) {
      return [];
    }
    var r = Array.prototype.slice.apply(e.querySelectorAll(s));
    if (t && d.call(e, s)) {
      r.unshift(e);
    }
    return r = r.filter(n);
  }
  var h = function e(t, n, r) {
    var u = [];
    var o = Array.from(t);
    while (o.length) {
      var l = o.shift();
      if (!m(l, false)) {
        if (l.tagName === "SLOT") {
          var i = l.assignedElements();
          var c = e(i.length ? i : l.children, true, r);
          if (r.flatten) {
            u.push.apply(u, c);
          } else {
            u.push({
              scopeParent: l,
              candidates: c
            });
          }
        } else {
          if (d.call(l, s) && r.filter(l) && (n || !t.includes(l))) {
            u.push(l);
          }
          var a = l.shadowRoot || typeof r.getShadowRoot == "function" && r.getShadowRoot(l);
          var f = !m(a, false) && (!r.shadowRootFilter || r.shadowRootFilter(l));
          if (a && f) {
            var v = e(a === true ? l.children : a.children, true, r);
            if (r.flatten) {
              u.push.apply(u, v);
            } else {
              u.push({
                scopeParent: l,
                candidates: v
              });
            }
          } else {
            o.unshift.apply(o, l.children);
          }
        }
      }
    }
    return u;
  };
  function y(e) {
    return !isNaN(parseInt(e.getAttribute("tabindex"), 10));
  }
  function E(e) {
    if (!e) {
      throw Error("No node provided");
    }
    if (e.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(e.tagName) || p(e)) && !y(e)) {
      return 0;
    } else {
      return e.tabIndex;
    }
  }
  function b(e, t) {
    var n = E(e);
    if (n < 0 && t && !y(e)) {
      return 0;
    } else {
      return n;
    }
  }
  function w(e, t) {
    if (e.tabIndex === t.tabIndex) {
      return e.documentOrder - t.documentOrder;
    } else {
      return e.tabIndex - t.tabIndex;
    }
  }
  function R(e) {
    return e.tagName === "INPUT";
  }
  function x(e, t) {
    for (var n = 0; n < e.length; n++) {
      if (e[n].checked && e[n].form === t) {
        return e[n];
      }
    }
  }
  function k(e) {
    if (!e.name) {
      return true;
    }
    var t;
    var n = e.form || v(e);
    function r(e) {
      return n.querySelectorAll("input[type=\"radio\"][name=\"" + e + "\"]");
    }
    if (typeof window != "undefined" && window.CSS !== undefined && typeof window.CSS.escape == "function") {
      t = r(window.CSS.escape(e.name));
    } else {
      try {
        t = r(e.name);
      } catch (e) {
        return false;
      }
    }
    var u = x(t, e.form);
    return !u || u === e;
  }
  function C(e) {
    return R(e) && e.type === "radio" && !k(e);
  }
  function T(e) {
    var n;
    var r;
    var u;
    var l;
    var i;
    var c = e && v(e);
    var a = c?.host;
    var s = false;
    if (c && c !== e) {
      for (s = (n = a) !== null && n !== undefined && (r = n.ownerDocument) !== null && r !== undefined && !!r.contains(a) || e != null && (u = e.ownerDocument) !== null && u !== undefined && !!u.contains(e); !s && a;) {
        s = (l = a = (c = v(a))?.host) !== null && l !== undefined && (i = l.ownerDocument) !== null && i !== undefined && !!i.contains(a);
      }
    }
    return s;
  }
  function S(e) {
    var t = e.getBoundingClientRect();
    var n = t.width;
    var r = t.height;
    return n === 0 && r === 0;
  }
  function L(e, t) {
    var n = t.displayCheck;
    var r = t.getShadowRoot;
    if (getComputedStyle(e).visibility === "hidden") {
      return true;
    }
    var u = d.call(e, "details>summary:first-of-type") ? e.parentElement : e;
    if (d.call(u, "details:not([open]) *")) {
      return true;
    }
    if (n && n !== "full" && n !== "legacy-full") {
      if (n === "non-zero-area") {
        return S(e);
      }
    } else {
      if (typeof r == "function") {
        var o = e;
        for (; e;) {
          var l = e.parentElement;
          var i = v(e);
          if (l && !l.shadowRoot && r(l) === true) {
            return S(e);
          }
          e = e.assignedSlot ? e.assignedSlot : l || i === e.ownerDocument ? l : i.host;
        }
        e = o;
      }
      if (T(e)) {
        return !e.getClientRects().length;
      }
      if (n !== "legacy-full") {
        return true;
      }
    }
    return false;
  }
  function A(e) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(e.tagName)) {
      for (var t = e.parentElement; t;) {
        if (t.tagName === "FIELDSET" && t.disabled) {
          for (var n = 0; n < t.children.length; n++) {
            var r = t.children.item(n);
            if (r.tagName === "LEGEND") {
              return !!d.call(t, "fieldset[disabled] *") || !r.contains(e);
            }
          }
          return true;
        }
        t = t.parentElement;
      }
    }
    return false;
  }
  function M(e, t) {
    return !t.disabled && !m(t) && (!R(t) || t.type !== "hidden") && !L(t, e) && (t.tagName !== "DETAILS" || !Array.prototype.slice.apply(t.children).some(function (e) {
      return e.tagName === "SUMMARY";
    })) && !A(t);
  }
  function I(e, t) {
    return !C(t) && !(E(t) < 0) && !!M(e, t);
  }
  function N(e) {
    var t = parseInt(e.getAttribute("tabindex"), 10);
    return !!isNaN(t) || !!(t >= 0);
  }
  var O = function e(t) {
    var n = [];
    var r = [];
    t.forEach(function (t, u) {
      var o = !!t.scopeParent;
      var l = o ? t.scopeParent : t;
      var i = b(l, o);
      var c = o ? e(t.candidates) : l;
      if (i === 0) {
        if (o) {
          n.push.apply(n, c);
        } else {
          n.push(l);
        }
      } else {
        r.push({
          documentOrder: u,
          tabIndex: i,
          item: t,
          isScope: o,
          content: c
        });
      }
    });
    return r.sort(w).reduce(function (e, t) {
      if (t.isScope) {
        e.push.apply(e, t.content);
      } else {
        e.push(t.content);
      }
      return e;
    }, []).concat(n);
  };
  function P(e, t) {
    var n;
    return O((t = t || {}).getShadowRoot ? h([e], t.includeContainer, {
      filter: I.bind(null, t),
      flatten: false,
      getShadowRoot: t.getShadowRoot,
      shadowRootFilter: N
    }) : g(e, t.includeContainer, I.bind(null, t)));
  }
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  function _() {
    return (_ = Object.assign ? Object.assign.bind() : function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) {
          if (Object.prototype.hasOwnProperty.call(n, r)) {
            e[r] = n[r];
          }
        }
      }
      return e;
    }).apply(this, arguments);
  }
  var F = typeof document != "undefined" ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  let K = false;
  let B = 0;
  let q = () => "floating-ui-" + B++;
  let U = c["useId".toString()] || function () {
    let [e, t] = reactCoreLibraryReexport.useState(() => K ? q() : undefined);
    F(() => {
      if (e == null) {
        t(q());
      }
    }, []);
    reactCoreLibraryReexport.useEffect(() => {
      K ||= true;
    }, []);
    return e;
  };
  let j = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let {
      context: {
        placement: n,
        elements: {
          floating: r
        },
        middlewareData: {
          arrow: o
        }
      },
      width: l = 14,
      height: c = 7,
      tipRadius: a = 0,
      strokeWidth: s = 0,
      staticOffset: f,
      stroke: d,
      d: v,
      style: {
        transform: m,
        ...p
      } = {},
      ...g
    } = e;
    let h = U();
    if (!r) {
      return null;
    }
    let y = (s *= 2) / 2;
    let E = l / 2 * (-(a / 8) + 1);
    let b = c / 2 * a / 4;
    let [w, R] = n.split("-");
    let x = floatingUiPlatformUtils.convertRectToViewport.isRTL(r);
    let k = !!v;
    let C = w === "top" || w === "bottom";
    let T = f && R === "end" ? "bottom" : "top";
    let S = f && R === "end" ? "right" : "left";
    if (f && x) {
      S = R === "end" ? "left" : "right";
    }
    let L = (o == null ? undefined : o.x) != null ? f || o.x : "";
    let A = (o == null ? undefined : o.y) != null ? f || o.y : "";
    let M = v || "M0,0 H" + l + (" L" + (l - E)) + "," + (c - b) + (" Q" + l / 2 + "," + c + " " + E) + "," + (c - b) + " Z";
    let I = {
      top: k ? "rotate(180deg)" : "",
      left: k ? "rotate(90deg)" : "rotate(-90deg)",
      bottom: k ? "" : "rotate(180deg)",
      right: k ? "rotate(-90deg)" : "rotate(90deg)"
    }[w];
    return reactCoreLibraryReexport.createElement("svg", _({}, g, {
      "aria-hidden": true,
      ref: t,
      width: k ? l : l + s,
      height: l,
      viewBox: "0 0 " + l + " " + (c > l ? c : l),
      style: {
        position: "absolute",
        pointerEvents: "none",
        [S]: L,
        [T]: A,
        [w]: C || k ? "100%" : "calc(100% - " + s / 2 + "px)",
        transform: "" + I + (m ?? ""),
        ...p
      }
    }), s > 0 && reactCoreLibraryReexport.createElement("path", {
      clipPath: "url(#" + h + ")",
      fill: "none",
      stroke: d,
      strokeWidth: s + +!v,
      d: M
    }), reactCoreLibraryReexport.createElement("path", {
      stroke: s && !v ? g.fill : "none",
      d: M
    }), reactCoreLibraryReexport.createElement("clipPath", {
      id: h
    }, reactCoreLibraryReexport.createElement("rect", {
      x: -y,
      y: y * (k ? -1 : 1),
      width: l + s,
      height: l
    })));
  });
  let Y = reactCoreLibraryReexport.createContext(null);
  let H = reactCoreLibraryReexport.createContext(null);
  let W = () => {
    var e;
    return ((e = reactCoreLibraryReexport.useContext(Y)) == null ? undefined : e.id) || null;
  };
  let z = () => reactCoreLibraryReexport.useContext(H);
  function Z(e) {
    return (e == null ? undefined : e.ownerDocument) || document;
  }
  function V() {
    let e = navigator.userAgentData;
    if (e != null && e.platform) {
      return e.platform;
    } else {
      return navigator.platform;
    }
  }
  function X(e) {
    return Z(e).defaultView || window;
  }
  function J(e) {
    return !!e && e instanceof X(e).Element;
  }
  function G(e) {
    return !!e && e instanceof X(e).HTMLElement;
  }
  function $(e) {
    if (e.mozInputSource === 0 && e.isTrusted) {
      return true;
    }
    let t = /Android/i;
    if ((t.test(V()) || t.test(function () {
      let e = navigator.userAgentData;
      if (e && Array.isArray(e.brands)) {
        return e.brands.map(e => {
          let {
            brand: t,
            version: n
          } = e;
          return t + "/" + n;
        }).join(" ");
      } else {
        return navigator.userAgent;
      }
    }())) && e.pointerType) {
      return e.type === "click" && e.buttons === 1;
    } else {
      return e.detail === 0 && !e.pointerType;
    }
  }
  function Q(e) {
    return e.width === 0 && e.height === 0 || e.width === 1 && e.height === 1 && e.pressure === 0 && e.detail === 0 && e.pointerType !== "mouse" || e.width < 1 && e.height < 1 && e.pressure === 0 && e.detail === 0;
  }
  function ee() {
    return /apple/i.test(navigator.vendor);
  }
  function et(e, t) {
    let n = ["mouse", "pen"];
    if (!t) {
      n.push("", undefined);
    }
    return n.includes(e);
  }
  function en(e, t) {
    if (!e || !t) {
      return false;
    }
    let n = t.getRootNode && t.getRootNode();
    if (e.contains(t)) {
      return true;
    }
    if (n && function (e) {
      if (typeof ShadowRoot == "undefined") {
        return false;
      }
      let t = X(e).ShadowRoot;
      return e instanceof t || e instanceof ShadowRoot;
    }(n)) {
      let n = t;
      while (n) {
        if (e === n) {
          return true;
        }
        n = n.parentNode || n.host;
      }
    }
    return false;
  }
  function er(e) {
    return "data-floating-ui-" + e;
  }
  function eu(e) {
    let t = reactCoreLibraryReexport.useRef(e);
    F(() => {
      t.current = e;
    });
    return t;
  }
  let eo = er("safe-polygon");
  function el(e, t, n) {
    if (n && !et(n)) {
      return 0;
    } else if (typeof e == "number") {
      return e;
    } else if (e == null) {
      return undefined;
    } else {
      return e[t];
    }
  }
  function ei(e, t = {}) {
    let {
      open: n,
      onOpenChange: r,
      dataRef: u,
      events: o,
      elements: {
        domReference: l,
        floating: c
      },
      refs: a
    } = e;
    let {
      enabled: s = true,
      delay: f = 0,
      handleClose: d = null,
      mouseOnly: v = false,
      restMs: m = 0,
      move: p = true
    } = t;
    let g = z();
    let h = W();
    let y = eu(d);
    let E = eu(f);
    let b = reactCoreLibraryReexport.useRef();
    let w = reactCoreLibraryReexport.useRef();
    let R = reactCoreLibraryReexport.useRef();
    let x = reactCoreLibraryReexport.useRef();
    let k = reactCoreLibraryReexport.useRef(true);
    let C = reactCoreLibraryReexport.useRef(false);
    let T = reactCoreLibraryReexport.useRef(() => {});
    let S = reactCoreLibraryReexport.useCallback(() => {
      var e;
      let t = (e = u.current.openEvent) == null ? undefined : e.type;
      return (t == null ? undefined : t.includes("mouse")) && t !== "mousedown";
    }, [u]);
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        o.on("dismiss", e);
        return () => {
          o.off("dismiss", e);
        };
      }
      function e() {
        clearTimeout(w.current);
        clearTimeout(x.current);
        k.current = true;
      }
    }, [s, o]);
    reactCoreLibraryReexport.useEffect(() => {
      if (!s || !y.current || !n) {
        return;
      }
      function e(e) {
        if (S()) {
          r(false, e);
        }
      }
      let t = Z(c).documentElement;
      t.addEventListener("mouseleave", e);
      return () => {
        t.removeEventListener("mouseleave", e);
      };
    }, [c, n, r, s, y, u, S]);
    let L = reactCoreLibraryReexport.useCallback(function (e, t = true) {
      let n = el(E.current, "close", b.current);
      if (n && !R.current) {
        clearTimeout(w.current);
        w.current = setTimeout(() => r(false, e), n);
      } else if (t) {
        clearTimeout(w.current);
        r(false, e);
      }
    }, [E, r]);
    let A = reactCoreLibraryReexport.useCallback(() => {
      T.current();
      R.current = undefined;
    }, []);
    let M = reactCoreLibraryReexport.useCallback(() => {
      if (C.current) {
        let e = Z(a.floating.current).body;
        e.style.pointerEvents = "";
        e.removeAttribute(eo);
        C.current = false;
      }
    }, [a]);
    reactCoreLibraryReexport.useEffect(() => {
      if (s && J(l)) {
        if (n) {
          l.addEventListener("mouseleave", a);
        }
        if (c != null) {
          c.addEventListener("mouseleave", a);
        }
        if (p) {
          l.addEventListener("mousemove", o, {
            once: true
          });
        }
        l.addEventListener("mouseenter", o);
        l.addEventListener("mouseleave", i);
        return () => {
          if (n) {
            l.removeEventListener("mouseleave", a);
          }
          if (c != null) {
            c.removeEventListener("mouseleave", a);
          }
          if (p) {
            l.removeEventListener("mousemove", o);
          }
          l.removeEventListener("mouseenter", o);
          l.removeEventListener("mouseleave", i);
        };
      }
      function t() {
        return !!u.current.openEvent && ["click", "mousedown"].includes(u.current.openEvent.type);
      }
      function o(e) {
        clearTimeout(w.current);
        k.current = false;
        if (v && !et(b.current) || m > 0 && el(E.current, "open") === 0) {
          return;
        }
        let t = el(E.current, "open", b.current);
        if (t) {
          w.current = setTimeout(() => {
            r(true, e);
          }, t);
        } else {
          r(true, e);
        }
      }
      function i(r) {
        if (t()) {
          return;
        }
        T.current();
        let u = Z(c);
        clearTimeout(x.current);
        if (y.current) {
          if (!n) {
            clearTimeout(w.current);
          }
          R.current = y.current({
            ...e,
            tree: g,
            x: r.clientX,
            y: r.clientY,
            onClose() {
              M();
              A();
              L(r);
            }
          });
          let t = R.current;
          u.addEventListener("mousemove", t);
          T.current = () => {
            u.removeEventListener("mousemove", t);
          };
          return;
        }
        if (b.current !== "touch" || !en(c, r.relatedTarget)) {
          L(r);
        }
      }
      function a(n) {
        if (!t()) {
          if (y.current != null) {
            y.current({
              ...e,
              tree: g,
              x: n.clientX,
              y: n.clientY,
              onClose() {
                M();
                A();
                L(n);
              }
            })(n);
          }
        }
      }
    }, [l, c, s, e, v, m, p, L, A, M, r, n, g, E, y, u]);
    F(() => {
      var e;
      var t;
      var r;
      if (s && n && (e = y.current) != null && e.__options.blockPointerEvents && S()) {
        let e = Z(c).body;
        e.setAttribute(eo, "");
        e.style.pointerEvents = "none";
        C.current = true;
        if (J(l) && c) {
          let e = g == null ? undefined : (t = g.nodesRef.current.find(e => e.id === h)) == null ? undefined : (r = t.context) == null ? undefined : r.elements.floating;
          if (e) {
            e.style.pointerEvents = "";
          }
          l.style.pointerEvents = "auto";
          c.style.pointerEvents = "auto";
          return () => {
            l.style.pointerEvents = "";
            c.style.pointerEvents = "";
          };
        }
      }
    }, [s, n, h, c, l, g, y, u, S]);
    F(() => {
      if (!n) {
        b.current = undefined;
        A();
        M();
      }
    }, [n, A, M]);
    reactCoreLibraryReexport.useEffect(() => () => {
      A();
      clearTimeout(w.current);
      clearTimeout(x.current);
      M();
    }, [s, A, M]);
    return reactCoreLibraryReexport.useMemo(() => {
      if (!s) {
        return {};
      }
      function e(e) {
        b.current = e.pointerType;
      }
      return {
        reference: {
          onPointerDown: e,
          onPointerEnter: e,
          onMouseMove(e) {
            if (!n && m !== 0) {
              clearTimeout(x.current);
              x.current = setTimeout(() => {
                if (!k.current) {
                  r(true, e.nativeEvent);
                }
              }, m);
            }
          }
        },
        floating: {
          onMouseEnter() {
            clearTimeout(w.current);
          },
          onMouseLeave(e) {
            o.emit("dismiss", {
              type: "mouseLeave",
              data: {
                returnFocus: false
              }
            });
            L(e.nativeEvent, false);
          }
        }
      };
    }, [o, s, m, n, r, L]);
  }
  function ec(e) {
    let t = e.activeElement;
    while (((n = t) == null ? undefined : (r = n.shadowRoot) == null ? undefined : r.activeElement) != null) {
      var n;
      var r;
      t = t.shadowRoot.activeElement;
    }
    return t;
  }
  let ea = 0;
  function es(e, t = {}) {
    let {
      preventScroll: n = false,
      cancelPrevious: r = true,
      sync: u = false
    } = t;
    if (r) {
      cancelAnimationFrame(ea);
    }
    let o = () => e == null ? undefined : e.focus({
      preventScroll: n
    });
    if (u) {
      o();
    } else {
      ea = requestAnimationFrame(o);
    }
  }
  function ef(e, t) {
    let n = e.filter(e => {
      var n;
      return e.parentId === t && ((n = e.context) == null ? undefined : n.open);
    });
    let r = n;
    while (r.length) {
      r = e.filter(e => {
        var t;
        if ((t = r) == null) {
          return undefined;
        } else {
          return t.some(t => {
            var n;
            return e.parentId === t.id && ((n = e.context) == null ? undefined : n.open);
          });
        }
      });
      n = n.concat(r);
    }
    return n;
  }
  function ed(e) {
    if ("composedPath" in e) {
      return e.composedPath()[0];
    } else {
      return e.target;
    }
  }
  function ev(e) {
    return G(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])");
  }
  function em(e) {
    e.preventDefault();
    e.stopPropagation();
  }
  let ep = () => ({
    getShadowRoot: true,
    displayCheck: typeof ResizeObserver == "function" && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
  });
  function eg(e, t) {
    let n = P(e, ep());
    if (t === "prev") {
      n.reverse();
    }
    let r = n.indexOf(ec(Z(e)));
    return n.slice(r + 1)[0];
  }
  function eh() {
    return eg(document.body, "next");
  }
  function ey() {
    return eg(document.body, "prev");
  }
  function eE(e, t) {
    let n = t || e.currentTarget;
    let r = e.relatedTarget;
    return !r || !en(n, r);
  }
  let eb = {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "fixed",
    whiteSpace: "nowrap",
    width: "1px",
    top: 0,
    left: 0
  };
  function ew(e) {
    if (e.key === "Tab") {
      e.target;
      clearTimeout(r);
    }
  }
  let eR = reactCoreLibraryReexport.forwardRef(function (e, t) {
    let [n, r] = reactCoreLibraryReexport.useState();
    F(() => {
      if (ee()) {
        r("button");
      }
      document.addEventListener("keydown", ew);
      return () => {
        document.removeEventListener("keydown", ew);
      };
    }, []);
    let u = {
      ref: t,
      tabIndex: 0,
      role: n,
      "aria-hidden": !n || undefined,
      [er("focus-guard")]: "",
      style: eb
    };
    return reactCoreLibraryReexport.createElement("span", _({}, e, u));
  });
  let ex = reactCoreLibraryReexport.createContext(null);
  function ek(e) {
    let {
      children: t,
      id: n,
      root: r = null,
      preserveTabOrder: u = true
    } = e;
    let o = function (e) {
      let {
        id: t,
        root: n
      } = e === undefined ? {} : e;
      let [r, u] = reactCoreLibraryReexport.useState(null);
      let o = U();
      let l = eC();
      let c = reactCoreLibraryReexport.useMemo(() => ({
        id: t,
        root: n,
        portalContext: l,
        uniqueId: o
      }), [t, n, l, o]);
      let a = reactCoreLibraryReexport.useRef();
      F(() => () => {
        if (r != null) {
          r.remove();
        }
      }, [r, c]);
      F(() => {
        if (a.current === c) {
          return;
        }
        a.current = c;
        let {
          id: e,
          root: t,
          portalContext: n,
          uniqueId: r
        } = c;
        let o = e ? document.getElementById(e) : null;
        let l = er("portal");
        if (o) {
          let e = document.createElement("div");
          e.id = r;
          e.setAttribute(l, "");
          o.appendChild(e);
          u(e);
        } else {
          let o = t || (n == null ? undefined : n.portalNode);
          if (o && !J(o)) {
            o = o.current;
          }
          o = o || document.body;
          let i = null;
          if (e) {
            (i = document.createElement("div")).id = e;
            o.appendChild(i);
          }
          let c = document.createElement("div");
          c.id = r;
          c.setAttribute(l, "");
          (o = i || o).appendChild(c);
          u(c);
        }
      }, [c]);
      return r;
    }({
      id: n,
      root: r
    });
    let [l, c] = reactCoreLibraryReexport.useState(null);
    let a = reactCoreLibraryReexport.useRef(null);
    let s = reactCoreLibraryReexport.useRef(null);
    let f = reactCoreLibraryReexport.useRef(null);
    let d = reactCoreLibraryReexport.useRef(null);
    let v = !!l && !l.modal && l.open && u && (!!r || !!o);
    reactCoreLibraryReexport.useEffect(() => {
      if (o && u && (l == null || !l.modal)) {
        o.addEventListener("focusin", e, true);
        o.addEventListener("focusout", e, true);
        return () => {
          o.removeEventListener("focusin", e, true);
          o.removeEventListener("focusout", e, true);
        };
      }
      function e(e) {
        if (o && eE(e)) {
          (e.type === "focusin" ? function (e) {
            e.querySelectorAll("[data-tabindex]").forEach(e => {
              let t = e.dataset.tabindex;
              delete e.dataset.tabindex;
              if (t) {
                e.setAttribute("tabindex", t);
              } else {
                e.removeAttribute("tabindex");
              }
            });
          } : function (e) {
            P(e, ep()).forEach(e => {
              e.dataset.tabindex = e.getAttribute("tabindex") || "";
              e.setAttribute("tabindex", "-1");
            });
          })(o);
        }
      }
    }, [o, u, l == null ? undefined : l.modal]);
    return reactCoreLibraryReexport.createElement(ex.Provider, {
      value: reactCoreLibraryReexport.useMemo(() => ({
        preserveTabOrder: u,
        beforeOutsideRef: a,
        afterOutsideRef: s,
        beforeInsideRef: f,
        afterInsideRef: d,
        portalNode: o,
        setFocusManagerState: c
      }), [u, o])
    }, v && o && reactCoreLibraryReexport.createElement(eR, {
      "data-type": "outside",
      ref: a,
      onFocus: e => {
        if (eE(e, o)) {
          var t;
          if ((t = f.current) != null) {
            t.focus();
          }
        } else {
          let e = ey() || (l == null ? undefined : l.refs.domReference.current);
          if (e != null) {
            e.focus();
          }
        }
      }
    }), v && o && reactCoreLibraryReexport.createElement("span", {
      "aria-owns": o.id,
      style: eb
    }), o && reactDomEntryWrapper.createPortal(t, o), v && o && reactCoreLibraryReexport.createElement(eR, {
      "data-type": "outside",
      ref: s,
      onFocus: e => {
        if (eE(e, o)) {
          var t;
          if ((t = d.current) != null) {
            t.focus();
          }
        } else {
          let t = eh() || (l == null ? undefined : l.refs.domReference.current);
          if (t != null) {
            t.focus();
          }
          if (l == null ? undefined : l.closeOnFocusOut) {
            if (l != null) {
              l.onOpenChange(false, e.nativeEvent);
            }
          }
        }
      }
    }));
  }
  let eC = () => reactCoreLibraryReexport.useContext(ex);
  let eT = reactCoreLibraryReexport.forwardRef(function (e, t) {
    return reactCoreLibraryReexport.createElement("button", _({}, e, {
      type: "button",
      ref: t,
      tabIndex: -1,
      style: eb
    }));
  });
  function eS(e) {
    let {
      context: t,
      children: n,
      order: r = ["content"],
      guards: u = true,
      initialFocus: o = 0,
      returnFocus: l = true,
      modal: c = true,
      visuallyHiddenDismiss: s = false,
      closeOnFocusOut: f = true
    } = e;
    let {
      open: d,
      refs: v,
      nodeId: m,
      onOpenChange: p,
      events: g,
      dataRef: h,
      elements: {
        domReference: y,
        floating: E
      }
    } = t;
    let b = !domInertPolyfill.hasInertSupport() || u;
    let w = eu(r);
    let R = eu(o);
    let x = eu(l);
    let k = z();
    let C = eC();
    let T = typeof o == "number" && o < 0;
    let S = reactCoreLibraryReexport.useRef(null);
    let L = reactCoreLibraryReexport.useRef(null);
    let A = reactCoreLibraryReexport.useRef(false);
    let M = reactCoreLibraryReexport.useRef(null);
    let I = reactCoreLibraryReexport.useRef(false);
    let N = C != null;
    let O = y && y.getAttribute("role") === "combobox" && ev(y);
    let D = reactCoreLibraryReexport.useCallback(function (e = E) {
      if (e) {
        return P(e, ep());
      } else {
        return [];
      }
    }, [E]);
    let _ = reactCoreLibraryReexport.useCallback(e => {
      let t = D(e);
      return w.current.map(e => y && e === "reference" ? y : E && e === "floating" ? E : t).filter(Boolean).flat();
    }, [y, E, w, D]);
    function K(e) {
      if (s && c) {
        return reactCoreLibraryReexport.createElement(eT, {
          ref: e === "start" ? S : L,
          onClick: e => p(false, e.nativeEvent)
        }, typeof s == "string" ? s : "Dismiss");
      } else {
        return null;
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      if (!c) {
        return;
      }
      function e(e) {
        if (e.key === "Tab") {
          if (en(E, ec(Z(E))) && D().length === 0 && !O) {
            em(e);
          }
          let t = _();
          let n = ed(e);
          if (w.current[0] === "reference" && n === y) {
            em(e);
            if (e.shiftKey) {
              es(t[t.length - 1]);
            } else {
              es(t[1]);
            }
          }
          if (w.current[1] === "floating" && n === E && e.shiftKey) {
            em(e);
            es(t[0]);
          }
        }
      }
      let t = Z(E);
      t.addEventListener("keydown", e);
      return () => {
        t.removeEventListener("keydown", e);
      };
    }, [y, E, c, w, v, O, D, _]);
    reactCoreLibraryReexport.useEffect(() => {
      if (f && E && G(y)) {
        y.addEventListener("focusout", t);
        y.addEventListener("pointerdown", e);
        if (!c) {
          E.addEventListener("focusout", t);
        }
        return () => {
          y.removeEventListener("focusout", t);
          y.removeEventListener("pointerdown", e);
          if (!c) {
            E.removeEventListener("focusout", t);
          }
        };
      }
      function e() {
        I.current = true;
        setTimeout(() => {
          I.current = false;
        });
      }
      function t(e) {
        let t = e.relatedTarget;
        queueMicrotask(() => {
          let n = !en(y, t) && !en(E, t) && !en(t, E) && !en(C == null ? undefined : C.portalNode, t) && (t == null || !t.hasAttribute(er("focus-guard"))) && (!k || !ef(k.nodesRef.current, m).find(e => {
            var n;
            var r;
            return en((n = e.context) == null ? undefined : n.elements.floating, t) || en((r = e.context) == null ? undefined : r.elements.domReference, t);
          }) && !function (e, t) {
            var n;
            let r = [];
            let u = (n = e.find(e => e.id === t)) == null ? undefined : n.parentId;
            while (u) {
              let t = e.find(e => e.id === u);
              u = t == null ? undefined : t.parentId;
              if (t) {
                r = r.concat(t);
              }
            }
            return r;
          }(k.nodesRef.current, m).find(e => {
            var n;
            var r;
            return ((n = e.context) == null ? undefined : n.elements.floating) === t || ((r = e.context) == null ? undefined : r.elements.domReference) === t;
          }));
          if (t && n && !I.current && t !== M.current) {
            A.current = true;
            p(false, e);
          }
        });
      }
    }, [y, E, c, m, k, C, p, f]);
    reactCoreLibraryReexport.useEffect(() => {
      var e;
      let t = Array.from((C == null ? undefined : (e = C.portalNode) == null ? undefined : e.querySelectorAll("[" + er("portal") + "]")) || []);
      if (E && c) {
        let e = [E, ...t, S.current, L.current].filter(e => e != null);
        let n = (b ? domInertPolyfill.manageAriaHidden : domInertPolyfill.suppressElements)(w.current.includes("reference") || O ? e.concat(y || []) : e, undefined, er("inert"));
        return () => {
          n();
        };
      }
    }, [y, E, c, w, C, O, b]);
    F(() => {
      if (!E) {
        return;
      }
      let e = ec(Z(E));
      queueMicrotask(() => {
        let t = _(E);
        let n = R.current;
        let r = (typeof n == "number" ? t[n] : n.current) || E;
        let u = en(E, e);
        if (!T && !u && !!d) {
          es(r, {
            preventScroll: r === E
          });
        }
      });
    }, [d, E, T, _, R]);
    F(() => {
      if (!E) {
        return;
      }
      let e = false;
      let t = Z(E);
      let n = ec(t);
      let r = h.current;
      function u(t) {
        if (t.type === "escapeKey" && v.domReference.current) {
          M.current = v.domReference.current;
        }
        if (["referencePress", "escapeKey"].includes(t.type)) {
          return;
        }
        let n = t.data.returnFocus;
        if (typeof n == "object") {
          A.current = false;
          e = n.preventScroll;
        } else {
          A.current = !n;
        }
      }
      M.current = n;
      g.on("dismiss", u);
      return () => {
        g.off("dismiss", u);
        let n = ec(t);
        if ((en(E, n) || k && ef(k.nodesRef.current, m).some(e => {
          var t;
          return en((t = e.context) == null ? undefined : t.elements.floating, n);
        }) || r.openEvent && ["click", "mousedown"].includes(r.openEvent.type)) && v.domReference.current) {
          M.current = v.domReference.current;
        }
        if (x.current && G(M.current) && !A.current) {
          es(M.current, {
            cancelPrevious: false,
            preventScroll: e
          });
        }
      };
    }, [E, x, h, v, g, k, m]);
    F(() => {
      if (C) {
        C.setFocusManagerState({
          ...t,
          modal: c,
          closeOnFocusOut: f,
          open: d
        });
        return () => {
          C.setFocusManagerState(null);
        };
      }
    }, [C, c, d, f, t]);
    F(() => {
      if (E && typeof MutationObserver == "function") {
        let e = () => {
          let e = E.getAttribute("tabindex");
          if (w.current.includes("floating") || ec(Z(E)) !== v.domReference.current && D().length === 0) {
            if (e !== "0") {
              E.setAttribute("tabindex", "0");
            }
          } else if (e !== "-1") {
            E.setAttribute("tabindex", "-1");
          }
        };
        e();
        let t = new MutationObserver(e);
        t.observe(E, {
          childList: true,
          subtree: true,
          attributes: true
        });
        return () => {
          t.disconnect();
        };
      }
    }, [E, v, w, D]);
    let B = b && !O && (N || c);
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, B && reactCoreLibraryReexport.createElement(eR, {
      "data-type": "inside",
      ref: C == null ? undefined : C.beforeInsideRef,
      onFocus: e => {
        if (c) {
          let e = _();
          es(r[0] === "reference" ? e[0] : e[e.length - 1]);
        } else if (C != null && C.preserveTabOrder && C.portalNode) {
          A.current = false;
          if (eE(e, C.portalNode)) {
            let e = eh() || y;
            if (e != null) {
              e.focus();
            }
          } else {
            var t;
            if ((t = C.beforeOutsideRef.current) != null) {
              t.focus();
            }
          }
        }
      }
    }), !O && K("start"), n, K("end"), B && reactCoreLibraryReexport.createElement(eR, {
      "data-type": "inside",
      ref: C == null ? undefined : C.afterInsideRef,
      onFocus: e => {
        if (c) {
          es(_()[0]);
        } else if (C != null && C.preserveTabOrder && C.portalNode) {
          if (f) {
            A.current = true;
          }
          if (eE(e, C.portalNode)) {
            let e = ey() || y;
            if (e != null) {
              e.focus();
            }
          } else {
            var t;
            if ((t = C.afterOutsideRef.current) != null) {
              t.focus();
            }
          }
        }
      }
    }));
  }
  function eL(e, t) {
    let n = e.compareDocumentPosition(t);
    if (n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      return -1;
    } else if (n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS) {
      return 1;
    } else {
      return 0;
    }
  }
  let eA = reactCoreLibraryReexport.createContext({
    register: () => {},
    unregister: () => {},
    map: new Map(),
    elementsRef: {
      current: []
    }
  });
  function eM(e) {
    let {
      children: t,
      elementsRef: n,
      labelsRef: r
    } = e;
    let [u, o] = reactCoreLibraryReexport.useState(() => new Map());
    let l = reactCoreLibraryReexport.useCallback(e => {
      o(t => new Map(t).set(e, null));
    }, []);
    let c = reactCoreLibraryReexport.useCallback(e => {
      o(t => {
        let n = new Map(t);
        n.delete(e);
        return n;
      });
    }, []);
    F(() => {
      let e = new Map(u);
      Array.from(e.keys()).sort(eL).forEach((t, n) => {
        e.set(t, n);
      });
      if (!function (e, t) {
        if (e.size !== t.size) {
          return false;
        }
        for (let [n, r] of e.entries()) {
          if (r !== t.get(n)) {
            return false;
          }
        }
        return true;
      }(u, e)) {
        o(e);
      }
    }, [u]);
    return reactCoreLibraryReexport.createElement(eA.Provider, {
      value: reactCoreLibraryReexport.useMemo(() => ({
        register: l,
        unregister: c,
        map: u,
        elementsRef: n,
        labelsRef: r
      }), [l, c, u, n, r])
    }, t);
  }
  function eI(e) {
    let {
      label: t
    } = e === undefined ? {} : e;
    let [n, r] = reactCoreLibraryReexport.useState(null);
    let u = reactCoreLibraryReexport.useRef(null);
    let {
      register: o,
      unregister: l,
      map: c,
      elementsRef: a,
      labelsRef: s
    } = reactCoreLibraryReexport.useContext(eA);
    let f = reactCoreLibraryReexport.useCallback(e => {
      u.current = e;
      if (n !== null && (a.current[n] = e, s)) {
        let u = t !== undefined;
        s.current[n] = u ? t : (e == null ? undefined : e.textContent) ?? null;
      }
    }, [n, a, s, t]);
    F(() => {
      let e = u.current;
      if (e) {
        o(e);
        return () => {
          l(e);
        };
      }
    }, [o, l]);
    F(() => {
      let e = u.current ? c.get(u.current) : null;
      if (e != null) {
        r(e);
      }
    }, [c]);
    return reactCoreLibraryReexport.useMemo(() => ({
      ref: f,
      index: n == null ? -1 : n
    }), [n, f]);
  }
  function eN(e) {
    return G(e.target) && e.target.tagName === "BUTTON";
  }
  function eO(e, t = {}) {
    let {
      open: n,
      onOpenChange: r,
      dataRef: u,
      elements: {
        domReference: o
      }
    } = e;
    let {
      enabled: l = true,
      event: c = "click",
      toggle: a = true,
      ignoreMouse: s = false,
      keyboardHandlers: f = true
    } = t;
    let d = reactCoreLibraryReexport.useRef();
    let v = reactCoreLibraryReexport.useRef(false);
    return reactCoreLibraryReexport.useMemo(() => l ? {
      reference: {
        onPointerDown(e) {
          d.current = e.pointerType;
        },
        onMouseDown(e) {
          if (e.button === 0 && (!et(d.current, true) || !s) && c !== "click") {
            if (n) {
              if (a && (!u.current.openEvent || u.current.openEvent.type === "mousedown")) {
                r(false, e.nativeEvent);
              }
            } else {
              e.preventDefault();
              r(true, e.nativeEvent);
            }
          }
        },
        onClick(e) {
          if (c === "mousedown" && d.current) {
            d.current = undefined;
            return;
          }
          if (!et(d.current, true) || !s) {
            if (n) {
              if (a && (!u.current.openEvent || u.current.openEvent.type === "click")) {
                r(false, e.nativeEvent);
              }
            } else {
              r(true, e.nativeEvent);
            }
          }
        },
        onKeyDown(e) {
          d.current = undefined;
          if (!e.defaultPrevented && !!f && !eN(e)) {
            if (e.key === " " && !ev(o)) {
              e.preventDefault();
              v.current = true;
            }
            if (e.key === "Enter") {
              if (n) {
                if (a) {
                  r(false, e.nativeEvent);
                }
              } else {
                r(true, e.nativeEvent);
              }
            }
          }
        },
        onKeyUp(e) {
          if (!e.defaultPrevented && !!f && !eN(e) && !ev(o) && e.key === " " && v.current) {
            v.current = false;
            if (n) {
              if (a) {
                r(false, e.nativeEvent);
              }
            } else {
              r(true, e.nativeEvent);
            }
          }
        }
      }
    } : {}, [l, u, c, s, f, o, a, n, r]);
  }
  let eP = c["useInsertionEffect".toString()] || (e => e());
  function eD(e) {
    let t = reactCoreLibraryReexport.useRef(() => {});
    eP(() => {
      t.current = e;
    });
    return reactCoreLibraryReexport.useCallback(function () {
      var e = arguments.length;
      var n = Array(e);
      var r = 0;
      for (; r < e; r++) {
        n[r] = arguments[r];
      }
      if (t.current == null) {
        return undefined;
      } else {
        return t.current(...n);
      }
    }, []);
  }
  function e_(e, t) {
    return t != null && ("composedPath" in e ? e.composedPath().includes(t) : e.target != null && t.contains(e.target));
  }
  let eF = {
    pointerdown: "onPointerDown",
    mousedown: "onMouseDown",
    click: "onClick"
  };
  let eK = {
    pointerdown: "onPointerDownCapture",
    mousedown: "onMouseDownCapture",
    click: "onClickCapture"
  };
  let eB = e => {
    var t;
    var n;
    return {
      escapeKeyBubbles: typeof e == "boolean" ? e : (t = e == null ? undefined : e.escapeKey) != null && t,
      outsidePressBubbles: typeof e == "boolean" ? e : (n = e == null ? undefined : e.outsidePress) == null || n
    };
  };
  function eq(e, t = {}) {
    let {
      open: n,
      onOpenChange: r,
      events: u,
      nodeId: l,
      elements: {
        reference: c,
        domReference: a,
        floating: s
      },
      dataRef: f
    } = e;
    let {
      enabled: d = true,
      escapeKey: v = true,
      outsidePress: m = true,
      outsidePressEvent: p = "pointerdown",
      referencePress: g = false,
      referencePressEvent: h = "pointerdown",
      ancestorScroll: y = false,
      bubbles: E
    } = t;
    let b = z();
    let w = W() != null;
    let R = eD(typeof m == "function" ? m : () => false);
    let x = typeof m == "function" ? R : m;
    let k = reactCoreLibraryReexport.useRef(false);
    let {
      escapeKeyBubbles: C,
      outsidePressBubbles: T
    } = eB(E);
    let S = eD(e => {
      if (!n || !d || !v || e.key !== "Escape") {
        return;
      }
      let t = b ? ef(b.nodesRef.current, l) : [];
      if (!C && (e.stopPropagation(), t.length > 0)) {
        let e = true;
        t.forEach(t => {
          var n;
          if ((n = t.context) != null && n.open && !t.context.dataRef.current.__escapeKeyBubbles) {
            e = false;
            return;
          }
        });
        if (!e) {
          return;
        }
      }
      u.emit("dismiss", {
        type: "escapeKey",
        data: {
          returnFocus: {
            preventScroll: false
          }
        }
      });
      r(false, "nativeEvent" in e ? e.nativeEvent : e);
    });
    let L = eD(e => {
      let t = k.current;
      k.current = false;
      if (t || typeof x == "function" && !x(e)) {
        return;
      }
      let n = ed(e);
      if (G(n) && s) {
        let t = n.clientWidth > 0 && n.scrollWidth > n.clientWidth;
        let r = n.clientHeight > 0 && n.scrollHeight > n.clientHeight;
        let u = r && e.offsetX > n.clientWidth;
        if (r && X(s).getComputedStyle(n).direction === "rtl") {
          u = e.offsetX <= n.offsetWidth - n.clientWidth;
        }
        if (u || t && e.offsetY > n.clientHeight) {
          return;
        }
      }
      let o = b && ef(b.nodesRef.current, l).some(t => {
        var n;
        return e_(e, (n = t.context) == null ? undefined : n.elements.floating);
      });
      if (e_(e, s) || e_(e, a) || o) {
        return;
      }
      let i = b ? ef(b.nodesRef.current, l) : [];
      if (i.length > 0) {
        let e = true;
        i.forEach(t => {
          var n;
          if ((n = t.context) != null && n.open && !t.context.dataRef.current.__outsidePressBubbles) {
            e = false;
            return;
          }
        });
        if (!e) {
          return;
        }
      }
      u.emit("dismiss", {
        type: "outsidePress",
        data: {
          returnFocus: w ? {
            preventScroll: true
          } : $(e) || Q(e)
        }
      });
      r(false, e);
    });
    reactCoreLibraryReexport.useEffect(() => {
      if (!n || !d) {
        return;
      }
      function e(e) {
        r(false, e);
      }
      f.current.__escapeKeyBubbles = C;
      f.current.__outsidePressBubbles = T;
      let t = Z(s);
      if (v) {
        t.addEventListener("keydown", S);
      }
      if (x) {
        t.addEventListener(p, L);
      }
      let u = [];
      if (y) {
        if (J(a)) {
          u = domLayoutUtils.getScrollParents(a);
        }
        if (J(s)) {
          u = u.concat(domLayoutUtils.getScrollParents(s));
        }
        if (!J(c) && c && c.contextElement) {
          u = u.concat(domLayoutUtils.getScrollParents(c.contextElement));
        }
      }
      (u = u.filter(e => {
        var n;
        return e !== ((n = t.defaultView) == null ? undefined : n.visualViewport);
      })).forEach(t => {
        t.addEventListener("scroll", e, {
          passive: true
        });
      });
      return () => {
        if (v) {
          t.removeEventListener("keydown", S);
        }
        if (x) {
          t.removeEventListener(p, L);
        }
        u.forEach(t => {
          t.removeEventListener("scroll", e);
        });
      };
    }, [f, s, a, c, v, x, p, n, r, y, d, C, T, S, L]);
    reactCoreLibraryReexport.useEffect(() => {
      k.current = false;
    }, [x, p]);
    return reactCoreLibraryReexport.useMemo(() => d ? {
      reference: {
        onKeyDown: S,
        [eF[h]]: e => {
          if (g) {
            u.emit("dismiss", {
              type: "referencePress",
              data: {
                returnFocus: false
              }
            });
            r(false, e.nativeEvent);
          }
        }
      },
      floating: {
        onKeyDown: S,
        [eK[p]]: () => {
          k.current = true;
        }
      }
    } : {}, [d, u, g, p, h, r, S]);
  }
  function eU(e) {
    var t;
    if (e === undefined) {
      e = {};
    }
    let {
      open: n = false,
      onOpenChange: r,
      nodeId: u
    } = e;
    let [o, c] = reactCoreLibraryReexport.useState(null);
    let a = ((t = e.elements) == null ? undefined : t.reference) || o;
    let s = floatingUiPositioningHook.useFloating(e);
    let f = z();
    let d = eD((e, t) => {
      if (e) {
        m.current.openEvent = t;
      }
      if (r != null) {
        r(e, t);
      }
    });
    let v = reactCoreLibraryReexport.useRef(null);
    let m = reactCoreLibraryReexport.useRef({});
    let p = reactCoreLibraryReexport.useState(() => function () {
      let e = new Map();
      return {
        emit(t, n) {
          var r;
          if ((r = e.get(t)) != null) {
            r.forEach(e => e(n));
          }
        },
        on(t, n) {
          e.set(t, [...(e.get(t) || []), n]);
        },
        off(t, n) {
          var r;
          e.set(t, ((r = e.get(t)) == null ? undefined : r.filter(e => e !== n)) || []);
        }
      };
    }())[0];
    let g = U();
    let h = reactCoreLibraryReexport.useCallback(e => {
      let t = J(e) ? {
        getBoundingClientRect: () => e.getBoundingClientRect(),
        contextElement: e
      } : e;
      s.refs.setReference(t);
    }, [s.refs]);
    let y = reactCoreLibraryReexport.useCallback(e => {
      if (J(e) || e === null) {
        v.current = e;
        c(e);
      }
      if (J(s.refs.reference.current) || s.refs.reference.current === null || e !== null && !J(e)) {
        s.refs.setReference(e);
      }
    }, [s.refs]);
    let E = reactCoreLibraryReexport.useMemo(() => ({
      ...s.refs,
      setReference: y,
      setPositionReference: h,
      domReference: v
    }), [s.refs, y, h]);
    let b = reactCoreLibraryReexport.useMemo(() => ({
      ...s.elements,
      domReference: a
    }), [s.elements, a]);
    let w = reactCoreLibraryReexport.useMemo(() => ({
      ...s,
      refs: E,
      elements: b,
      dataRef: m,
      nodeId: u,
      floatingId: g,
      events: p,
      open: n,
      onOpenChange: d
    }), [s, u, g, p, n, d, E, b]);
    F(() => {
      let e = f == null ? undefined : f.nodesRef.current.find(e => e.id === u);
      if (e) {
        e.context = w;
      }
    });
    return reactCoreLibraryReexport.useMemo(() => ({
      ...s,
      context: w,
      refs: E,
      elements: b
    }), [s, E, b, w]);
  }
  function ej(e, t = {}) {
    let {
      open: n,
      onOpenChange: r,
      dataRef: u,
      events: o,
      refs: l,
      elements: {
        floating: c,
        domReference: a
      }
    } = e;
    let {
      enabled: s = true,
      keyboardOnly: f = true
    } = t;
    let d = reactCoreLibraryReexport.useRef("");
    let v = reactCoreLibraryReexport.useRef(false);
    let m = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(() => {
      if (!s) {
        return;
      }
      let e = Z(c).defaultView || window;
      function t() {
        if (!n && G(a) && a === ec(Z(a))) {
          v.current = true;
        }
      }
      e.addEventListener("blur", t);
      return () => {
        e.removeEventListener("blur", t);
      };
    }, [c, a, n, s]);
    reactCoreLibraryReexport.useEffect(() => {
      if (s) {
        o.on("dismiss", e);
        return () => {
          o.off("dismiss", e);
        };
      }
      function e(e) {
        if (e.type === "referencePress" || e.type === "escapeKey") {
          v.current = true;
        }
      }
    }, [o, s]);
    reactCoreLibraryReexport.useEffect(() => () => {
      clearTimeout(m.current);
    }, []);
    return reactCoreLibraryReexport.useMemo(() => s ? {
      reference: {
        onPointerDown(e) {
          let {
            pointerType: t
          } = e;
          d.current = t;
          v.current = !!t && !!f;
        },
        onMouseLeave() {
          v.current = false;
        },
        onFocus(e) {
          var t;
          if (!v.current && (e.type !== "focus" || ((t = u.current.openEvent) == null ? undefined : t.type) !== "mousedown" || !e_(u.current.openEvent, a))) {
            r(true, e.nativeEvent);
          }
        },
        onBlur(e) {
          v.current = false;
          let t = e.relatedTarget;
          let n = J(t) && t.hasAttribute(er("focus-guard")) && t.getAttribute("data-type") === "outside";
          m.current = setTimeout(() => {
            if (!en(l.floating.current, t) && !en(a, t) && !n) {
              r(false, e.nativeEvent);
            }
          });
        }
      }
    } : {}, [s, f, a, l, u, r]);
  }
  function eY(e, t, n) {
    let r = new Map();
    return {
      ...(n === "floating" && {
        tabIndex: -1
      }),
      ...e,
      ...t.map(e => e ? e[n] : null).concat(e).reduce((e, t) => {
        if (t) {
          Object.entries(t).forEach(t => {
            let [n, u] = t;
            if (n.indexOf("on") === 0) {
              if (!r.has(n)) {
                r.set(n, []);
              }
              if (typeof u == "function") {
                var o;
                if ((o = r.get(n)) != null) {
                  o.push(u);
                }
                e[n] = function () {
                  var e;
                  var t = arguments.length;
                  var u = Array(t);
                  var o = 0;
                  for (; o < t; o++) {
                    u[o] = arguments[o];
                  }
                  if ((e = r.get(n)) == null) {
                    return undefined;
                  } else {
                    return e.map(e => e(...u)).find(e => e !== undefined);
                  }
                };
              }
            } else {
              e[n] = u;
            }
          });
        }
        return e;
      }, {})
    };
  }
  function eH(e = []) {
    let t = e;
    let n = reactCoreLibraryReexport.useCallback(t => eY(t, e, "reference"), t);
    let r = reactCoreLibraryReexport.useCallback(t => eY(t, e, "floating"), t);
    let u = reactCoreLibraryReexport.useCallback(t => eY(t, e, "item"), e.map(e => e == null ? undefined : e.item));
    return reactCoreLibraryReexport.useMemo(() => ({
      getReferenceProps: n,
      getFloatingProps: r,
      getItemProps: u
    }), [n, r, u]);
  }
  let eW = false;
  let ez = "ArrowUp";
  let eZ = "ArrowDown";
  let eV = "ArrowLeft";
  let eX = "ArrowRight";
  function eJ(e, t, n) {
    return Math.floor(e / t) !== n;
  }
  function eG(e, t) {
    return t < 0 || t >= e.current.length;
  }
  function e$(e, t) {
    var n;
    var r;
    var u;
    let {
      startingIndex: o = -1,
      decrement: l = false,
      disabledIndices: i,
      amount: c = 1
    } = t === undefined ? {} : t;
    let a = e.current;
    let s = o;
    do {
      s += l ? -c : c;
    } while (s >= 0 && s <= a.length - 1 && (i ? i.includes(s) : a[s] == null || ((r = a[s]) == null ? undefined : r.hasAttribute("disabled")) || ((u = a[s]) == null ? undefined : u.getAttribute("aria-disabled")) === "true" || !!(n = a[s]) && n.offsetParent === null));
    return s;
  }
  function eQ(e, t, n) {
    switch (e) {
      case "vertical":
        return t;
      case "horizontal":
        return n;
      default:
        return t || n;
    }
  }
  function e0(e, t) {
    return eQ(t, e === ez || e === eZ, e === eV || e === eX);
  }
  function e1(e, t, n) {
    return eQ(t, e === eZ, n ? e === eV : e === eX) || e === "Enter" || e == " " || e === "";
  }
  function e2(e, t) {
    return e$(e, {
      disabledIndices: t
    });
  }
  function e4(e, t) {
    return e$(e, {
      decrement: true,
      startingIndex: e.current.length,
      disabledIndices: t
    });
  }
  function e9(e, t) {
    let {
      open: n,
      onOpenChange: r,
      refs: u,
      elements: {
        domReference: o,
        floating: l
      }
    } = e;
    let {
      listRef: c,
      activeIndex: a,
      onNavigate: s = () => {},
      enabled: f = true,
      selectedIndex: d = null,
      allowEscape: v = false,
      loop: m = false,
      nested: p = false,
      rtl: g = false,
      virtual: h = false,
      focusItemOnOpen: y = "auto",
      focusItemOnHover: E = true,
      openOnArrowKeyDown: b = true,
      disabledIndices: w,
      orientation: R = "vertical",
      cols: x = 1,
      scrollItemIntoView: k = true
    } = t;
    let C = W();
    let T = z();
    let S = eD(s);
    let L = reactCoreLibraryReexport.useRef(y);
    let A = reactCoreLibraryReexport.useRef(d ?? -1);
    let M = reactCoreLibraryReexport.useRef(null);
    let I = reactCoreLibraryReexport.useRef(true);
    let N = reactCoreLibraryReexport.useRef(S);
    let O = reactCoreLibraryReexport.useRef(!!l);
    let P = reactCoreLibraryReexport.useRef(false);
    let D = reactCoreLibraryReexport.useRef(false);
    let _ = eu(w);
    let K = eu(n);
    let B = eu(k);
    let [q, U] = reactCoreLibraryReexport.useState();
    let j = eD(function (e, t, n = false) {
      let r = e.current[t.current];
      if (r) {
        if (h) {
          U(r.id);
        } else {
          es(r, {
            preventScroll: true,
            sync: !!V().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints && !!ee() && (eW || P.current)
          });
        }
        requestAnimationFrame(() => {
          let e = B.current;
          if (e && r && (n || !I.current)) {
            if (r.scrollIntoView != null) {
              r.scrollIntoView(typeof e == "boolean" ? {
                block: "nearest",
                inline: "nearest"
              } : e);
            }
          }
        });
      }
    });
    F(() => {
      document.createElement("div").focus({
        get preventScroll() {
          eW = true;
          return false;
        }
      });
    }, []);
    F(() => {
      if (f) {
        if (n && l) {
          if (L.current && d != null) {
            D.current = true;
            S(d);
          }
        } else if (O.current) {
          A.current = -1;
          N.current(null);
        }
      }
    }, [f, n, l, d, S]);
    F(() => {
      if (f && n && l) {
        if (a == null) {
          P.current = false;
          if (d == null) {
            if (O.current) {
              A.current = -1;
              j(c, A);
            }
            if (!O.current && L.current && (M.current != null || L.current === true && M.current == null)) {
              let e = 0;
              let t = () => {
                if (c.current[0] == null) {
                  if (e < 2) {
                    (e ? requestAnimationFrame : queueMicrotask)(t);
                  }
                  e++;
                } else {
                  A.current = M.current == null || e1(M.current, R, g) || p ? e2(c, _.current) : e4(c, _.current);
                  M.current = null;
                  S(A.current);
                }
              };
              t();
            }
          }
        } else if (!eG(c, a)) {
          A.current = a;
          j(c, A, D.current);
          D.current = false;
        }
      }
    }, [f, n, l, a, d, p, c, R, g, S, j, _]);
    F(() => {
      if (f && O.current && !l && T) {
        var e;
        var t;
        let n = T.nodesRef.current;
        let r = (e = n.find(e => e.id === C)) == null ? undefined : (t = e.context) == null ? undefined : t.elements.floating;
        let u = ec(Z(l));
        let o = n.some(e => e.context && en(e.context.elements.floating, u));
        if (r && !o) {
          r.focus({
            preventScroll: true
          });
        }
      }
    }, [f, l, T, C]);
    F(() => {
      N.current = S;
      O.current = !!l;
    });
    F(() => {
      if (!n) {
        M.current = null;
      }
    }, [n]);
    let Y = a != null;
    let H = reactCoreLibraryReexport.useMemo(() => {
      function e(e) {
        if (!n) {
          return;
        }
        let t = c.current.indexOf(e);
        if (t !== -1) {
          S(t);
        }
      }
      return {
        onFocus(t) {
          let {
            currentTarget: n
          } = t;
          e(n);
        },
        onClick: e => {
          let {
            currentTarget: t
          } = e;
          return t.focus({
            preventScroll: true
          });
        },
        ...(E && {
          onMouseMove(t) {
            let {
              currentTarget: n
            } = t;
            e(n);
          },
          onPointerLeave(e) {
            let {
              pointerType: t
            } = e;
            if (I.current && t !== "touch") {
              A.current = -1;
              j(c, A);
              S(null);
              if (!h) {
                es(u.floating.current, {
                  preventScroll: true
                });
              }
            }
          }
        })
      };
    }, [n, u, j, E, c, S, h]);
    return reactCoreLibraryReexport.useMemo(() => {
      if (!f) {
        return {};
      }
      let e = _.current;
      function t(t) {
        var l;
        I.current = false;
        P.current = true;
        if (!K.current && t.currentTarget === u.floating.current) {
          return;
        }
        if (p && (l = t.key, eQ(R, g ? l === eX : l === eV, l === ez))) {
          em(t);
          r(false, t.nativeEvent);
          if (G(o)) {
            o.focus();
          }
          return;
        }
        let i = A.current;
        let a = e2(c, e);
        let s = e4(c, e);
        if (t.key === "Home") {
          em(t);
          A.current = a;
          S(A.current);
        }
        if (t.key === "End") {
          em(t);
          A.current = s;
          S(A.current);
        }
        if (x > 1) {
          let n = A.current;
          if (t.key === ez) {
            em(t);
            if (n === -1) {
              A.current = s;
            } else {
              A.current = e$(c, {
                startingIndex: n,
                amount: x,
                decrement: true,
                disabledIndices: e
              });
              if (m && (n - x < a || A.current < 0)) {
                let e = n % x;
                let t = s % x;
                let r = s - (t - e);
                if (t === e) {
                  A.current = s;
                } else {
                  A.current = t > e ? r : r - x;
                }
              }
            }
            if (eG(c, A.current)) {
              A.current = n;
            }
            S(A.current);
          }
          if (t.key === eZ) {
            em(t);
            if (n === -1) {
              A.current = a;
            } else {
              A.current = e$(c, {
                startingIndex: n,
                amount: x,
                disabledIndices: e
              });
              if (m && n + x > s) {
                A.current = e$(c, {
                  startingIndex: n % x - x,
                  amount: x,
                  disabledIndices: e
                });
              }
            }
            if (eG(c, A.current)) {
              A.current = n;
            }
            S(A.current);
          }
          if (R === "both") {
            let r = Math.floor(n / x);
            if (t.key === eX) {
              em(t);
              if (n % x != x - 1) {
                A.current = e$(c, {
                  startingIndex: n,
                  disabledIndices: e
                });
                if (m && eJ(A.current, x, r)) {
                  A.current = e$(c, {
                    startingIndex: n - n % x - 1,
                    disabledIndices: e
                  });
                }
              } else if (m) {
                A.current = e$(c, {
                  startingIndex: n - n % x - 1,
                  disabledIndices: e
                });
              }
              if (eJ(A.current, x, r)) {
                A.current = n;
              }
            }
            if (t.key === eV) {
              em(t);
              if (n % x != 0) {
                A.current = e$(c, {
                  startingIndex: n,
                  disabledIndices: e,
                  decrement: true
                });
                if (m && eJ(A.current, x, r)) {
                  A.current = e$(c, {
                    startingIndex: n + (x - n % x),
                    decrement: true,
                    disabledIndices: e
                  });
                }
              } else if (m) {
                A.current = e$(c, {
                  startingIndex: n + (x - n % x),
                  decrement: true,
                  disabledIndices: e
                });
              }
              if (eJ(A.current, x, r)) {
                A.current = n;
              }
            }
            let u = Math.floor(s / x) === r;
            if (eG(c, A.current)) {
              if (m && u) {
                A.current = t.key === eV ? s : e$(c, {
                  startingIndex: n - n % x - 1,
                  disabledIndices: e
                });
              } else {
                A.current = n;
              }
            }
            S(A.current);
            return;
          }
        }
        if (e0(t.key, R)) {
          em(t);
          if (n && !h && ec(t.currentTarget.ownerDocument) === t.currentTarget) {
            A.current = e1(t.key, R, g) ? a : s;
            S(A.current);
            return;
          }
          if (e1(t.key, R, g)) {
            if (m) {
              A.current = i >= s ? v && i !== c.current.length ? -1 : a : e$(c, {
                startingIndex: i,
                disabledIndices: e
              });
            } else {
              A.current = Math.min(s, e$(c, {
                startingIndex: i,
                disabledIndices: e
              }));
            }
          } else if (m) {
            A.current = i <= a ? v && i !== -1 ? c.current.length : s : e$(c, {
              startingIndex: i,
              decrement: true,
              disabledIndices: e
            });
          } else {
            A.current = Math.max(a, e$(c, {
              startingIndex: i,
              decrement: true,
              disabledIndices: e
            }));
          }
          if (eG(c, A.current)) {
            S(null);
          } else {
            S(A.current);
          }
        }
      }
      function l(e) {
        if (y === "auto" && $(e.nativeEvent)) {
          L.current = true;
        }
      }
      let i = h && n && Y && {
        "aria-activedescendant": q
      };
      return {
        reference: {
          ...i,
          onKeyDown(u) {
            var o;
            I.current = false;
            let l = u.key.indexOf("Arrow") === 0;
            if (h && n) {
              return t(u);
            }
            if (!n && !b && l) {
              return;
            }
            let i = l || u.key === "Enter" || u.key.trim() === "";
            let a = e0(u.key, R);
            o = u.key;
            let s = eQ(R, g ? o === eV : o === eX, o === eZ);
            if (i) {
              M.current = p && a ? null : u.key;
            }
            if (p) {
              if (s) {
                em(u);
                if (n) {
                  A.current = e2(c, e);
                  S(A.current);
                } else {
                  r(true, u.nativeEvent);
                }
              }
              return;
            }
            if (a) {
              if (d != null) {
                A.current = d;
              }
              em(u);
              if (!n && b) {
                r(true, u.nativeEvent);
              } else {
                t(u);
              }
              if (n) {
                S(A.current);
              }
            }
          },
          onFocus() {
            if (n) {
              S(null);
            }
          },
          onPointerDown: function (e) {
            L.current = y;
            if (y === "auto" && Q(e.nativeEvent)) {
              L.current = true;
            }
          },
          onMouseDown: l,
          onClick: l
        },
        floating: {
          "aria-orientation": R === "both" ? undefined : R,
          ...i,
          onKeyDown: t,
          onPointerMove() {
            I.current = true;
          }
        },
        item: H
      };
    }, [o, u, q, _, K, c, f, R, g, h, n, Y, p, d, b, v, x, m, y, S, r, H]);
  }
  function e3(e) {
    return reactCoreLibraryReexport.useMemo(() => e.every(e => e == null) ? null : t => {
      e.forEach(e => {
        if (typeof e == "function") {
          e(t);
        } else if (e != null) {
          e.current = t;
        }
      });
    }, e);
  }
  function e6(e, t = {}) {
    let {
      open: n,
      floatingId: r
    } = e;
    let {
      enabled: u = true,
      role: o = "dialog"
    } = t;
    let l = U();
    return reactCoreLibraryReexport.useMemo(() => {
      let e = {
        id: r,
        role: o
      };
      if (u) {
        if (o === "tooltip") {
          return {
            reference: {
              "aria-describedby": n ? r : undefined
            },
            floating: e
          };
        } else {
          return {
            reference: {
              "aria-expanded": n ? "true" : "false",
              "aria-haspopup": o === "alertdialog" ? "dialog" : o,
              "aria-controls": n ? r : undefined,
              ...(o === "listbox" && {
                role: "combobox"
              }),
              ...(o === "menu" && {
                id: l
              })
            },
            floating: {
              ...e,
              ...(o === "menu" && {
                "aria-labelledby": l
              })
            }
          };
        }
      } else {
        return {};
      }
    }, [u, o, n, r, l]);
  }
  let e5 = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());
  function e8(e, t) {
    if (typeof e == "function") {
      return e(t);
    } else {
      return e;
    }
  }
  function e7(e, t = {}) {
    let {
      initial: n = {
        opacity: 0
      },
      open: r,
      close: u,
      common: o,
      duration: l = 250
    } = t;
    let c = e.placement;
    let a = c.split("-")[0];
    let s = reactCoreLibraryReexport.useMemo(() => ({
      side: a,
      placement: c
    }), [a, c]);
    let f = typeof l == "number";
    let d = (f ? l : l.open) || 0;
    let v = (f ? l : l.close) || 0;
    let [m, p] = reactCoreLibraryReexport.useState(() => ({
      ...e8(o, s),
      ...e8(n, s)
    }));
    let {
      isMounted: g,
      status: h
    } = function (e, t = {}) {
      let {
        open: n,
        elements: {
          floating: r
        }
      } = e;
      let {
        duration: u = 250
      } = t;
      let o = (typeof u == "number" ? u : u.close) || 0;
      let [l, c] = reactCoreLibraryReexport.useState(false);
      let [a, s] = reactCoreLibraryReexport.useState("unmounted");
      let f = function (e, t) {
        let [n, r] = reactCoreLibraryReexport.useState(e);
        if (e && !n) {
          r(true);
        }
        reactCoreLibraryReexport.useEffect(() => {
          if (!e) {
            let e = setTimeout(() => r(false), t);
            return () => clearTimeout(e);
          }
        }, [e, t]);
        return n;
      }(n, o);
      F(() => {
        if (l && !f) {
          s("unmounted");
        }
      }, [l, f]);
      F(() => {
        if (r) {
          if (n) {
            s("initial");
            let e = requestAnimationFrame(() => {
              s("open");
            });
            return () => {
              cancelAnimationFrame(e);
            };
          }
          c(true);
          s("close");
        }
      }, [n, r]);
      return {
        isMounted: f,
        status: a
      };
    }(e, {
      duration: l
    });
    let y = eu(n);
    let E = eu(r);
    let b = eu(u);
    let w = eu(o);
    F(() => {
      let e = e8(y.current, s);
      let t = e8(b.current, s);
      let n = e8(w.current, s);
      let r = e8(E.current, s) || Object.keys(e).reduce((e, t) => {
        e[t] = "";
        return e;
      }, {});
      if (h === "initial") {
        p(t => ({
          transitionProperty: t.transitionProperty,
          ...n,
          ...e
        }));
      }
      if (h === "open") {
        p({
          transitionProperty: Object.keys(r).map(e5).join(","),
          transitionDuration: d + "ms",
          ...n,
          ...r
        });
      }
      if (h === "close") {
        let r = t || e;
        p({
          transitionProperty: Object.keys(r).map(e5).join(","),
          transitionDuration: v + "ms",
          ...n,
          ...r
        });
      }
    }, [v, b, y, E, w, d, h, s]);
    return {
      isMounted: g,
      styles: m
    };
  }
  function te(e, t) {
    let {
      open: r,
      dataRef: u
    } = e;
    let {
      listRef: o,
      activeIndex: l,
      onMatch: c,
      onTypingChange: a,
      enabled: s = true,
      findMatch: f = null,
      resetMs: d = 750,
      ignoreKeys: v = [],
      selectedIndex: m = null
    } = t;
    let p = reactCoreLibraryReexport.useRef();
    let g = reactCoreLibraryReexport.useRef("");
    let h = reactCoreLibraryReexport.useRef(m ?? l ?? -1);
    let y = reactCoreLibraryReexport.useRef(null);
    let E = eD(c);
    let b = eD(a);
    let w = eu(f);
    let R = eu(v);
    F(() => {
      if (r) {
        clearTimeout(p.current);
        y.current = null;
        g.current = "";
      }
    }, [r]);
    F(() => {
      if (r && g.current === "") {
        h.current = m ?? l ?? -1;
      }
    }, [r, m, l]);
    return reactCoreLibraryReexport.useMemo(() => {
      if (!s) {
        return {};
      }
      function e(e) {
        if (e) {
          if (!u.current.typing) {
            u.current.typing = e;
            b(e);
          }
        } else if (u.current.typing) {
          u.current.typing = e;
          b(e);
        }
      }
      function t(e, t, n) {
        let r = w.current ? w.current(t, n) : t.find(e => (e == null ? undefined : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())) === 0);
        if (r) {
          return e.indexOf(r);
        } else {
          return -1;
        }
      }
      function n(n) {
        let u = o.current;
        if (g.current.length > 0 && g.current[0] !== " ") {
          if (t(u, u, g.current) === -1) {
            e(false);
          } else if (n.key === " ") {
            em(n);
          }
        }
        if (u == null || R.current.includes(n.key) || n.key.length !== 1 || n.ctrlKey || n.metaKey || n.altKey) {
          return;
        }
        if (r && n.key !== " ") {
          em(n);
          e(true);
        }
        if (u.every(e => {
          var t;
          var n;
          return !e || ((t = e[0]) == null ? undefined : t.toLocaleLowerCase()) !== ((n = e[1]) == null ? undefined : n.toLocaleLowerCase());
        }) && g.current === n.key) {
          g.current = "";
          h.current = y.current;
        }
        g.current += n.key;
        clearTimeout(p.current);
        p.current = setTimeout(() => {
          g.current = "";
          h.current = y.current;
          e(false);
        }, d);
        let l = h.current;
        let i = t(u, [...u.slice((l || 0) + 1), ...u.slice(0, (l || 0) + 1)], g.current);
        if (i !== -1) {
          E(i);
          y.current = i;
        } else if (n.key !== " ") {
          g.current = "";
          e(false);
        }
      }
      return {
        reference: {
          onKeyDown: n
        },
        floating: {
          onKeyDown: n,
          onKeyUp(t) {
            if (t.key === " ") {
              e(false);
            }
          }
        }
      };
    }, [s, r, u, o, d, R, w, E, b]);
  }
  function tt(e, t) {
    let [n, r] = e;
    let u = false;
    let o = t.length;
    for (let e = 0, l = o - 1; e < o; l = e++) {
      let [o, i] = t[e] || [0, 0];
      let [c, a] = t[l] || [0, 0];
      if (i >= r != a >= r && n <= (c - o) * (r - i) / (a - i) + o) {
        u = !u;
      }
    }
    return u;
  }
  function tn(e) {
    let t;
    if (e === undefined) {
      e = {};
    }
    let {
      buffer: n = 0.5,
      blockPointerEvents: r = false,
      requireIntent: u = true
    } = e;
    let o = false;
    let l = null;
    let i = null;
    let c = performance.now();
    let a = e => {
      let {
        x: r,
        y: a,
        placement: s,
        elements: f,
        onClose: d,
        nodeId: v,
        tree: m
      } = e;
      return function (e) {
        function p() {
          clearTimeout(t);
          d();
        }
        clearTimeout(t);
        if (!f.domReference || !f.floating || s == null || r == null || a == null) {
          return;
        }
        let {
          clientX: g,
          clientY: h
        } = e;
        let y = [g, h];
        let E = ed(e);
        let b = e.type === "mouseleave";
        let w = en(f.floating, E);
        let R = en(f.domReference, E);
        let x = f.domReference.getBoundingClientRect();
        let k = f.floating.getBoundingClientRect();
        let C = s.split("-")[0];
        let T = r > k.right - k.width / 2;
        let S = a > k.bottom - k.height / 2;
        let L = y[0] >= x.x && y[0] <= x.x + x.width && y[1] >= x.y && y[1] <= x.y + x.height;
        let A = k.width > x.width;
        let M = k.height > x.height;
        let I = (A ? x : k).left;
        let N = (A ? x : k).right;
        let O = (M ? x : k).top;
        let P = (M ? x : k).bottom;
        if (w && (o = true, !b)) {
          return;
        }
        if (R) {
          o = false;
        }
        if (R && !b) {
          o = true;
          return;
        }
        if (b && J(e.relatedTarget) && en(f.floating, e.relatedTarget) || m && ef(m.nodesRef.current, v).some(e => {
          let {
            context: t
          } = e;
          if (t == null) {
            return undefined;
          } else {
            return t.open;
          }
        })) {
          return;
        }
        if (C === "top" && a >= x.bottom - 1 || C === "bottom" && a <= x.top + 1 || C === "left" && r >= x.right - 1 || C === "right" && r <= x.left + 1) {
          return p();
        }
        let D = [];
        switch (C) {
          case "top":
            D = [[I, x.top + 1], [I, k.bottom - 1], [N, k.bottom - 1], [N, x.top + 1]];
            break;
          case "bottom":
            D = [[I, k.top + 1], [I, x.bottom - 1], [N, x.bottom - 1], [N, k.top + 1]];
            break;
          case "left":
            D = [[k.right - 1, P], [k.right - 1, O], [x.left + 1, O], [x.left + 1, P]];
            break;
          case "right":
            D = [[x.right - 1, P], [x.right - 1, O], [k.left + 1, O], [k.left + 1, P]];
        }
        if (!tt([g, h], D)) {
          if (o && !L) {
            return p();
          }
          if (!b && u) {
            let t = function (e, t) {
              let n = performance.now();
              let r = n - c;
              if (l === null || i === null || r === 0) {
                l = e;
                i = t;
                c = n;
                return null;
              }
              let u = e - l;
              let o = t - i;
              let a = Math.sqrt(u * u + o * o);
              l = e;
              i = t;
              c = n;
              return a / r;
            }(e.clientX, e.clientY);
            if (t !== null && t < 0.1) {
              return p();
            }
          }
          if (tt([g, h], function (e) {
            let [t, r] = e;
            switch (C) {
              case "top":
                {
                  let e = [[k.left, T ? k.bottom - n : A ? k.bottom - n : k.top], [k.right, T ? A ? k.bottom - n : k.top : k.bottom - n]];
                  return [[A ? t + n / 2 : T ? t + n * 4 : t - n * 4, r + n + 1], [A ? t - n / 2 : T ? t + n * 4 : t - n * 4, r + n + 1], ...e];
                }
              case "bottom":
                {
                  let e = [[k.left, T ? k.top + n : A ? k.top + n : k.bottom], [k.right, T ? A ? k.top + n : k.bottom : k.top + n]];
                  return [[A ? t + n / 2 : T ? t + n * 4 : t - n * 4, r - n], [A ? t - n / 2 : T ? t + n * 4 : t - n * 4, r - n], ...e];
                }
              case "left":
                return [[S ? k.right - n : M ? k.right - n : k.left, k.top], [S ? M ? k.right - n : k.left : k.right - n, k.bottom], [t + n + 1, M ? r + n / 2 : S ? r + n * 4 : r - n * 4], [t + n + 1, M ? r - n / 2 : S ? r + n * 4 : r - n * 4]];
              case "right":
                {
                  let e = [[S ? k.left + n : M ? k.left + n : k.right, k.top], [S ? M ? k.left + n : k.right : k.left + n, k.bottom]];
                  return [[t - n, M ? r + n / 2 : S ? r + n * 4 : r - n * 4], [t - n, M ? r - n / 2 : S ? r + n * 4 : r - n * 4], ...e];
                }
            }
          }([r, a]))) {
            if (!o && u) {
              t = window.setTimeout(p, 40);
            }
          } else {
            p();
          }
        }
      };
    };
    a.__options = {
      blockPointerEvents: r
    };
    return a;
  }
  require.d(exports, {
    useFloatingContext: function () {
      return eS;
    },
    useFloatingTree: function () {
      return e9;
    },
    useTypeahead: function () {
      return te;
    },
    FocusManager: function () {
      return eO;
    },
    useListItem: function () {
      return eI;
    },
    usePortal: function () {
      return ei;
    },
    useMergeRefs: function () {
      return e3;
    },
    Arrow: function () {
      return j;
    },
    safePolygon: function () {
      return tn;
    },
    useFloating: function () {
      return eU;
    },
    useClick: function () {
      return ej;
    },
    useRole: function () {
      return e6;
    },
    useDismiss: function () {
      return eq;
    },
    Portal: function () {
      return ek;
    },
    useHover: function () {
      return eH;
    },
    useInteractions: function () {
      return e7;
    },
    useListNavigation: function () {
      return eM;
    }
  });
}