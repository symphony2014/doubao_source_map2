// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'CX' to 'SlateEditor'
// - Renamed export 'F3' to 'domUtils'
// - Renamed export 'mH' to 'SlateProvider'
// - Renamed export 'BU' to 'withSlateFragment'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 18380.923ae249.js
         * chunkId: 18380
         * moduleId: 950771
         */
module.exports = function (module, exports, require) {
  var detectTextDirection = require("detect-text-direction") /*id: 554498*/;
  var u = detectTextDirection;
  var debounceUtil_1_1 = require("debounce-util_1_1") /*id: 887312*/;
  var debounceUtilWrapper = require("debounce-util-wrapper") /*id: 213804*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  let s = e => typeof e == "object" && e != null && e.nodeType === 1;
  let l = (e, t) => (!t || e !== "hidden") && e !== "visible" && e !== "clip";
  let c = (e, t) => {
    if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
      let r = getComputedStyle(e, null);
      return l(r.overflowY, t) || l(r.overflowX, t) || (e => {
        let t = (e => {
          if (!e.ownerDocument || !e.ownerDocument.defaultView) {
            return null;
          }
          try {
            return e.ownerDocument.defaultView.frameElement;
          } catch (e) {
            return null;
          }
        })(e);
        return !!t && (t.clientHeight < e.scrollHeight || t.clientWidth < e.scrollWidth);
      })(e);
    }
    return false;
  };
  let d = (e, t, r, n, u, o, a, i) => o < e && a > t || o > e && a < t ? 0 : o <= e && i <= r || a >= t && i >= r ? o - e - n : a > t && i < r || o < e && i > r ? a - t + u : 0;
  let f = e => {
    let t = e.parentElement;
    if (t == null) {
      return e.getRootNode().host || null;
    } else {
      return t;
    }
  };
  let p = (e, t) => {
    var r;
    var u;
    if (typeof document == "undefined") {
      return [];
    }
    let {
      scrollMode: a,
      block: i,
      inline: l,
      boundary: p,
      skipOverflowHiddenElements: h
    } = t;
    let v = typeof p == "function" ? p : e => e !== p;
    if (!s(e)) {
      throw TypeError("Invalid target");
    }
    let D = document.scrollingElement || document.documentElement;
    let g = [];
    let C = e;
    while (s(C) && v(C)) {
      if ((C = f(C)) === D) {
        g.push(C);
        break;
      }
      if (C == null || C !== document.body || !c(C) || !!c(document.documentElement)) {
        if (C != null && c(C, h)) {
          g.push(C);
        }
      }
    }
    let m = ((r = window.visualViewport) == null ? undefined : r.width) ?? innerWidth;
    let B = ((u = window.visualViewport) == null ? undefined : u.height) ?? innerHeight;
    let {
      scrollX: E,
      scrollY: y
    } = window;
    let {
      height: b,
      width: A,
      top: F,
      right: w,
      bottom: x,
      left: O
    } = e.getBoundingClientRect();
    let {
      top: k,
      right: M,
      bottom: P,
      left: S
    } = (e => {
      let t = window.getComputedStyle(e);
      return {
        top: parseFloat(t.scrollMarginTop) || 0,
        right: parseFloat(t.scrollMarginRight) || 0,
        bottom: parseFloat(t.scrollMarginBottom) || 0,
        left: parseFloat(t.scrollMarginLeft) || 0
      };
    })(e);
    let R = i === "start" || i === "nearest" ? F - k : i === "end" ? x + P : F + b / 2 - k + P;
    let j = l === "center" ? O + A / 2 - S + M : l === "end" ? w + M : O - S;
    let T = [];
    for (let e = 0; e < g.length; e++) {
      let t = g[e];
      let {
        height: r,
        width: n,
        top: u,
        right: o,
        bottom: s,
        left: f
      } = t.getBoundingClientRect();
      if (a === "if-needed" && F >= 0 && O >= 0 && x <= B && w <= m && (t === D && !c(t) || F >= u && x <= s && O >= f && w <= o)) {
        break;
      }
      let p = getComputedStyle(t);
      let h = parseInt(p.borderLeftWidth, 10);
      let v = parseInt(p.borderTopWidth, 10);
      let C = parseInt(p.borderRightWidth, 10);
      let k = parseInt(p.borderBottomWidth, 10);
      let M = 0;
      let P = 0;
      let S = "offsetWidth" in t ? t.offsetWidth - t.clientWidth - h - C : 0;
      let N = "offsetHeight" in t ? t.offsetHeight - t.clientHeight - v - k : 0;
      let L = "offsetWidth" in t ? t.offsetWidth === 0 ? 0 : n / t.offsetWidth : 0;
      let _ = "offsetHeight" in t ? t.offsetHeight === 0 ? 0 : r / t.offsetHeight : 0;
      if (D === t) {
        M = i === "start" ? R : i === "end" ? R - B : i === "nearest" ? d(y, y + B, B, v, k, y + R, y + R + b, b) : R - B / 2;
        P = l === "start" ? j : l === "center" ? j - m / 2 : l === "end" ? j - m : d(E, E + m, m, h, C, E + j, E + j + A, A);
        M = Math.max(0, M + y);
        P = Math.max(0, P + E);
      } else {
        M = i === "start" ? R - u - v : i === "end" ? R - s + k + N : i === "nearest" ? d(u, s, r, v, k + N, R, R + b, b) : R - (u + r / 2) + N / 2;
        P = l === "start" ? j - f - h : l === "center" ? j - (f + n / 2) + S / 2 : l === "end" ? j - o + C + S : d(f, o, n, h, C + S, j, j + A, A);
        let {
          scrollLeft: e,
          scrollTop: a
        } = t;
        M = _ === 0 ? 0 : Math.max(0, Math.min(a + M / _, t.scrollHeight - r / _ + N));
        P = L === 0 ? 0 : Math.max(0, Math.min(e + P / L, t.scrollWidth - n / L + S));
        R += a - M;
        j += e - P;
      }
      T.push({
        el: t,
        top: M,
        left: P
      });
    }
    return T;
  };
  let h = e => e === false ? {
    block: "end",
    inline: "nearest"
  } : e === Object(e) && Object.keys(e).length !== 0 ? e : {
    block: "start",
    inline: "nearest"
  };
  var slateEditorCoreUtils = require("slate-editor-core-utils") /*id: 927219*/;
  var resizeObserverPolyfill_2 = require("resize-observer-polyfill_2") /*id: 129887*/;
  var hotkeyValidationUtils = require("hotkey-validation-utils") /*id: 691069*/;
  var reactDomEntryWrapper = require("react-dom-entry-wrapper") /*id: 640848*/;
  function m(e, t) {
    if (e == null) {
      return {};
    }
    var r;
    var n;
    var u = function (e, t) {
      if (e == null) {
        return {};
      }
      var r;
      var n;
      var u = {};
      var o = Object.keys(e);
      for (n = 0; n < o.length; n++) {
        r = o[n];
        if (!(t.indexOf(r) >= 0)) {
          u[r] = e[r];
        }
      }
      return u;
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      for (n = 0; n < o.length; n++) {
        r = o[n];
        if (!(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r)) {
          u[r] = e[r];
        }
      }
    }
    return u;
  }
  function B(e) {
    return (B = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (e) {
      return typeof e;
    } : function (e) {
      if (e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype) {
        return "symbol";
      } else {
        return typeof e;
      }
    })(e);
  }
  function E(e, t, r) {
    var n;
    n = function (e, t) {
      if (B(e) !== "object" || e === null) {
        return e;
      }
      var r = e[Symbol.toPrimitive];
      if (r !== undefined) {
        var n = r.call(e, t || "default");
        if (B(n) !== "object") {
          return n;
        }
        throw TypeError("@@toPrimitive must return a primitive value.");
      }
      return (t === "string" ? String : Number)(e);
    }(t, "string");
    if ((t = B(n) === "symbol" ? n : String(n)) in e) {
      Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      e[t] = r;
    }
    return e;
  }
  var y = reactCoreLibraryReexport.createContext(null);
  var b = () => {
    var e = reactCoreLibraryReexport.useContext(y);
    if (!e) {
      throw Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
    }
    return e;
  };
  var A = parseInt(reactCoreLibraryReexport.version.split(".")[0], 10);
  var F = typeof navigator != "undefined" && typeof window != "undefined" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
  var w = typeof navigator != "undefined" && /Mac OS X/.test(navigator.userAgent);
  var x = typeof navigator != "undefined" && /Android/.test(navigator.userAgent);
  var O = typeof navigator != "undefined" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent);
  var k = typeof navigator != "undefined" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent);
  var M = typeof navigator != "undefined" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent);
  var P = typeof navigator != "undefined" && /Chrome/i.test(navigator.userAgent);
  var S = typeof navigator != "undefined" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent);
  var R = x && typeof navigator != "undefined" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent);
  var j = typeof navigator != "undefined" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent);
  var T = typeof navigator != "undefined" && /.*UCBrowser/.test(navigator.userAgent);
  var N = typeof navigator != "undefined" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent);
  var L = typeof window != "undefined" && window.document !== undefined && window.document.createElement !== undefined;
  var _ = (!S || !R) && !M && typeof globalThis != "undefined" && globalThis.InputEvent && typeof globalThis.InputEvent.prototype.getTargetRanges == "function";
  var I = new WeakMap();
  var W = new WeakMap();
  var z = new WeakMap();
  var V = new WeakMap();
  var q = new WeakMap();
  var Z = new WeakMap();
  var K = new WeakMap();
  var U = new WeakMap();
  var $ = new WeakMap();
  var Y = new WeakMap();
  var X = new WeakMap();
  var H = new WeakMap();
  var G = new WeakMap();
  var J = new WeakMap();
  var Q = new WeakMap();
  var ee = new WeakMap();
  var et = new WeakMap();
  var er = new WeakMap();
  var en = new WeakMap();
  var eu = new WeakMap();
  var eo = new WeakMap();
  var ea = Symbol("placeholder");
  var ei = Symbol("mark-placeholder");
  var es = globalThis.Text;
  var el = e => e && e.ownerDocument && e.ownerDocument.defaultView || null;
  var ec = e => ef(e) && e.nodeType === 8;
  var ed = e => ef(e) && e.nodeType === 1;
  var ef = e => {
    var t = el(e);
    return !!t && e instanceof t.Node;
  };
  var ep = e => {
    var t = e && e.anchorNode && el(e.anchorNode);
    return !!t && e instanceof t.Selection;
  };
  var eh = e => ef(e) && e.nodeType === 3;
  var ev = e => e.clipboardData && e.clipboardData.getData("text/plain") !== "" && e.clipboardData.types.length === 1;
  var eD = e => {
    var [t, r] = e;
    if (ed(t) && t.childNodes.length) {
      var n = r === t.childNodes.length;
      var u = n ? r - 1 : r;
      [t, u] = eC(t, u, n ? "backward" : "forward");
      n = u < r;
      while (ed(t) && t.childNodes.length) {
        var o = n ? t.childNodes.length - 1 : 0;
        t = em(t, o, n ? "backward" : "forward");
      }
      r = n && t.textContent != null ? t.textContent.length : 0;
    }
    return [t, r];
  };
  var eg = e => {
    for (var t = e && e.parentNode; t;) {
      if (t.toString() === "[object ShadowRoot]") {
        return true;
      }
      t = t.parentNode;
    }
    return false;
  };
  var eC = (e, t, r) => {
    var {
      childNodes: n
    } = e;
    var u = n[t];
    var o = t;
    var a = false;
    var i = false;
    while ((ec(u) || ed(u) && u.childNodes.length === 0 || ed(u) && u.getAttribute("contenteditable") === "false") && (!a || !i)) {
      if (o >= n.length) {
        a = true;
        o = t - 1;
        r = "backward";
        continue;
      }
      if (o < 0) {
        i = true;
        o = t + 1;
        r = "forward";
        continue;
      }
      u = n[o];
      t = o;
      o += r === "forward" ? 1 : -1;
    }
    return [u, t];
  };
  var em = (e, t, r) => {
    var [n] = eC(e, t, r);
    return n;
  };
  var eB = e => {
    var t = "";
    if (eh(e) && e.nodeValue) {
      return e.nodeValue;
    }
    if (ed(e)) {
      for (var r of Array.from(e.childNodes)) {
        t += eB(r);
      }
      var n = getComputedStyle(e).getPropertyValue("display");
      if (n === "block" || n === "list" || e.tagName === "BR") {
        t += "\n";
      }
    }
    return t;
  };
  var eE = /data-slate-fragment="(.+?)"/m;
  var ey = e => {
    var [, t] = e.getData("text/html").match(eE) || [];
    return t;
  };
  var eb = (e, t, r) => {
    var {
      target: n
    } = t;
    if (ed(n) && n.matches("[contentEditable=\"false\"]")) {
      return false;
    }
    var {
      document: u
    } = ew.getWindow(e);
    if (u.contains(n)) {
      return ew.hasDOMNode(e, n, {
        editable: true
      });
    }
    var o = r.find(e => {
      var {
        addedNodes: t,
        removedNodes: r
      } = e;
      for (var u of t) {
        if (u === n || u.contains(n)) {
          return true;
        }
      }
      for (var o of r) {
        if (o === n || o.contains(n)) {
          return true;
        }
      }
    });
    return !!o && o !== t && eb(e, o, r);
  };
  var eA = 0;
  class eF {
    constructor() {
      E(this, "id", undefined);
      this.id = `${eA++}`;
    }
  }
  var ew = {
    androidPendingDiffs: e => er.get(e),
    androidScheduleFlush: e => {
      var t;
      if ((t = Q.get(e)) !== null && t !== undefined) {
        t();
      }
    },
    blur: e => {
      var t = ew.toDOMNode(e, e);
      var r = ew.findDocumentOrShadowRoot(e);
      X.set(e, false);
      if (r.activeElement === t) {
        t.blur();
      }
    },
    deselect: e => {
      var {
        selection: t
      } = e;
      var r = ew.findDocumentOrShadowRoot(e).getSelection();
      if (r && r.rangeCount > 0) {
        r.removeAllRanges();
      }
      if (t) {
        slateEditorCoreUtils.editorTransforms.deselect(e);
      }
    },
    findDocumentOrShadowRoot: e => {
      var t = ew.toDOMNode(e, e);
      var r = t.getRootNode();
      if ((r instanceof Document || r instanceof ShadowRoot) && r.getSelection != null) {
        return r;
      } else {
        return t.ownerDocument;
      }
    },
    findEventRange: (e, t) => {
      if ("nativeEvent" in t) {
        t = t.nativeEvent;
      }
      var r;
      var {
        clientX: n,
        clientY: u,
        target: o
      } = t;
      if (n == null || u == null) {
        throw Error(`Cannot resolve a Slate range from a DOM event: ${t}`);
      }
      var a = ew.toSlateNode(e, t.target);
      var i = ew.findPath(e, a);
      if (slateEditorCoreUtils.elementUtils.isElement(a) && slateEditorCoreUtils.editorHelpers.isVoid(e, a)) {
        var s = o.getBoundingClientRect();
        var l = e.isInline(a) ? n - s.left < s.left + s.width - n : u - s.top < s.top + s.height - u;
        var c = slateEditorCoreUtils.editorHelpers.point(e, i, {
          edge: l ? "start" : "end"
        });
        var d = l ? slateEditorCoreUtils.editorHelpers.before(e, c) : slateEditorCoreUtils.editorHelpers.after(e, c);
        if (d) {
          return slateEditorCoreUtils.editorHelpers.range(e, d);
        }
      }
      var {
        document: f
      } = ew.getWindow(e);
      if (f.caretRangeFromPoint) {
        r = f.caretRangeFromPoint(n, u);
      } else {
        var p = f.caretPositionFromPoint(n, u);
        if (p) {
          (r = f.createRange()).setStart(p.offsetNode, p.offset);
          r.setEnd(p.offsetNode, p.offset);
        }
      }
      if (!r) {
        throw Error(`Cannot resolve a Slate range from a DOM event: ${t}`);
      }
      return ew.toSlateRange(e, r, {
        exactMatch: false,
        suppressThrow: false
      });
    },
    findKey: (e, t) => {
      var r = U.get(t);
      if (!r) {
        r = new eF();
        U.set(t, r);
      }
      return r;
    },
    findPath: (e, t) => {
      var r = [];
      var n = t;
      while (true) {
        var u = W.get(n);
        if (u == null) {
          if (slateEditorCoreUtils.editorHelpers.isEditor(n)) {
            return r;
          }
          break;
        }
        var o = I.get(n);
        if (o == null) {
          break;
        }
        r.unshift(o);
        n = u;
      }
      throw Error(`Unable to find the path for Slate node: ${slateEditorCoreUtils.debugUtils.stringify(t)}`);
    },
    focus: function (e, t = {
      retries: 5
    }) {
      if (!X.get(e)) {
        if (t.retries <= 0) {
          throw Error("Could not set focus, editor seems stuck with pending operations");
        }
        if (e.operations.length > 0) {
          setTimeout(() => {
            ew.focus(e, {
              retries: t.retries - 1
            });
          }, 10);
          return;
        }
        var r = ew.toDOMNode(e, e);
        var n = ew.findDocumentOrShadowRoot(e);
        if (n.activeElement !== r) {
          if (e.selection && n instanceof Document) {
            var u = n.getSelection();
            var o = ew.toDOMRange(e, e.selection);
            if (u != null) {
              u.removeAllRanges();
            }
            if (u != null) {
              u.addRange(o);
            }
          }
          if (!e.selection) {
            slateEditorCoreUtils.editorTransforms.select(e, slateEditorCoreUtils.editorHelpers.start(e, []));
            e.onChange();
          }
          X.set(e, true);
          r.focus({
            preventScroll: true
          });
        }
      }
    },
    getWindow: e => {
      var t = z.get(e);
      if (!t) {
        throw Error("Unable to find a host window element for this editor");
      }
      return t;
    },
    hasDOMNode: function (e, t) {
      var r;
      var n = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      var {
        editable: u = false
      } = n;
      var o = ew.toDOMNode(e, e);
      try {
        r = ed(t) ? t : t.parentElement;
      } catch (e) {
        if (e instanceof Error && !e.message.includes("Permission denied to access property \"nodeType\"")) {
          throw e;
        }
      }
      return !!r && r.closest("[data-slate-editor]") === o && (!u || !!r.isContentEditable || typeof r.isContentEditable == "boolean" && r.closest("[contenteditable=\"false\"]") === o || !!r.getAttribute("data-slate-zero-width"));
    },
    hasEditableTarget: (e, t) => ef(t) && ew.hasDOMNode(e, t, {
      editable: true
    }),
    hasRange: (e, t) => {
      var {
        anchor: r,
        focus: n
      } = t;
      return slateEditorCoreUtils.editorHelpers.hasPath(e, r.path) && slateEditorCoreUtils.editorHelpers.hasPath(e, n.path);
    },
    hasSelectableTarget: (e, t) => ew.hasEditableTarget(e, t) || ew.isTargetInsideNonReadonlyVoid(e, t),
    hasTarget: (e, t) => ef(t) && ew.hasDOMNode(e, t),
    insertData: (e, t) => {
      e.insertData(t);
    },
    insertFragmentData: (e, t) => e.insertFragmentData(t),
    insertTextData: (e, t) => e.insertTextData(t),
    isComposing: e => !!H.get(e),
    isFocused: e => !!X.get(e),
    isReadOnly: e => !!Y.get(e),
    isTargetInsideNonReadonlyVoid: (e, t) => {
      if (Y.get(e)) {
        return false;
      }
      var r = ew.hasTarget(e, t) && ew.toSlateNode(e, t);
      return slateEditorCoreUtils.elementUtils.isElement(r) && slateEditorCoreUtils.editorHelpers.isVoid(e, r);
    },
    setFragmentData: (e, t, r) => e.setFragmentData(t, r),
    toDOMNode: (e, t) => {
      var r = $.get(e);
      var n = slateEditorCoreUtils.editorHelpers.isEditor(t) ? V.get(e) : r == null ? undefined : r.get(ew.findKey(e, t));
      if (!n) {
        throw Error(`Cannot resolve a DOM node from Slate node: ${slateEditorCoreUtils.debugUtils.stringify(t)}`);
      }
      return n;
    },
    toDOMPoint: (e, t) => {
      var [r] = slateEditorCoreUtils.editorHelpers.node(e, t.path);
      var n = ew.toDOMNode(e, r);
      if (slateEditorCoreUtils.editorHelpers.void(e, {
        at: t
      })) {
        t = {
          path: t.path,
          offset: 0
        };
      }
      var u = Array.from(n.querySelectorAll("[data-slate-string], [data-slate-zero-width]"));
      var o = 0;
      var a = 0;
      for (; a < u.length; a++) {
        var i = u[a];
        var s = i.childNodes[0];
        if (s != null && s.textContent != null) {
          var {
            length: l
          } = s.textContent;
          var c = i.getAttribute("data-slate-length");
          var d = o + (c == null ? l : parseInt(c, 10));
          var f = u[a + 1];
          if (t.offset === d && f != null && f.hasAttribute("data-slate-mark-placeholder")) {
            var p;
            var h;
            var D = f.childNodes[0];
            p = [D instanceof es ? D : f, (h = f.textContent) !== null && h !== undefined && h.startsWith("﻿") ? 1 : 0];
            break;
          }
          if (t.offset <= d) {
            p = [s, Math.min(l, Math.max(0, t.offset - o))];
            break;
          }
          o = d;
        }
      }
      if (!p) {
        throw Error(`Cannot resolve a DOM point from Slate point: ${slateEditorCoreUtils.debugUtils.stringify(t)}`);
      }
      return p;
    },
    toDOMRange: (e, t) => {
      var {
        anchor: r,
        focus: n
      } = t;
      var u = slateEditorCoreUtils.rangeUtils.isBackward(t);
      var o = ew.toDOMPoint(e, r);
      var a = slateEditorCoreUtils.rangeUtils.isCollapsed(t) ? o : ew.toDOMPoint(e, n);
      var i = ew.getWindow(e).document.createRange();
      var [s, l] = u ? a : o;
      var [c, d] = u ? o : a;
      var f = !!(ed(s) ? s : s.parentElement).getAttribute("data-slate-zero-width");
      var p = !!(ed(c) ? c : c.parentElement).getAttribute("data-slate-zero-width");
      i.setStart(s, f ? 1 : l);
      i.setEnd(c, p ? 1 : d);
      return i;
    },
    toSlateNode: (e, t) => {
      var r = ed(t) ? t : t.parentElement;
      if (r && !r.hasAttribute("data-slate-node")) {
        r = r.closest("[data-slate-node]");
      }
      var n = r ? Z.get(r) : null;
      if (!n) {
        throw Error(`Cannot resolve a Slate node from DOM node: ${r}`);
      }
      return n;
    },
    toSlatePoint: (e, t, r) => {
      var {
        exactMatch: n,
        suppressThrow: u
      } = r;
      var [o, a] = n ? t : eD(t);
      var i = o.parentNode;
      var s = null;
      var l = 0;
      if (i) {
        var c;
        var d;
        var f = ew.toDOMNode(e, e);
        var p = i.closest("[data-slate-void=\"true\"]");
        var h = p && f.contains(p) ? p : null;
        var D = i.closest("[data-slate-leaf]");
        var g = null;
        if (D) {
          if (s = D.closest("[data-slate-node=\"text\"]")) {
            var C = ew.getWindow(e).document.createRange();
            C.setStart(s, 0);
            C.setEnd(o, a);
            var m = C.cloneContents();
            [...Array.prototype.slice.call(m.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(m.querySelectorAll("[contenteditable=false]"))].forEach(e => {
              if (x && !n && e.hasAttribute("data-slate-zero-width") && e.textContent.length > 0 && e.textContext !== "﻿") {
                if (e.textContent.startsWith("﻿")) {
                  e.textContent = e.textContent.slice(1);
                }
                return;
              }
              e.parentNode.removeChild(e);
            });
            l = m.textContent.length;
            g = s;
          }
        } else if (h) {
          var B = h.querySelectorAll("[data-slate-leaf]");
          var E = 0;
          for (; E < B.length; E++) {
            var y = B[E];
            if (ew.hasDOMNode(e, y)) {
              D = y;
              break;
            }
          }
          if (D) {
            s = D.closest("[data-slate-node=\"text\"]");
            l = (g = D).textContent.length;
            g.querySelectorAll("[data-slate-zero-width]").forEach(e => {
              l -= e.textContent.length;
            });
          } else {
            l = 1;
          }
        }
        if (g && l === g.textContent.length && x && g.getAttribute("data-slate-zero-width") === "z" && (c = g.textContent) !== null && c !== undefined && c.startsWith("﻿") && (i.hasAttribute("data-slate-zero-width") || O && (d = g.textContent) !== null && d !== undefined && d.endsWith("\n\n"))) {
          l--;
        }
      }
      if (x && !s && !n) {
        var b = i.hasAttribute("data-slate-node") ? i : i.closest("[data-slate-node]");
        if (b && ew.hasDOMNode(e, b, {
          editable: true
        })) {
          var A = ew.toSlateNode(e, b);
          var {
            path: F,
            offset: w
          } = slateEditorCoreUtils.editorHelpers.start(e, ew.findPath(e, A));
          if (!b.querySelector("[data-slate-leaf]")) {
            w = a;
          }
          return {
            path: F,
            offset: w
          };
        }
      }
      if (!s) {
        if (u) {
          return null;
        }
        throw Error(`Cannot resolve a Slate point from DOM point: ${t}`);
      }
      var k = ew.toSlateNode(e, s);
      return {
        path: ew.findPath(e, k),
        offset: l
      };
    },
    toSlateRange: (e, t, r) => {
      var n;
      var u;
      var o;
      var a;
      var i;
      var s;
      var {
        exactMatch: c,
        suppressThrow: d
      } = r;
      if (ep(t) ? t.anchorNode : t.startContainer) {
        if (ep(t)) {
          if (O && t.rangeCount > 1) {
            a = t.focusNode;
            var f = t.getRangeAt(0);
            var p = t.getRangeAt(t.rangeCount - 1);
            if (a instanceof HTMLTableRowElement && f.startContainer instanceof HTMLTableRowElement && p.startContainer instanceof HTMLTableRowElement) {
              function h(e) {
                if (e.childElementCount > 0) {
                  return h(e.children[0]);
                } else {
                  return e;
                }
              }
              var D = f.startContainer;
              var g = p.startContainer;
              var C = h(D.children[f.startOffset]);
              var m = h(g.children[p.startOffset]);
              i = 0;
              u = m.childNodes.length > 0 ? m.childNodes[0] : m;
              a = C.childNodes.length > 0 ? C.childNodes[0] : C;
              o = m instanceof HTMLElement ? m.innerHTML.length : 0;
            } else if (f.startContainer === a) {
              u = p.endContainer;
              o = p.endOffset;
              i = f.startOffset;
            } else {
              u = f.startContainer;
              o = f.endOffset;
              i = p.startOffset;
            }
          } else {
            u = t.anchorNode;
            o = t.anchorOffset;
            a = t.focusNode;
            i = t.focusOffset;
          }
          s = P && eg(u) || O ? t.anchorNode === t.focusNode && t.anchorOffset === t.focusOffset : t.isCollapsed;
        } else {
          u = t.startContainer;
          o = t.startOffset;
          a = t.endContainer;
          i = t.endOffset;
          s = t.collapsed;
        }
      }
      if (u == null || a == null || o == null || i == null) {
        throw Error(`Cannot resolve a Slate range from DOM range: ${t}`);
      }
      if (O && (n = a.textContent) !== null && n !== undefined && n.endsWith("\n\n") && i === a.textContent.length) {
        i--;
      }
      if ("getAttribute" in a && a.getAttribute("contenteditable") === "false" && a.getAttribute("data-slate-void") !== "true") {
        a = u;
        i = u.textContent?.length || 0;
      }
      var B = ew.toSlatePoint(e, [u, o], {
        exactMatch: c,
        suppressThrow: d
      });
      if (!B) {
        return null;
      }
      var E = s ? B : ew.toSlatePoint(e, [a, i], {
        exactMatch: c,
        suppressThrow: d
      });
      if (!E) {
        return null;
      }
      var y = {
        anchor: B,
        focus: E
      };
      if (slateEditorCoreUtils.rangeUtils.isExpanded(y) && slateEditorCoreUtils.rangeUtils.isForward(y) && ed(a) && slateEditorCoreUtils.editorHelpers.void(e, {
        at: y.focus,
        mode: "highest"
      })) {
        y = slateEditorCoreUtils.editorHelpers.unhangRange(e, y, {
          voids: true
        });
      }
      return y;
    }
  };
  function ex(e) {
    var t = arguments.length;
    var r = Array(t > 1 ? t - 1 : 0);
    var n = 1;
    for (; n < t; n++) {
      r[n - 1] = arguments[n];
    }
    return r.reduce((e, t) => e.slice(0, t.start) + t.text + e.slice(t.end), e);
  }
  function eO(e, t) {
    var {
      start: r,
      end: n,
      text: u
    } = t;
    var o = e.slice(r, n);
    var a = function (e, t) {
      var r = Math.min(e.length, t.length);
      var n = 0;
      for (; n < r; n++) {
        if (e.charAt(n) !== t.charAt(n)) {
          return n;
        }
      }
      return r;
    }(o, u);
    var i = Math.min(o.length - a, u.length - a);
    var s = function (e, t, r) {
      var n = Math.min(e.length, t.length, r);
      var u = 0;
      for (; u < n; u++) {
        if (e.charAt(e.length - u - 1) !== t.charAt(t.length - u - 1)) {
          return u;
        }
      }
      return n;
    }(o, u, i);
    var l = {
      start: r + a,
      end: n - s,
      text: u.slice(a, u.length - s)
    };
    if (l.start === l.end && l.text.length === 0) {
      return null;
    } else {
      return l;
    }
  }
  function ek(e, t) {
    var {
      path: r,
      offset: n
    } = t;
    if (!slateEditorCoreUtils.editorHelpers.hasPath(e, r)) {
      return null;
    }
    var u = slateEditorCoreUtils.nodeUtils.get(e, r);
    if (!slateEditorCoreUtils.textUtils.isText(u)) {
      return null;
    }
    var o = slateEditorCoreUtils.editorHelpers.above(e, {
      match: t => slateEditorCoreUtils.elementUtils.isElement(t) && slateEditorCoreUtils.editorHelpers.isBlock(e, t),
      at: r
    });
    if (!o) {
      return null;
    }
    while (n > u.text.length) {
      var a = slateEditorCoreUtils.editorHelpers.next(e, {
        at: r,
        match: slateEditorCoreUtils.textUtils.isText
      });
      if (!a || !slateEditorCoreUtils.pathUtils.isDescendant(a[1], o[1])) {
        return null;
      }
      n -= u.text.length;
      u = a[0];
      r = a[1];
    }
    return {
      path: r,
      offset: n
    };
  }
  function eM(e, t) {
    var r = ek(e, t.anchor);
    if (!r) {
      return null;
    }
    if (slateEditorCoreUtils.rangeUtils.isCollapsed(t)) {
      return {
        anchor: r,
        focus: r
      };
    }
    var n = ek(e, t.focus);
    if (n) {
      return {
        anchor: r,
        focus: n
      };
    } else {
      return null;
    }
  }
  function eP(e, t, r) {
    var n = er.get(e);
    var u = n == null ? undefined : n.find(e => {
      var {
        path: r
      } = e;
      return slateEditorCoreUtils.pathUtils.equals(r, t.path);
    });
    if (!u || t.offset <= u.diff.start) {
      return slateEditorCoreUtils.pointUtils.transform(t, r, {
        affinity: "backward"
      });
    }
    var {
      diff: o
    } = u;
    if (t.offset <= o.start + o.text.length) {
      var a = {
        path: t.path,
        offset: o.start
      };
      var i = slateEditorCoreUtils.pointUtils.transform(a, r, {
        affinity: "backward"
      });
      if (i) {
        return {
          path: i.path,
          offset: i.offset + t.offset - o.start
        };
      } else {
        return null;
      }
    }
    var s = {
      path: t.path,
      offset: t.offset - o.text.length + o.end - o.start
    };
    var l = slateEditorCoreUtils.pointUtils.transform(s, r, {
      affinity: "backward"
    });
    if (l) {
      if (r.type === "split_node" && slateEditorCoreUtils.pathUtils.equals(r.path, t.path) && s.offset < r.position && o.start < r.position) {
        return l;
      } else {
        return {
          path: l.path,
          offset: l.offset + o.text.length - o.end + o.start
        };
      }
    } else {
      return null;
    }
  }
  function eS(e, t, r) {
    var n = eP(e, t.anchor, r);
    if (!n) {
      return null;
    }
    if (slateEditorCoreUtils.rangeUtils.isCollapsed(t)) {
      return {
        anchor: n,
        focus: n
      };
    }
    var u = eP(e, t.focus, r);
    if (u) {
      return {
        anchor: n,
        focus: u
      };
    } else {
      return null;
    }
  }
  function eR(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function ej(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eR(Object(r), true).forEach(function (t) {
          E(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eR(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function eT() {}
  var eN = e => (e == null ? undefined : e.constructor.name) === "DataTransfer";
  var eL = L ? reactCoreLibraryReexport.useLayoutEffect : reactCoreLibraryReexport.useEffect;
  var e_ = ["node"];
  function eI(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  var eW = {
    subtree: true,
    childList: true,
    characterData: true
  };
  var ez = x ? e => {
    var t;
    var {
      node: r
    } = e;
    var n = m(e, e_);
    if (!x) {
      return null;
    }
    var u = b();
    t = reactCoreLibraryReexport.useRef(false);
    reactCoreLibraryReexport.useEffect(() => {
      t.current = true;
      return () => {
        t.current = false;
      };
    }, []);
    var o = t.current;
    var [a] = reactCoreLibraryReexport.useState(() => function (e) {
      var {
        editor: t,
        scheduleOnDOMSelectionChange: r,
        onDOMSelectionChange: n
      } = e;
      var u = false;
      var o = null;
      var a = null;
      var i = null;
      var s = 0;
      var l = false;
      var c = () => {
        var e = eu.get(t);
        eu.delete(t);
        if (e) {
          var {
            selection: r
          } = t;
          var n = eM(t, e);
          if (!!n && (!r || !slateEditorCoreUtils.rangeUtils.equals(n, r))) {
            slateEditorCoreUtils.editorTransforms.select(t, n);
          }
        }
      };
      var d = () => {
        var e = en.get(t);
        en.delete(t);
        if (e) {
          if (e.at) {
            var r = slateEditorCoreUtils.pointUtils.isPoint(e.at) ? ek(t, e.at) : eM(t, e.at);
            if (!r) {
              return;
            }
            var n = slateEditorCoreUtils.editorHelpers.range(t, r);
            if (!t.selection || !slateEditorCoreUtils.rangeUtils.equals(t.selection, n)) {
              slateEditorCoreUtils.editorTransforms.select(t, r);
            }
          }
          e.run();
        }
      };
      var f = () => {
        if (a) {
          clearTimeout(a);
          a = null;
        }
        if (i) {
          clearTimeout(i);
          i = null;
        }
        if (!C() && !g()) {
          c();
          return;
        }
        if (!u) {
          u = true;
          setTimeout(() => u = false);
        }
        if (g()) {
          u = "action";
        }
        var e = t.selection && slateEditorCoreUtils.editorHelpers.rangeRef(t, t.selection, {
          affinity: "forward"
        });
        et.set(t, t.marks);
        eT("flush", en.get(t), er.get(t));
        for (var o = C(); s = er.get(t)?.[0];) {
          var s;
          var p;
          var h = ee.get(t);
          if (h !== undefined) {
            ee.delete(t);
            t.marks = h;
          }
          if (h && l === false) {
            l = null;
          }
          var D = function (e) {
            var {
              path: t,
              diff: r
            } = e;
            return {
              anchor: {
                path: t,
                offset: r.start
              },
              focus: {
                path: t,
                offset: r.end
              }
            };
          }(s);
          if (!t.selection || !slateEditorCoreUtils.rangeUtils.equals(t.selection, D)) {
            slateEditorCoreUtils.editorTransforms.select(t, D);
          }
          if (s.diff.text) {
            slateEditorCoreUtils.editorHelpers.insertText(t, s.diff.text);
          } else {
            slateEditorCoreUtils.editorHelpers.deleteFragment(t);
          }
          er.set(t, (p = er.get(t)) === null || p === undefined ? undefined : p.filter(e => {
            var {
              id: t
            } = e;
            return t !== s.id;
          }));
          if (!function (e, t) {
            var {
              path: r,
              diff: n
            } = t;
            if (!slateEditorCoreUtils.editorHelpers.hasPath(e, r)) {
              return false;
            }
            var u = slateEditorCoreUtils.nodeUtils.get(e, r);
            if (!slateEditorCoreUtils.textUtils.isText(u)) {
              return false;
            }
            if (n.start !== u.text.length || n.text.length === 0) {
              return u.text.slice(n.start, n.start + n.text.length) === n.text;
            }
            var o = slateEditorCoreUtils.pathUtils.next(r);
            if (!slateEditorCoreUtils.editorHelpers.hasPath(e, o)) {
              return false;
            }
            var a = slateEditorCoreUtils.nodeUtils.get(e, o);
            return slateEditorCoreUtils.textUtils.isText(a) && a.text.startsWith(n.text);
          }(t, s)) {
            o = false;
            en.delete(t);
            et.delete(t);
            u = "action";
            eu.delete(t);
            r.cancel();
            n.cancel();
            if (e != null) {
              e.unref();
            }
          }
        }
        var m = e == null ? undefined : e.unref();
        if (!!m && !eu.get(t) && (!t.selection || !slateEditorCoreUtils.rangeUtils.equals(m, t.selection))) {
          slateEditorCoreUtils.editorTransforms.select(t, m);
        }
        if (g()) {
          d();
          return;
        }
        if (o) {
          r();
        }
        r.flush();
        n.flush();
        c();
        var B = et.get(t);
        et.delete(t);
        if (B !== undefined) {
          t.marks = B;
          t.onChange();
        }
      };
      function p(e = false) {
        var r = q.get(t);
        if (r) {
          if (C() || e) {
            r.style.display = "none";
            return;
          }
          r.style.removeProperty("display");
        }
      }
      var h = (e, r) => {
        var n;
        var u;
        var o;
        var a;
        var i;
        var l;
        var c;
        var f = er.get(t) ?? [];
        er.set(t, f);
        var h = slateEditorCoreUtils.nodeUtils.leaf(t, e);
        var D = f.findIndex(t => slateEditorCoreUtils.pathUtils.equals(t.path, e));
        if (D < 0) {
          if (eO(h.text, r)) {
            f.push({
              path: e,
              diff: r,
              id: s++
            });
          }
          p();
          return;
        }
        n = h.text;
        o = Math.min((u = f[D].diff).start, r.start);
        a = Math.max(0, Math.min(u.start + u.text.length, r.end) - r.start);
        i = ex(n, u, r);
        l = Math.max(r.start + r.text.length, u.start + u.text.length + (u.start + u.text.length > r.start ? r.text.length : 0) - a);
        c = i.slice(o, l);
        var g = eO(n, {
          start: o,
          end: Math.max(u.end, r.end - u.text.length + (u.end - u.start)),
          text: c
        });
        if (!g) {
          f.splice(D, 1);
          p();
          return;
        }
        f[D] = ej(ej({}, f[D]), {}, {
          diff: g
        });
      };
      function D(e, {
        at: u
      } = {}) {
        l = false;
        eu.delete(t);
        r.cancel();
        n.cancel();
        if (g()) {
          f();
        }
        en.set(t, {
          at: u,
          run: e
        });
        i = setTimeout(f);
      }
      var g = () => !!en.get(t);
      var C = () => {
        var e;
        return (e = er.get(t)) !== null && e !== undefined && !!e.length;
      };
      var m = e => {
        eu.set(t, e);
        if (a) {
          clearTimeout(a);
          a = null;
        }
        var {
          selection: r
        } = t;
        if (e) {
          var n = !r || !slateEditorCoreUtils.pathUtils.equals(r.anchor.path, e.anchor.path);
          var u = !r || !slateEditorCoreUtils.pathUtils.equals(r.anchor.path.slice(0, -1), e.anchor.path.slice(0, -1));
          if (n && l || u) {
            l = false;
          }
          if (n || C()) {
            a = setTimeout(f, 200);
          }
        }
      };
      var B = () => {
        if (!g()) {
          i = setTimeout(f);
        }
      };
      return {
        flush: f,
        scheduleFlush: B,
        hasPendingDiffs: C,
        hasPendingAction: g,
        hasPendingChanges: () => g() || C(),
        isFlushing: () => u,
        handleUserSelect: m,
        handleCompositionEnd: e => {
          if (o) {
            clearTimeout(o);
          }
          o = setTimeout(() => {
            H.set(t, false);
            f();
          }, 25);
        },
        handleCompositionStart: e => {
          H.set(t, true);
          if (o) {
            clearTimeout(o);
            o = null;
          }
        },
        handleDOMBeforeInput: e => {
          if (a) {
            clearTimeout(a);
            a = null;
          }
          var {
            inputType: r
          } = e;
          var n = null;
          var u = e.dataTransfer || e.data || undefined;
          if (l !== false && r !== "insertText" && r !== "insertCompositionText") {
            l = false;
          }
          var [o] = e.getTargetRanges();
          if (o) {
            n = ew.toSlateRange(t, o, {
              exactMatch: false,
              suppressThrow: true
            });
          }
          var i = ew.getWindow(t).getSelection();
          if (!n && i) {
            o = i;
            n = ew.toSlateRange(t, i, {
              exactMatch: false,
              suppressThrow: true
            });
          }
          if (n = n ?? t.selection) {
            var s = true;
            if (r.startsWith("delete")) {
              if (slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                var [c, d] = slateEditorCoreUtils.rangeUtils.edges(n);
                if (slateEditorCoreUtils.nodeUtils.leaf(t, c.path).text.length === c.offset && d.offset === 0) {
                  var f = slateEditorCoreUtils.editorHelpers.next(t, {
                    at: c.path,
                    match: slateEditorCoreUtils.textUtils.isText
                  });
                  if (f && slateEditorCoreUtils.pathUtils.equals(f[1], d.path)) {
                    n = {
                      anchor: d,
                      focus: d
                    };
                  }
                }
              }
              var p = r.endsWith("Backward") ? "backward" : "forward";
              var [g, C] = slateEditorCoreUtils.rangeUtils.edges(n);
              var [E, y] = slateEditorCoreUtils.editorHelpers.leaf(t, g.path);
              var b = {
                text: "",
                start: g.offset,
                end: C.offset
              };
              var A = er.get(t);
              var F = A == null ? undefined : A.find(e => slateEditorCoreUtils.pathUtils.equals(e.path, y));
              var w = F ? [F.diff, b] : [b];
              if (ex(E.text, ...w).length === 0) {
                s = false;
              }
              if (slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                if (s && slateEditorCoreUtils.pathUtils.equals(n.anchor.path, n.focus.path)) {
                  var x = {
                    path: n.anchor.path,
                    offset: g.offset
                  };
                  m(slateEditorCoreUtils.editorHelpers.range(t, x, x));
                  return h(n.anchor.path, {
                    text: "",
                    end: C.offset,
                    start: g.offset
                  });
                }
                return D(() => slateEditorCoreUtils.editorHelpers.deleteFragment(t, {
                  direction: p
                }), {
                  at: n
                });
              }
            }
            switch (r) {
              case "deleteByComposition":
              case "deleteByCut":
              case "deleteByDrag":
                return D(() => slateEditorCoreUtils.editorHelpers.deleteFragment(t), {
                  at: n
                });
              case "deleteContent":
              case "deleteContentForward":
                var {
                  anchor: O
                } = n;
                if (s && slateEditorCoreUtils.rangeUtils.isCollapsed(n)) {
                  var k = slateEditorCoreUtils.nodeUtils.leaf(t, O.path);
                  if (O.offset < k.text.length) {
                    return h(O.path, {
                      text: "",
                      start: O.offset,
                      end: O.offset + 1
                    });
                  }
                }
                return D(() => slateEditorCoreUtils.editorHelpers.deleteForward(t), {
                  at: n
                });
              case "deleteContentBackward":
                var P;
                var {
                  anchor: S
                } = n;
                var R = ep(o) ? o.isCollapsed : (P = o) !== null && P !== undefined && !!P.collapsed;
                if (s && R && slateEditorCoreUtils.rangeUtils.isCollapsed(n) && S.offset > 0) {
                  return h(S.path, {
                    text: "",
                    start: S.offset - 1,
                    end: S.offset
                  });
                }
                return D(() => slateEditorCoreUtils.editorHelpers.deleteBackward(t), {
                  at: n
                });
              case "deleteEntireSoftLine":
                return D(() => {
                  slateEditorCoreUtils.editorHelpers.deleteBackward(t, {
                    unit: "line"
                  });
                  slateEditorCoreUtils.editorHelpers.deleteForward(t, {
                    unit: "line"
                  });
                }, {
                  at: n
                });
              case "deleteHardLineBackward":
                return D(() => slateEditorCoreUtils.editorHelpers.deleteBackward(t, {
                  unit: "block"
                }), {
                  at: n
                });
              case "deleteSoftLineBackward":
                return D(() => slateEditorCoreUtils.editorHelpers.deleteBackward(t, {
                  unit: "line"
                }), {
                  at: n
                });
              case "deleteHardLineForward":
                return D(() => slateEditorCoreUtils.editorHelpers.deleteForward(t, {
                  unit: "block"
                }), {
                  at: n
                });
              case "deleteSoftLineForward":
                return D(() => slateEditorCoreUtils.editorHelpers.deleteForward(t, {
                  unit: "line"
                }), {
                  at: n
                });
              case "deleteWordBackward":
                return D(() => slateEditorCoreUtils.editorHelpers.deleteBackward(t, {
                  unit: "word"
                }), {
                  at: n
                });
              case "deleteWordForward":
                return D(() => slateEditorCoreUtils.editorHelpers.deleteForward(t, {
                  unit: "word"
                }), {
                  at: n
                });
              case "insertLineBreak":
                return D(() => slateEditorCoreUtils.editorHelpers.insertSoftBreak(t), {
                  at: n
                });
              case "insertParagraph":
                return D(() => slateEditorCoreUtils.editorHelpers.insertBreak(t), {
                  at: n
                });
              case "insertCompositionText":
              case "deleteCompositionText":
              case "insertFromComposition":
              case "insertFromDrop":
              case "insertFromPaste":
              case "insertFromYank":
              case "insertReplacementText":
              case "insertText":
                if (eN(u)) {
                  return D(() => ew.insertData(t, u), {
                    at: n
                  });
                }
                var j = u ?? "";
                if (ee.get(t)) {
                  j = j.replace("﻿", "");
                }
                if (r === "insertText" && /.*\n.*\n$/.test(j)) {
                  j = j.slice(0, -1);
                }
                if (j.includes("\n")) {
                  return D(() => {
                    var e = j.split("\n");
                    e.forEach((r, n) => {
                      if (r) {
                        slateEditorCoreUtils.editorHelpers.insertText(t, r);
                      }
                      if (n !== e.length - 1) {
                        slateEditorCoreUtils.editorHelpers.insertSoftBreak(t);
                      }
                    });
                  }, {
                    at: n
                  });
                }
                if (slateEditorCoreUtils.pathUtils.equals(n.anchor.path, n.focus.path)) {
                  var [T, N] = slateEditorCoreUtils.rangeUtils.edges(n);
                  var L = {
                    start: T.offset,
                    end: N.offset,
                    text: j
                  };
                  if (j && l && r === "insertCompositionText") {
                    var _ = l.start + l.text.search(/\S|$/);
                    if (L.start + L.text.search(/\S|$/) === _ + 1 && L.end === l.start + l.text.length) {
                      L.start -= 1;
                      l = null;
                      B();
                    } else {
                      l = false;
                    }
                  } else {
                    l = r === "insertText" && (l === null ? L : !!l && !!slateEditorCoreUtils.rangeUtils.isCollapsed(n) && l.end + l.text.length === T.offset && ej(ej({}, l), {}, {
                      text: l.text + j
                    }));
                  }
                  if (s) {
                    h(T.path, L);
                    return;
                  }
                }
                return D(() => slateEditorCoreUtils.editorHelpers.insertText(t, j), {
                  at: n
                });
            }
          }
        },
        handleKeyDown: e => {
          if (!C()) {
            p(true);
            setTimeout(p);
          }
        },
        handleDomMutations: e => {
          if (!C() && !g() && e.some(r => eb(t, r, e))) {
            var r;
            if ((r = eo.get(t)) !== null && r !== undefined) {
              r();
            }
          }
        },
        handleInput: () => {
          if (g() || !C()) {
            f();
          }
        }
      };
    }(function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] ?? {};
        if (t % 2) {
          eI(Object(r), true).forEach(function (t) {
            E(e, t, r[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
        } else {
          eI(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
      }
      return e;
    }({
      editor: u
    }, n)));
    (function (e, t, r) {
      var [n] = reactCoreLibraryReexport.useState(() => new MutationObserver(t));
      eL(() => {
        n.takeRecords();
      });
      reactCoreLibraryReexport.useEffect(() => {
        if (!e.current) {
          throw Error("Failed to attach MutationObserver, `node` is undefined");
        }
        n.observe(e.current, r);
        return () => n.disconnect();
      }, [n, e, r]);
    })(r, a.handleDomMutations, eW);
    Q.set(u, a.scheduleFlush);
    if (o) {
      a.flush();
    }
    return a;
  } : () => null;
  var eV = ["anchor", "focus"];
  var eq = ["anchor", "focus"];
  var eZ = (e, t) => Object.keys(e).length === Object.keys(t).length && Object.keys(e).every(r => t.hasOwnProperty(r) && e[r] === t[r]);
  var eK = (e, t) => {
    var r = m(e, eV);
    var n = m(t, eq);
    return e[ea] === t[ea] && eZ(r, n);
  };
  var eU = (e, t) => {
    if (e.length !== t.length) {
      return false;
    }
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      var u = t[r];
      if (!slateEditorCoreUtils.rangeUtils.equals(n, u) || !eK(n, u)) {
        return false;
      }
    }
    return true;
  };
  var e$ = (e, t) => {
    if (e.length !== t.length) {
      return false;
    }
    for (var r = 0; r < e.length; r++) {
      var n = e[r];
      var u = t[r];
      if (n.anchor.offset !== u.anchor.offset || n.focus.offset !== u.focus.offset || !eK(n, u)) {
        return false;
      }
    }
    return true;
  };
  function eY(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  var eX = e => {
    var {
      isLast: t,
      leaf: r,
      parent: n,
      text: u
    } = e;
    var o = b();
    var a = ew.findPath(o, u);
    var s = slateEditorCoreUtils.pathUtils.parent(a);
    var l = !!r[ei];
    if (o.isVoid(n)) {
      return reactCoreLibraryReexport.createElement(eJ, {
        length: slateEditorCoreUtils.nodeUtils.string(n).length
      });
    } else if (r.text !== "" || n.children[n.children.length - 1] !== u || o.isInline(n) || slateEditorCoreUtils.editorHelpers.string(o, s) !== "") {
      if (r.text === "") {
        return reactCoreLibraryReexport.createElement(eJ, {
          isMarkPlaceholder: l
        });
      } else if (t && r.text.slice(-1) === "\n") {
        return reactCoreLibraryReexport.createElement(eH, {
          isTrailing: true,
          text: r.text
        });
      } else {
        return reactCoreLibraryReexport.createElement(eH, {
          text: r.text
        });
      }
    } else {
      return reactCoreLibraryReexport.createElement(eJ, {
        isLineBreak: true,
        isMarkPlaceholder: l
      });
    }
  };
  var eH = e => {
    var {
      text: t,
      isTrailing: r = false
    } = e;
    var n = reactCoreLibraryReexport.useRef(null);
    var u = () => `${t ?? ""}${r ? "\n" : ""}`;
    var [o] = reactCoreLibraryReexport.useState(u);
    eL(() => {
      var e = u();
      if (n.current && n.current.textContent !== e) {
        n.current.textContent = e;
      }
    });
    return reactCoreLibraryReexport.createElement(eG, {
      ref: n
    }, o);
  };
  var eG = reactCoreLibraryReexport.memo(reactCoreLibraryReexport.forwardRef((e, t) => reactCoreLibraryReexport.createElement("span", {
    "data-slate-string": true,
    ref: t
  }, e.children)));
  var eJ = e => {
    var {
      length: t = 0,
      isLineBreak: r = false,
      isMarkPlaceholder: n = false
    } = e;
    var u = {
      "data-slate-zero-width": r ? "n" : "z",
      "data-slate-length": t
    };
    if (n) {
      u["data-slate-mark-placeholder"] = true;
    }
    return reactCoreLibraryReexport.createElement("span", function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var r = arguments[t] ?? {};
        if (t % 2) {
          eY(Object(r), true).forEach(function (t) {
            E(e, t, r[t]);
          });
        } else if (Object.getOwnPropertyDescriptors) {
          Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
        } else {
          eY(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
        }
      }
      return e;
    }({}, u), x && r ? null : "﻿", r ? reactCoreLibraryReexport.createElement("br", null) : null);
  };
  function eQ(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e0(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        eQ(Object(r), true).forEach(function (t) {
          E(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        eQ(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var e1 = !!x * 300;
  function e2(e) {
    if (e.current) {
      clearTimeout(e.current);
      e.current = null;
    }
  }
  var e3 = reactCoreLibraryReexport.memo(e => {
    var {
      leaf: t,
      isLast: r,
      text: n,
      parent: u,
      renderPlaceholder: o,
      renderLeaf: a = e => reactCoreLibraryReexport.createElement(e4, e0({}, e))
    } = e;
    var s = b();
    var l = reactCoreLibraryReexport.useRef(null);
    var c = reactCoreLibraryReexport.useRef(null);
    var [d, f] = reactCoreLibraryReexport.useState(false);
    var p = reactCoreLibraryReexport.useRef(null);
    var h = reactCoreLibraryReexport.useCallback(e => {
      r = e == null;
      if (l.current) {
        l.current.disconnect();
        if (r) {
          l.current = null;
        }
      }
      if (e == null) {
        q.delete(s);
        if ((n = t.onPlaceholderResize) !== null && n !== undefined) {
          n.call(t, null);
        }
      } else {
        q.set(s, e);
        if (!l.current) {
          var r;
          var n;
          var u = window.ResizeObserver || resizeObserverPolyfill_2.ResizeObserver;
          l.current = new u(() => {
            var r;
            if ((r = t.onPlaceholderResize) !== null && r !== undefined) {
              r.call(t, e);
            }
          });
        }
        l.current.observe(e);
        c.current = e;
      }
    }, [c, t, s]);
    var v = reactCoreLibraryReexport.createElement(eX, {
      isLast: r,
      leaf: t,
      parent: u,
      text: n
    });
    var g = !!t[ea];
    reactCoreLibraryReexport.useEffect(() => {
      if (g) {
        p.current ||= setTimeout(() => {
          f(true);
          p.current = null;
        }, e1);
      } else {
        e2(p);
        f(false);
      }
      return () => e2(p);
    }, [g, f]);
    if (g && d) {
      var C = {
        children: t.placeholder,
        attributes: {
          "data-slate-placeholder": true,
          style: {
            position: "absolute",
            top: 0,
            pointerEvents: "none",
            width: "100%",
            maxWidth: "100%",
            display: "block",
            opacity: "0.333",
            userSelect: "none",
            textDecoration: "none",
            WebkitUserModify: k ? "inherit" : undefined
          },
          contentEditable: false,
          ref: h
        }
      };
      v = reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, o(C), v);
    }
    return a({
      attributes: {
        "data-slate-leaf": true
      },
      children: v,
      leaf: t,
      text: n
    });
  }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && slateEditorCoreUtils.textUtils.equals(t.leaf, e.leaf) && t.leaf[ea] === e.leaf[ea]);
  var e4 = e => {
    var {
      attributes: t,
      children: r
    } = e;
    return reactCoreLibraryReexport.createElement("span", e0({}, t), r);
  };
  var e7 = reactCoreLibraryReexport.memo(e => {
    var {
      decorations: t,
      isLast: r,
      parent: n,
      renderPlaceholder: u,
      renderLeaf: o,
      text: a
    } = e;
    var s = b();
    var l = reactCoreLibraryReexport.useRef(null);
    var c = slateEditorCoreUtils.textUtils.decorations(a, t);
    var d = ew.findKey(s, a);
    var f = [];
    var p = 0;
    for (; p < c.length; p++) {
      var h = c[p];
      f.push(reactCoreLibraryReexport.createElement(e3, {
        isLast: r && p === c.length - 1,
        key: `${d.id}-${p}`,
        renderPlaceholder: u,
        leaf: h,
        text: a,
        parent: n,
        renderLeaf: o
      }));
    }
    var D = reactCoreLibraryReexport.useCallback(e => {
      var t = $.get(s);
      if (e) {
        if (t != null) {
          t.set(d, e);
        }
        K.set(a, e);
        Z.set(e, a);
      } else {
        if (t != null) {
          t.delete(d);
        }
        K.delete(a);
        if (l.current) {
          Z.delete(l.current);
        }
      }
      l.current = e;
    }, [l, s, d, a]);
    return reactCoreLibraryReexport.createElement("span", {
      "data-slate-node": "text",
      ref: D
    }, f);
  }, (e, t) => t.parent === e.parent && t.isLast === e.isLast && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && t.text === e.text && e$(t.decorations, e.decorations));
  function e8(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function e6(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        e8(Object(r), true).forEach(function (t) {
          E(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        e8(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var e9 = reactCoreLibraryReexport.memo(e => {
    var {
      decorations: t,
      element: r,
      renderElement: n = e => reactCoreLibraryReexport.createElement(e5, e6({}, e)),
      renderPlaceholder: o,
      renderLeaf: a,
      selection: s
    } = e;
    var l = b();
    var c = to();
    var d = l.isInline(r);
    var f = ew.findKey(l, r);
    var p = reactCoreLibraryReexport.useCallback(e => {
      var t = $.get(l);
      if (e) {
        if (t != null) {
          t.set(f, e);
        }
        K.set(r, e);
        Z.set(e, r);
      } else {
        if (t != null) {
          t.delete(f);
        }
        K.delete(r);
      }
    }, [l, f, r]);
    var h = tn({
      decorations: t,
      node: r,
      renderElement: n,
      renderPlaceholder: o,
      renderLeaf: a,
      selection: s
    });
    var D = {
      "data-slate-node": "element",
      ref: p
    };
    if (d) {
      D["data-slate-inline"] = true;
    }
    if (!d && slateEditorCoreUtils.editorHelpers.hasInlines(l, r)) {
      var g = slateEditorCoreUtils.nodeUtils.string(r);
      var C = u(g);
      if (C === "rtl") {
        D.dir = C;
      }
    }
    if (slateEditorCoreUtils.editorHelpers.isVoid(l, r)) {
      D["data-slate-void"] = true;
      if (!c && d) {
        D.contentEditable = false;
      }
      var [[m]] = slateEditorCoreUtils.nodeUtils.texts(r);
      h = reactCoreLibraryReexport.createElement(d ? "span" : "div", {
        "data-slate-spacer": true,
        style: {
          height: "0",
          color: "transparent",
          outline: "none",
          position: "absolute"
        }
      }, reactCoreLibraryReexport.createElement(e7, {
        renderPlaceholder: o,
        decorations: [],
        isLast: false,
        parent: r,
        text: m
      }));
      I.set(m, 0);
      W.set(m, r);
    }
    return n({
      attributes: D,
      children: h,
      element: r
    });
  }, (e, t) => e.element === t.element && e.renderElement === t.renderElement && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && eU(e.decorations, t.decorations) && (e.selection === t.selection || !!e.selection && !!t.selection && slateEditorCoreUtils.rangeUtils.equals(e.selection, t.selection)));
  var e5 = e => {
    var {
      attributes: t,
      children: r,
      element: n
    } = e;
    var u = b().isInline(n) ? "span" : "div";
    return reactCoreLibraryReexport.createElement(u, e6(e6({}, t), {}, {
      style: {
        position: "relative"
      }
    }), r);
  };
  var te = reactCoreLibraryReexport.createContext(() => []);
  var tt = () => reactCoreLibraryReexport.useContext(te);
  var tr = reactCoreLibraryReexport.createContext(false);
  var tn = e => {
    var {
      decorations: t,
      node: r,
      renderElement: n,
      renderPlaceholder: u,
      renderLeaf: o,
      selection: a
    } = e;
    var s = tt();
    var l = b();
    var c = ew.findPath(l, r);
    var d = [];
    var f = slateEditorCoreUtils.elementUtils.isElement(r) && !l.isInline(r) && slateEditorCoreUtils.editorHelpers.hasInlines(l, r);
    var p = 0;
    for (; p < r.children.length; p++) {
      var h = c.concat(p);
      var D = r.children[p];
      var g = ew.findKey(l, D);
      var C = slateEditorCoreUtils.editorHelpers.range(l, h);
      var m = a && slateEditorCoreUtils.rangeUtils.intersection(C, a);
      var B = s([D, h]);
      for (var E of t) {
        var y = slateEditorCoreUtils.rangeUtils.intersection(E, C);
        if (y) {
          B.push(y);
        }
      }
      if (slateEditorCoreUtils.elementUtils.isElement(D)) {
        d.push(reactCoreLibraryReexport.createElement(tr.Provider, {
          key: `provider-${g.id}`,
          value: !!m
        }, reactCoreLibraryReexport.createElement(e9, {
          decorations: B,
          element: D,
          key: g.id,
          renderElement: n,
          renderPlaceholder: u,
          renderLeaf: o,
          selection: m
        })));
      } else {
        d.push(reactCoreLibraryReexport.createElement(e7, {
          decorations: B,
          key: g.id,
          isLast: f && p === r.children.length - 1,
          parent: r,
          renderPlaceholder: u,
          renderLeaf: o,
          text: D
        }));
      }
      I.set(D, p);
      W.set(D, r);
    }
    return d;
  };
  var tu = reactCoreLibraryReexport.createContext(false);
  var to = () => reactCoreLibraryReexport.useContext(tu);
  var ta = reactCoreLibraryReexport.createContext(null);
  var ti = () => {
    var e = reactCoreLibraryReexport.useContext(ta);
    if (!e) {
      throw Error("The `useSlate` hook must be used inside the <Slate> component's context.");
    }
    var {
      editor: t
    } = e;
    return t;
  };
  var ts = {
    bold: "mod+b",
    compose: ["down", "left", "right", "up", "backspace", "enter"],
    moveBackward: "left",
    moveForward: "right",
    moveWordBackward: "ctrl+left",
    moveWordForward: "ctrl+right",
    deleteBackward: "shift?+backspace",
    deleteForward: "shift?+delete",
    extendBackward: "shift+left",
    extendForward: "shift+right",
    italic: "mod+i",
    insertSoftBreak: "shift+enter",
    splitBlock: "enter",
    undo: "mod+z"
  };
  var tl = {
    moveLineBackward: "opt+up",
    moveLineForward: "opt+down",
    moveWordBackward: "opt+left",
    moveWordForward: "opt+right",
    deleteBackward: ["ctrl+backspace", "ctrl+h"],
    deleteForward: ["ctrl+delete", "ctrl+d"],
    deleteLineBackward: "cmd+shift?+backspace",
    deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
    deleteWordBackward: "opt+shift?+backspace",
    deleteWordForward: "opt+shift?+delete",
    extendLineBackward: "opt+shift+up",
    extendLineForward: "opt+shift+down",
    redo: "cmd+shift+z",
    transposeCharacter: "ctrl+t"
  };
  var tc = {
    deleteWordBackward: "ctrl+shift?+backspace",
    deleteWordForward: "ctrl+shift?+delete",
    redo: ["ctrl+y", "ctrl+shift+z"]
  };
  var td = e => {
    var t = ts[e];
    var r = tl[e];
    var n = tc[e];
    var u = t && hotkeyValidationUtils.isHotkey(t);
    var o = r && hotkeyValidationUtils.isHotkey(r);
    var a = n && hotkeyValidationUtils.isHotkey(n);
    return e => !!u && !!u(e) || !!w && !!o && !!o(e) || !w && !!a && !!a(e);
  };
  var tf = {
    isBold: td("bold"),
    isCompose: td("compose"),
    isMoveBackward: td("moveBackward"),
    isMoveForward: td("moveForward"),
    isDeleteBackward: td("deleteBackward"),
    isDeleteForward: td("deleteForward"),
    isDeleteLineBackward: td("deleteLineBackward"),
    isDeleteLineForward: td("deleteLineForward"),
    isDeleteWordBackward: td("deleteWordBackward"),
    isDeleteWordForward: td("deleteWordForward"),
    isExtendBackward: td("extendBackward"),
    isExtendForward: td("extendForward"),
    isExtendLineBackward: td("extendLineBackward"),
    isExtendLineForward: td("extendLineForward"),
    isItalic: td("italic"),
    isMoveLineBackward: td("moveLineBackward"),
    isMoveLineForward: td("moveLineForward"),
    isMoveWordBackward: td("moveWordBackward"),
    isMoveWordForward: td("moveWordForward"),
    isRedo: td("redo"),
    isSoftBreak: td("insertSoftBreak"),
    isSplitBlock: td("splitBlock"),
    isTransposeCharacter: td("transposeCharacter"),
    isUndo: td("undo")
  };
  var tp = (e, t) => {
    var r = [];
    var n = () => {
      r = [];
    };
    return {
      registerMutations: n => {
        if (t.current) {
          var u = n.filter(t => eb(e, t, n));
          r.push(...u);
        }
      },
      restoreDOM: function () {
        if (r.length > 0) {
          r.reverse().forEach(e => {
            if (e.type !== "characterData") {
              e.removedNodes.forEach(t => {
                e.target.insertBefore(t, e.nextSibling);
              });
              e.addedNodes.forEach(t => {
                e.target.removeChild(t);
              });
            }
          });
          n();
        }
      },
      clear: n
    };
  };
  var th = {
    subtree: true,
    childList: true,
    characterData: true,
    characterDataOldValue: true
  };
  class tv extends reactCoreLibraryReexport.Component {
    constructor() {
      super(...arguments);
      E(this, "context", null);
      E(this, "manager", null);
      E(this, "mutationObserver", null);
    }
    observe() {
      var e;
      var {
        node: t
      } = this.props;
      if (!t.current) {
        throw Error("Failed to attach MutationObserver, `node` is undefined");
      }
      if ((e = this.mutationObserver) !== null && e !== undefined) {
        e.observe(t.current, th);
      }
    }
    componentDidMount() {
      var {
        receivedUserInput: e
      } = this.props;
      var t = this.context;
      this.manager = tp(t, e);
      this.mutationObserver = new MutationObserver(this.manager.registerMutations);
      this.observe();
    }
    getSnapshotBeforeUpdate() {
      var e;
      var t;
      var r;
      var n;
      var u = (e = this.mutationObserver) === null || e === undefined ? undefined : e.takeRecords();
      if (u != null && u.length) {
        if ((n = this.manager) !== null && n !== undefined) {
          n.registerMutations(u);
        }
      }
      if ((t = this.mutationObserver) !== null && t !== undefined) {
        t.disconnect();
      }
      if ((r = this.manager) !== null && r !== undefined) {
        r.restoreDOM();
      }
      return null;
    }
    componentDidUpdate() {
      var e;
      if ((e = this.manager) !== null && e !== undefined) {
        e.clear();
      }
      this.observe();
    }
    componentWillUnmount() {
      var e;
      if ((e = this.mutationObserver) !== null && e !== undefined) {
        e.disconnect();
      }
    }
    render() {
      return this.props.children;
    }
  }
  E(tv, "contextType", y);
  var tD = x ? tv : e => {
    var {
      children: t
    } = e;
    return reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, t);
  };
  var tg = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"];
  var tC = ["text"];
  function tm(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function tB(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        tm(Object(r), true).forEach(function (t) {
          E(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        tm(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  var tE = e => reactCoreLibraryReexport.createElement(reactCoreLibraryReexport.Fragment, null, tn(e));
  var ty = e => {
    var t;
    var r;
    var n;
    var s;
    var l = reactCoreLibraryReexport.useCallback(e => reactCoreLibraryReexport.createElement(tb, tB({}, e)), []);
    var {
      autoFocus: c,
      decorate: d = tA,
      onDOMBeforeInput: f,
      placeholder: p,
      readOnly: h = false,
      renderElement: D,
      renderLeaf: g,
      renderPlaceholder: C = l,
      scrollSelectionIntoView: B = tF,
      style: E = {},
      as: y = "div",
      disableDefaultStyles: A = false
    } = e;
    var w = m(e, tg);
    var M = ti();
    var [S, R] = reactCoreLibraryReexport.useState(false);
    var I = reactCoreLibraryReexport.useRef(null);
    var W = reactCoreLibraryReexport.useRef([]);
    var [q, U] = reactCoreLibraryReexport.useState();
    t = b();
    r = reactCoreLibraryReexport.useRef(false);
    n = reactCoreLibraryReexport.useRef(0);
    s = reactCoreLibraryReexport.useCallback(() => {
      if (!r.current) {
        r.current = true;
        var e = ew.getWindow(t);
        e.cancelAnimationFrame(n.current);
        n.current = e.requestAnimationFrame(() => {
          r.current = false;
        });
      }
    }, [t]);
    reactCoreLibraryReexport.useEffect(() => () => cancelAnimationFrame(n.current), []);
    var {
      onUserInput: $,
      receivedUserInput: J
    } = {
      receivedUserInput: r,
      onUserInput: s
    };
    var [, Q] = reactCoreLibraryReexport.useReducer(e => e + 1, 0);
    eo.set(M, Q);
    Y.set(M, h);
    var er = reactCoreLibraryReexport.useMemo(() => ({
      isDraggingInternally: false,
      isUpdatingSelection: false,
      latestElement: null,
      hasMarkPlaceholder: false
    }), []);
    reactCoreLibraryReexport.useEffect(() => {
      if (I.current && c) {
        I.current.focus();
      }
    }, [c]);
    var en = reactCoreLibraryReexport.useRef();
    var eu = reactCoreLibraryReexport.useMemo(() => debounceUtilWrapper.createDebounce(() => {
      var e = en.current;
      if ((x || !ew.isComposing(M)) && (!er.isUpdatingSelection || e != null && e.isFlushing()) && !er.isDraggingInternally) {
        var t = ew.findDocumentOrShadowRoot(M);
        var {
          activeElement: r
        } = t;
        var n = ew.toDOMNode(M, M);
        var u = t.getSelection();
        if (r === n) {
          er.latestElement = r;
          X.set(M, true);
        } else {
          X.delete(M);
        }
        if (!u) {
          return slateEditorCoreUtils.editorTransforms.deselect(M);
        }
        var {
          anchorNode: o,
          focusNode: a
        } = u;
        var i = ew.hasEditableTarget(M, o) || ew.isTargetInsideNonReadonlyVoid(M, o);
        var s = ew.hasEditableTarget(M, a) || ew.isTargetInsideNonReadonlyVoid(M, a);
        if (i && s) {
          var l = ew.toSlateRange(M, u, {
            exactMatch: false,
            suppressThrow: true
          });
          if (l) {
            if (ew.isComposing(M) || e != null && e.hasPendingChanges() || e != null && e.isFlushing()) {
              if (e != null) {
                e.handleUserSelect(l);
              }
            } else {
              slateEditorCoreUtils.editorTransforms.select(M, l);
            }
          }
        }
        if (!!h && (!i || !s)) {
          slateEditorCoreUtils.editorTransforms.deselect(M);
        }
      }
    }, 100), [M, h, er]);
    var es = reactCoreLibraryReexport.useMemo(() => debounceUtil_1_1.debounce(eu, 0), [eu]);
    en.current = ez({
      node: I,
      onDOMSelectionChange: eu,
      scheduleOnDOMSelectionChange: es
    });
    eL(() => {
      if (I.current && (r = el(I.current))) {
        z.set(M, r);
        V.set(M, I.current);
        K.set(M, I.current);
        Z.set(I.current, M);
      } else {
        K.delete(M);
      }
      var e;
      var t;
      var r;
      var {
        selection: n
      } = M;
      var u = ew.findDocumentOrShadowRoot(M).getSelection();
      if (!!u && !!ew.isFocused(M) && ((e = en.current) === null || e === undefined || !e.hasPendingAction())) {
        var o = e => {
          var t = u.type !== "None";
          if (n || t) {
            var r = u.focusNode;
            if (O && u.rangeCount > 1) {
              var o = u.getRangeAt(0);
              var a = u.getRangeAt(u.rangeCount - 1);
              l = o.startContainer === r ? a.endContainer : o.startContainer;
            } else {
              l = u.anchorNode;
            }
            var i = V.get(M);
            var s = false;
            if (i.contains(l) && i.contains(r)) {
              s = true;
            }
            if (t && s && n && !e) {
              var l;
              var c;
              var d = ew.toSlateRange(M, u, {
                exactMatch: true,
                suppressThrow: true
              });
              if (d && slateEditorCoreUtils.rangeUtils.equals(d, n) && (!er.hasMarkPlaceholder || (c = l) !== null && c !== undefined && (c = c.parentElement) !== null && c !== undefined && c.hasAttribute("data-slate-mark-placeholder"))) {
                return;
              }
            }
            if (n && !ew.hasRange(M, n)) {
              M.selection = ew.toSlateRange(M, u, {
                exactMatch: false,
                suppressThrow: true
              });
              return;
            }
            er.isUpdatingSelection = true;
            var f = n && ew.toDOMRange(M, n);
            if (f) {
              if (ew.isComposing(M) && !x) {
                u.collapseToEnd();
              } else if (slateEditorCoreUtils.rangeUtils.isBackward(n)) {
                u.setBaseAndExtent(f.endContainer, f.endOffset, f.startContainer, f.startOffset);
              } else {
                u.setBaseAndExtent(f.startContainer, f.startOffset, f.endContainer, f.endOffset);
              }
              B(M, f);
            } else {
              u.removeAllRanges();
            }
            return f;
          }
        };
        if (u.rangeCount <= 1) {
          o();
        }
        var a = ((t = en.current) === null || t === undefined ? undefined : t.isFlushing()) === "action";
        if (!x || !a) {
          setTimeout(() => {
            er.isUpdatingSelection = false;
          });
          return;
        }
        var i = null;
        var s = requestAnimationFrame(() => {
          if (a) {
            var e = e => {
              try {
                ew.toDOMNode(M, M).focus();
                o(e);
              } catch (e) {}
            };
            e();
            i = setTimeout(() => {
              e(true);
              er.isUpdatingSelection = false;
            });
          }
        });
        return () => {
          cancelAnimationFrame(s);
          if (i) {
            clearTimeout(i);
          }
        };
      }
    });
    var ec = reactCoreLibraryReexport.useCallback(e => {
      $();
      if (!h && ew.hasEditableTarget(M, e.target) && !tO(e, f)) {
        if (en.current) {
          return en.current.handleDOMBeforeInput(e);
        }
        es.flush();
        eu.flush();
        var {
          selection: t
        } = M;
        var {
          inputType: r
        } = e;
        var n = e.dataTransfer || e.data || undefined;
        var u = r === "insertCompositionText" || r === "deleteCompositionText";
        if (!u || !ew.isComposing(M)) {
          var o = false;
          if (r === "insertText" && t && slateEditorCoreUtils.rangeUtils.isCollapsed(t) && e.data && e.data.length === 1 && /[a-z ]/i.test(e.data) && t.anchor.offset !== 0) {
            o = true;
            if (M.marks) {
              o = false;
            }
            var {
              anchor: a
            } = t;
            var [i, s] = ew.toDOMPoint(M, a);
            var l = (p = i.parentElement) === null || p === undefined ? undefined : p.closest("a");
            var c = ew.getWindow(M);
            if (o && l && ew.hasDOMNode(M, l)) {
              var d;
              var p;
              var D;
              var C = c == null ? undefined : c.document.createTreeWalker(l, NodeFilter.SHOW_TEXT).lastChild();
              if (C === i && C.textContent?.length === s) {
                o = false;
              }
            }
            if (o && i.parentElement && (c == null || (D = c.getComputedStyle(i.parentElement)) === null || D === undefined ? undefined : D.whiteSpace) === "pre") {
              var m = slateEditorCoreUtils.editorHelpers.above(M, {
                at: a.path,
                match: e => slateEditorCoreUtils.elementUtils.isElement(e) && slateEditorCoreUtils.editorHelpers.isBlock(M, e)
              });
              if (m && slateEditorCoreUtils.nodeUtils.string(m[0]).includes("\t")) {
                o = false;
              }
            }
          }
          if (!r.startsWith("delete") || r.startsWith("deleteBy")) {
            var [B] = e.getTargetRanges();
            if (B) {
              var E = ew.toSlateRange(M, B, {
                exactMatch: false,
                suppressThrow: false
              });
              if (!t || !slateEditorCoreUtils.rangeUtils.equals(t, E)) {
                o = false;
                var y = !u && M.selection && slateEditorCoreUtils.editorHelpers.rangeRef(M, M.selection);
                slateEditorCoreUtils.editorTransforms.select(M, E);
                if (y) {
                  G.set(M, y);
                }
              }
            }
          }
          if (!u) {
            if (!o) {
              e.preventDefault();
            }
            if (t && slateEditorCoreUtils.rangeUtils.isExpanded(t) && r.startsWith("delete")) {
              var b = r.endsWith("Backward") ? "backward" : "forward";
              slateEditorCoreUtils.editorHelpers.deleteFragment(M, {
                direction: b
              });
              return;
            }
            switch (r) {
              case "deleteByComposition":
              case "deleteByCut":
              case "deleteByDrag":
                slateEditorCoreUtils.editorHelpers.deleteFragment(M);
                break;
              case "deleteContent":
              case "deleteContentForward":
                slateEditorCoreUtils.editorHelpers.deleteForward(M);
                break;
              case "deleteContentBackward":
                slateEditorCoreUtils.editorHelpers.deleteBackward(M);
                break;
              case "deleteEntireSoftLine":
                slateEditorCoreUtils.editorHelpers.deleteBackward(M, {
                  unit: "line"
                });
                slateEditorCoreUtils.editorHelpers.deleteForward(M, {
                  unit: "line"
                });
                break;
              case "deleteHardLineBackward":
                slateEditorCoreUtils.editorHelpers.deleteBackward(M, {
                  unit: "block"
                });
                break;
              case "deleteSoftLineBackward":
                slateEditorCoreUtils.editorHelpers.deleteBackward(M, {
                  unit: "line"
                });
                break;
              case "deleteHardLineForward":
                slateEditorCoreUtils.editorHelpers.deleteForward(M, {
                  unit: "block"
                });
                break;
              case "deleteSoftLineForward":
                slateEditorCoreUtils.editorHelpers.deleteForward(M, {
                  unit: "line"
                });
                break;
              case "deleteWordBackward":
                slateEditorCoreUtils.editorHelpers.deleteBackward(M, {
                  unit: "word"
                });
                break;
              case "deleteWordForward":
                slateEditorCoreUtils.editorHelpers.deleteForward(M, {
                  unit: "word"
                });
                break;
              case "insertLineBreak":
                slateEditorCoreUtils.editorHelpers.insertSoftBreak(M);
                break;
              case "insertParagraph":
                slateEditorCoreUtils.editorHelpers.insertBreak(M);
                break;
              case "insertFromComposition":
              case "insertFromDrop":
              case "insertFromPaste":
              case "insertFromYank":
              case "insertReplacementText":
              case "insertText":
                if (r === "insertFromComposition" && ew.isComposing(M)) {
                  R(false);
                  H.set(M, false);
                }
                if ((n == null ? undefined : n.constructor.name) === "DataTransfer") {
                  ew.insertData(M, n);
                } else if (typeof n == "string") {
                  if (o) {
                    W.current.push(() => slateEditorCoreUtils.editorHelpers.insertText(M, n));
                  } else {
                    slateEditorCoreUtils.editorHelpers.insertText(M, n);
                  }
                }
            }
            var A = (d = G.get(M)) === null || d === undefined ? undefined : d.unref();
            G.delete(M);
            if (!!A && (!M.selection || !slateEditorCoreUtils.rangeUtils.equals(M.selection, A))) {
              slateEditorCoreUtils.editorTransforms.select(M, A);
            }
          }
        }
      }
    }, [M, eu, $, f, h, es]);
    var ep = reactCoreLibraryReexport.useCallback(e => {
      if (e == null) {
        eu.cancel();
        es.cancel();
        V.delete(M);
        K.delete(M);
        if (I.current && _) {
          I.current.removeEventListener("beforeinput", ec);
        }
      } else if (_) {
        e.addEventListener("beforeinput", ec);
      }
      I.current = e;
    }, [eu, es, M, ec]);
    eL(() => {
      var e = ew.getWindow(M);
      e.document.addEventListener("selectionchange", es);
      return () => {
        e.document.removeEventListener("selectionchange", es);
      };
    }, [es]);
    var eh = d([M, []]);
    var eD = p && M.children.length === 1 && Array.from(slateEditorCoreUtils.nodeUtils.texts(M)).length === 1 && slateEditorCoreUtils.nodeUtils.string(M) === "" && !S;
    var eg = reactCoreLibraryReexport.useCallback(e => {
      if (e && eD) {
        U(e.getBoundingClientRect()?.height);
      } else {
        U(undefined);
      }
    }, [eD]);
    if (eD) {
      var eC = slateEditorCoreUtils.editorHelpers.start(M, []);
      eh.push({
        [ea]: true,
        placeholder: p,
        onPlaceholderResize: eg,
        anchor: eC,
        focus: eC
      });
    }
    var {
      marks: em
    } = M;
    er.hasMarkPlaceholder = false;
    if (M.selection && slateEditorCoreUtils.rangeUtils.isCollapsed(M.selection) && em) {
      var {
        anchor: eB
      } = M.selection;
      var eE = slateEditorCoreUtils.nodeUtils.leaf(M, eB.path);
      var ey = m(eE, tC);
      if (!slateEditorCoreUtils.textUtils.equals(eE, em, {
        loose: true
      })) {
        er.hasMarkPlaceholder = true;
        var eb = Object.fromEntries(Object.keys(ey).map(e => [e, null]));
        eh.push(tB(tB(tB({
          [ei]: true
        }, eb), em), {}, {
          anchor: eB,
          focus: eB
        }));
      }
    }
    reactCoreLibraryReexport.useEffect(() => {
      setTimeout(() => {
        var {
          selection: e
        } = M;
        if (e) {
          var {
            anchor: t
          } = e;
          var r = slateEditorCoreUtils.nodeUtils.leaf(M, t.path);
          if (em && !slateEditorCoreUtils.textUtils.equals(r, em, {
            loose: true
          })) {
            ee.set(M, em);
            return;
          }
        }
        ee.delete(M);
      });
    });
    return reactCoreLibraryReexport.createElement(tu.Provider, {
      value: h
    }, reactCoreLibraryReexport.createElement(te.Provider, {
      value: d
    }, reactCoreLibraryReexport.createElement(tD, {
      node: I,
      receivedUserInput: J
    }, reactCoreLibraryReexport.createElement(y, tB(tB({
      role: h ? undefined : "textbox",
      "aria-multiline": !h || undefined
    }, w), {}, {
      spellCheck: (!!_ || !L) && w.spellCheck,
      autoCorrect: _ || !L ? w.autoCorrect : "false",
      autoCapitalize: _ || !L ? w.autoCapitalize : "false",
      "data-slate-editor": true,
      "data-slate-node": "value",
      contentEditable: !h,
      zindex: -1,
      suppressContentEditableWarning: true,
      ref: ep,
      style: tB(tB({}, A ? {} : tB({
        position: "relative",
        whiteSpace: "pre-wrap",
        wordWrap: "break-word"
      }, q ? {
        minHeight: q
      } : {})), E),
      onBeforeInput: reactCoreLibraryReexport.useCallback(e => {
        if (!_ && !h && !tw(e, w.onBeforeInput) && ew.hasSelectableTarget(M, e.target) && (e.preventDefault(), !ew.isComposing(M))) {
          var t = e.data;
          slateEditorCoreUtils.editorHelpers.insertText(M, t);
        }
      }, [w.onBeforeInput, M, h]),
      onInput: reactCoreLibraryReexport.useCallback(e => {
        if (!tw(e, w.onInput)) {
          if (en.current) {
            en.current.handleInput();
            return;
          }
          for (var t of W.current) {
            t();
          }
          W.current = [];
        }
      }, [w.onInput]),
      onBlur: reactCoreLibraryReexport.useCallback(e => {
        if (!h && !er.isUpdatingSelection && !!ew.hasSelectableTarget(M, e.target) && !tw(e, w.onBlur)) {
          var t = ew.findDocumentOrShadowRoot(M);
          if (er.latestElement !== t.activeElement) {
            var {
              relatedTarget: r
            } = e;
            if (r !== ew.toDOMNode(M, M) && (!ed(r) || !r.hasAttribute("data-slate-spacer"))) {
              if (r != null && ef(r) && ew.hasDOMNode(M, r)) {
                var n = ew.toSlateNode(M, r);
                if (slateEditorCoreUtils.elementUtils.isElement(n) && !M.isVoid(n)) {
                  return;
                }
              }
              if (k) {
                var u = t.getSelection();
                if (u != null) {
                  u.removeAllRanges();
                }
              }
              X.delete(M);
            }
          }
        }
      }, [h, er.isUpdatingSelection, er.latestElement, M, w.onBlur]),
      onClick: reactCoreLibraryReexport.useCallback(e => {
        if (ew.hasTarget(M, e.target) && !tw(e, w.onClick) && ef(e.target)) {
          var t = ew.toSlateNode(M, e.target);
          var r = ew.findPath(M, t);
          if (slateEditorCoreUtils.editorHelpers.hasPath(M, r) && slateEditorCoreUtils.nodeUtils.get(M, r) === t) {
            if (e.detail === 3 && r.length >= 1) {
              var n = r;
              if (!slateEditorCoreUtils.elementUtils.isElement(t) || !slateEditorCoreUtils.editorHelpers.isBlock(M, t)) {
                var o = slateEditorCoreUtils.editorHelpers.above(M, {
                  match: e => slateEditorCoreUtils.elementUtils.isElement(e) && slateEditorCoreUtils.editorHelpers.isBlock(M, e),
                  at: r
                });
                n = (o == null ? undefined : o[1]) ?? r.slice(0, 1);
              }
              var a = slateEditorCoreUtils.editorHelpers.range(M, n);
              slateEditorCoreUtils.editorTransforms.select(M, a);
              return;
            }
            if (!h) {
              var i = slateEditorCoreUtils.editorHelpers.start(M, r);
              var s = slateEditorCoreUtils.editorHelpers.end(M, r);
              var l = slateEditorCoreUtils.editorHelpers.void(M, {
                at: i
              });
              var c = slateEditorCoreUtils.editorHelpers.void(M, {
                at: s
              });
              if (l && c && slateEditorCoreUtils.pathUtils.equals(l[1], c[1])) {
                var d = slateEditorCoreUtils.editorHelpers.range(M, i);
                slateEditorCoreUtils.editorTransforms.select(M, d);
              }
            }
          }
        }
      }, [M, w.onClick, h]),
      onCompositionEnd: reactCoreLibraryReexport.useCallback(e => {
        if (ew.hasSelectableTarget(M, e.target)) {
          var t;
          if (ew.isComposing(M)) {
            Promise.resolve().then(() => {
              R(false);
              H.set(M, false);
            });
          }
          if ((t = en.current) !== null && t !== undefined) {
            t.handleCompositionEnd(e);
          }
          if (!tw(e, w.onCompositionEnd) && !x && !k && !j && !F && !N && !T && e.data) {
            var r = ee.get(M);
            ee.delete(M);
            if (r !== undefined) {
              et.set(M, M.marks);
              M.marks = r;
            }
            slateEditorCoreUtils.editorHelpers.insertText(M, e.data);
            var n = et.get(M);
            et.delete(M);
            if (n !== undefined) {
              M.marks = n;
            }
          }
        }
      }, [w.onCompositionEnd, M]),
      onCompositionUpdate: reactCoreLibraryReexport.useCallback(e => {
        if (!!ew.hasSelectableTarget(M, e.target) && !tw(e, w.onCompositionUpdate) && !ew.isComposing(M)) {
          R(true);
          H.set(M, true);
        }
      }, [w.onCompositionUpdate, M]),
      onCompositionStart: reactCoreLibraryReexport.useCallback(e => {
        if (ew.hasSelectableTarget(M, e.target) && ((t = en.current) === null || t === undefined || t.handleCompositionStart(e), !tw(e, w.onCompositionStart) && !x)) {
          R(true);
          var t;
          var {
            selection: r
          } = M;
          if (r && slateEditorCoreUtils.rangeUtils.isExpanded(r)) {
            slateEditorCoreUtils.editorHelpers.deleteFragment(M);
            return;
          }
        }
      }, [w.onCompositionStart, M]),
      onCopy: reactCoreLibraryReexport.useCallback(e => {
        if (!!ew.hasSelectableTarget(M, e.target) && !tw(e, w.onCopy) && !tx(e)) {
          e.preventDefault();
          ew.setFragmentData(M, e.clipboardData, "copy");
        }
      }, [w.onCopy, M]),
      onCut: reactCoreLibraryReexport.useCallback(e => {
        if (!h && ew.hasSelectableTarget(M, e.target) && !tw(e, w.onCut) && !tx(e)) {
          e.preventDefault();
          ew.setFragmentData(M, e.clipboardData, "cut");
          var {
            selection: t
          } = M;
          if (t) {
            if (slateEditorCoreUtils.rangeUtils.isExpanded(t)) {
              slateEditorCoreUtils.editorHelpers.deleteFragment(M);
            } else {
              var r = slateEditorCoreUtils.nodeUtils.parent(M, t.anchor.path);
              if (slateEditorCoreUtils.editorHelpers.isVoid(M, r)) {
                slateEditorCoreUtils.editorTransforms.delete(M);
              }
            }
          }
        }
      }, [h, M, w.onCut]),
      onDragOver: reactCoreLibraryReexport.useCallback(e => {
        if (ew.hasTarget(M, e.target) && !tw(e, w.onDragOver)) {
          var t = ew.toSlateNode(M, e.target);
          if (slateEditorCoreUtils.elementUtils.isElement(t) && slateEditorCoreUtils.editorHelpers.isVoid(M, t)) {
            e.preventDefault();
          }
        }
      }, [w.onDragOver, M]),
      onDragStart: reactCoreLibraryReexport.useCallback(e => {
        if (!h && ew.hasTarget(M, e.target) && !tw(e, w.onDragStart)) {
          var t = ew.toSlateNode(M, e.target);
          var r = ew.findPath(M, t);
          if (slateEditorCoreUtils.elementUtils.isElement(t) && slateEditorCoreUtils.editorHelpers.isVoid(M, t) || slateEditorCoreUtils.editorHelpers.void(M, {
            at: r,
            voids: true
          })) {
            var n = slateEditorCoreUtils.editorHelpers.range(M, r);
            slateEditorCoreUtils.editorTransforms.select(M, n);
          }
          er.isDraggingInternally = true;
          ew.setFragmentData(M, e.dataTransfer, "drag");
        }
      }, [h, M, w.onDragStart, er]),
      onDrop: reactCoreLibraryReexport.useCallback(e => {
        if (!h && ew.hasTarget(M, e.target) && !tw(e, w.onDrop)) {
          e.preventDefault();
          var t = M.selection;
          var r = ew.findEventRange(M, e);
          var n = e.dataTransfer;
          slateEditorCoreUtils.editorTransforms.select(M, r);
          if (er.isDraggingInternally && t && !slateEditorCoreUtils.rangeUtils.equals(t, r) && !slateEditorCoreUtils.editorHelpers.void(M, {
            at: r,
            voids: true
          })) {
            slateEditorCoreUtils.editorTransforms.delete(M, {
              at: t
            });
          }
          ew.insertData(M, n);
          if (!ew.isFocused(M)) {
            ew.focus(M);
          }
        }
        er.isDraggingInternally = false;
      }, [h, M, w.onDrop, er]),
      onDragEnd: reactCoreLibraryReexport.useCallback(e => {
        if (!h && er.isDraggingInternally && w.onDragEnd && ew.hasTarget(M, e.target)) {
          w.onDragEnd(e);
        }
        er.isDraggingInternally = false;
      }, [h, er, w, M]),
      onFocus: reactCoreLibraryReexport.useCallback(e => {
        if (!h && !er.isUpdatingSelection && ew.hasEditableTarget(M, e.target) && !tw(e, w.onFocus)) {
          var t = ew.toDOMNode(M, M);
          var r = ew.findDocumentOrShadowRoot(M);
          er.latestElement = r.activeElement;
          if (O && e.target !== t) {
            t.focus();
            return;
          }
          X.set(M, true);
        }
      }, [h, er, M, w.onFocus]),
      onKeyDown: reactCoreLibraryReexport.useCallback(e => {
        if (!h && ew.hasEditableTarget(M, e.target)) {
          if ((t = en.current) !== null && t !== undefined) {
            t.handleKeyDown(e);
          }
          var t;
          var {
            nativeEvent: r
          } = e;
          if (ew.isComposing(M) && r.isComposing === false) {
            H.set(M, false);
            R(false);
          }
          if (!tw(e, w.onKeyDown) && !ew.isComposing(M)) {
            var {
              selection: n
            } = M;
            var o = M.children[n !== null ? n.focus.path[0] : 0];
            var a = u(slateEditorCoreUtils.nodeUtils.string(o)) === "rtl";
            if (tf.isRedo(r)) {
              e.preventDefault();
              if (typeof M.redo == "function") {
                M.redo();
              }
              return;
            }
            if (tf.isUndo(r)) {
              e.preventDefault();
              if (typeof M.undo == "function") {
                M.undo();
              }
              return;
            }
            if (tf.isMoveLineBackward(r)) {
              e.preventDefault();
              slateEditorCoreUtils.editorTransforms.move(M, {
                unit: "line",
                reverse: true
              });
              return;
            }
            if (tf.isMoveLineForward(r)) {
              e.preventDefault();
              slateEditorCoreUtils.editorTransforms.move(M, {
                unit: "line"
              });
              return;
            }
            if (tf.isExtendLineBackward(r)) {
              e.preventDefault();
              slateEditorCoreUtils.editorTransforms.move(M, {
                unit: "line",
                edge: "focus",
                reverse: true
              });
              return;
            }
            if (tf.isExtendLineForward(r)) {
              e.preventDefault();
              slateEditorCoreUtils.editorTransforms.move(M, {
                unit: "line",
                edge: "focus"
              });
              return;
            }
            if (tf.isMoveBackward(r)) {
              e.preventDefault();
              if (n && slateEditorCoreUtils.rangeUtils.isCollapsed(n)) {
                slateEditorCoreUtils.editorTransforms.move(M, {
                  reverse: !a
                });
              } else {
                slateEditorCoreUtils.editorTransforms.collapse(M, {
                  edge: a ? "end" : "start"
                });
              }
              return;
            }
            if (tf.isMoveForward(r)) {
              e.preventDefault();
              if (n && slateEditorCoreUtils.rangeUtils.isCollapsed(n)) {
                slateEditorCoreUtils.editorTransforms.move(M, {
                  reverse: a
                });
              } else {
                slateEditorCoreUtils.editorTransforms.collapse(M, {
                  edge: a ? "start" : "end"
                });
              }
              return;
            }
            if (tf.isMoveWordBackward(r)) {
              e.preventDefault();
              if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                slateEditorCoreUtils.editorTransforms.collapse(M, {
                  edge: "focus"
                });
              }
              slateEditorCoreUtils.editorTransforms.move(M, {
                unit: "word",
                reverse: !a
              });
              return;
            }
            if (tf.isMoveWordForward(r)) {
              e.preventDefault();
              if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                slateEditorCoreUtils.editorTransforms.collapse(M, {
                  edge: "focus"
                });
              }
              slateEditorCoreUtils.editorTransforms.move(M, {
                unit: "word",
                reverse: a
              });
              return;
            }
            if (_) {
              if ((P || k) && n && (tf.isDeleteBackward(r) || tf.isDeleteForward(r)) && slateEditorCoreUtils.rangeUtils.isCollapsed(n)) {
                var i = slateEditorCoreUtils.nodeUtils.parent(M, n.anchor.path);
                if (slateEditorCoreUtils.elementUtils.isElement(i) && slateEditorCoreUtils.editorHelpers.isVoid(M, i) && (slateEditorCoreUtils.editorHelpers.isInline(M, i) || slateEditorCoreUtils.editorHelpers.isBlock(M, i))) {
                  e.preventDefault();
                  slateEditorCoreUtils.editorHelpers.deleteBackward(M, {
                    unit: "block"
                  });
                  return;
                }
              }
            } else {
              if (tf.isBold(r) || tf.isItalic(r) || tf.isTransposeCharacter(r)) {
                e.preventDefault();
                return;
              }
              if (tf.isSoftBreak(r)) {
                e.preventDefault();
                slateEditorCoreUtils.editorHelpers.insertSoftBreak(M);
                return;
              }
              if (tf.isSplitBlock(r)) {
                e.preventDefault();
                slateEditorCoreUtils.editorHelpers.insertBreak(M);
                return;
              }
              if (tf.isDeleteBackward(r)) {
                e.preventDefault();
                if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                  slateEditorCoreUtils.editorHelpers.deleteFragment(M, {
                    direction: "backward"
                  });
                } else {
                  slateEditorCoreUtils.editorHelpers.deleteBackward(M);
                }
                return;
              }
              if (tf.isDeleteForward(r)) {
                e.preventDefault();
                if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                  slateEditorCoreUtils.editorHelpers.deleteFragment(M, {
                    direction: "forward"
                  });
                } else {
                  slateEditorCoreUtils.editorHelpers.deleteForward(M);
                }
                return;
              }
              if (tf.isDeleteLineBackward(r)) {
                e.preventDefault();
                if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                  slateEditorCoreUtils.editorHelpers.deleteFragment(M, {
                    direction: "backward"
                  });
                } else {
                  slateEditorCoreUtils.editorHelpers.deleteBackward(M, {
                    unit: "line"
                  });
                }
                return;
              }
              if (tf.isDeleteLineForward(r)) {
                e.preventDefault();
                if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                  slateEditorCoreUtils.editorHelpers.deleteFragment(M, {
                    direction: "forward"
                  });
                } else {
                  slateEditorCoreUtils.editorHelpers.deleteForward(M, {
                    unit: "line"
                  });
                }
                return;
              }
              if (tf.isDeleteWordBackward(r)) {
                e.preventDefault();
                if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                  slateEditorCoreUtils.editorHelpers.deleteFragment(M, {
                    direction: "backward"
                  });
                } else {
                  slateEditorCoreUtils.editorHelpers.deleteBackward(M, {
                    unit: "word"
                  });
                }
                return;
              }
              if (tf.isDeleteWordForward(r)) {
                e.preventDefault();
                if (n && slateEditorCoreUtils.rangeUtils.isExpanded(n)) {
                  slateEditorCoreUtils.editorHelpers.deleteFragment(M, {
                    direction: "forward"
                  });
                } else {
                  slateEditorCoreUtils.editorHelpers.deleteForward(M, {
                    unit: "word"
                  });
                }
                return;
              }
            }
          }
        }
      }, [h, M, w.onKeyDown]),
      onPaste: reactCoreLibraryReexport.useCallback(e => {
        if (!h && ew.hasEditableTarget(M, e.target) && !tw(e, w.onPaste) && (!_ || ev(e.nativeEvent) || k)) {
          e.preventDefault();
          ew.insertData(M, e.clipboardData);
        }
      }, [h, M, w.onPaste])
    }), reactCoreLibraryReexport.createElement(tE, {
      decorations: eh,
      node: M,
      renderElement: D,
      renderPlaceholder: C,
      renderLeaf: g,
      selection: M.selection
    })))));
  };
  var tb = e => {
    var {
      attributes: t,
      children: r
    } = e;
    return reactCoreLibraryReexport.createElement("span", tB({}, t), r, x && reactCoreLibraryReexport.createElement("br", null));
  };
  var tA = () => [];
  var tF = (e, t) => {
    if (t.getBoundingClientRect && (!e.selection || e.selection && slateEditorCoreUtils.rangeUtils.isCollapsed(e.selection))) {
      var r = t.startContainer.parentElement;
      r.getBoundingClientRect = t.getBoundingClientRect.bind(t);
      (function (e, t) {
        if (!e.isConnected || !(e => {
          let t = e;
          while (t && t.parentNode) {
            if (t.parentNode === document) {
              return true;
            }
            t = t.parentNode instanceof ShadowRoot ? t.parentNode.host : t.parentNode;
          }
          return false;
        })(e)) {
          return;
        }
        let r = (e => {
          let t = window.getComputedStyle(e);
          return {
            top: parseFloat(t.scrollMarginTop) || 0,
            right: parseFloat(t.scrollMarginRight) || 0,
            bottom: parseFloat(t.scrollMarginBottom) || 0,
            left: parseFloat(t.scrollMarginLeft) || 0
          };
        })(e);
        if (typeof t == "object" && typeof t.behavior == "function") {
          return t.behavior(p(e, t));
        }
        let n = typeof t == "boolean" || t == null ? undefined : t.behavior;
        for (let {
          el: u,
          top: o,
          left: a
        } of p(e, h(t))) {
          let e = o - r.top + r.bottom;
          let t = a - r.left + r.right;
          u.scroll({
            top: e,
            left: t,
            behavior: n
          });
        }
      })(r, {
        scrollMode: "if-needed"
      });
      delete r.getBoundingClientRect;
    }
  };
  var tw = (e, t) => {
    if (!t) {
      return false;
    }
    var r = t(e);
    return r ?? (e.isDefaultPrevented() || e.isPropagationStopped());
  };
  var tx = e => ef(e.target) && (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement);
  var tO = (e, t) => {
    if (!t) {
      return false;
    }
    var r = t(e);
    return r ?? e.defaultPrevented;
  };
  var tk = reactCoreLibraryReexport.createContext(false);
  var tM = reactCoreLibraryReexport.createContext({});
  var tP = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"];
  var tS = e => {
    var t;
    var r;
    var n;
    var {
      editor: u,
      children: o,
      onChange: a,
      onSelectionChange: s,
      onValueChange: l,
      initialValue: c
    } = e;
    var d = m(e, tP);
    var [f, p] = reactCoreLibraryReexport.useState(() => {
      if (!slateEditorCoreUtils.nodeUtils.isNodeList(c)) {
        throw Error(`[Slate] initialValue is invalid! Expected a list of elements but got: ${slateEditorCoreUtils.debugUtils.stringify(c)}`);
      }
      if (!slateEditorCoreUtils.editorHelpers.isEditor(u)) {
        throw Error(`[Slate] editor is invalid! You passed: ${slateEditorCoreUtils.debugUtils.stringify(u)}`);
      }
      u.children = c;
      Object.assign(u, d);
      return {
        v: 0,
        editor: u
      };
    });
    t = reactCoreLibraryReexport.useRef([]).current;
    r = reactCoreLibraryReexport.useRef({
      editor: u
    }).current;
    n = reactCoreLibraryReexport.useCallback(e => {
      r.editor = e;
      t.forEach(t => t(e));
    }, [t, r]);
    var {
      selectorContext: h,
      onChange: D
    } = {
      selectorContext: reactCoreLibraryReexport.useMemo(() => ({
        getSlate: () => r.editor,
        addEventListener: e => {
          t.push(e);
          return () => {
            t.splice(t.indexOf(e), 1);
          };
        }
      }), [t, r]),
      onChange: n
    };
    var g = reactCoreLibraryReexport.useCallback(e => {
      var t;
      if (a) {
        a(u.children);
      }
      if ((e == null || (t = e.operation) === null || t === undefined ? undefined : t.type) === "set_selection") {
        if (s != null) {
          s(u.selection);
        }
      } else if (l != null) {
        l(u.children);
      }
      p(e => ({
        v: e.v + 1,
        editor: u
      }));
      D(u);
    }, [u, D, a, s, l]);
    reactCoreLibraryReexport.useEffect(() => {
      J.set(u, g);
      return () => {
        J.set(u, () => {});
      };
    }, [u, g]);
    var [C, B] = reactCoreLibraryReexport.useState(ew.isFocused(u));
    reactCoreLibraryReexport.useEffect(() => {
      B(ew.isFocused(u));
    }, [u]);
    eL(() => {
      var e = () => B(ew.isFocused(u));
      if (A >= 17) {
        document.addEventListener("focusin", e);
        document.addEventListener("focusout", e);
        return () => {
          document.removeEventListener("focusin", e);
          document.removeEventListener("focusout", e);
        };
      } else {
        document.addEventListener("focus", e, true);
        document.addEventListener("blur", e, true);
        return () => {
          document.removeEventListener("focus", e, true);
          document.removeEventListener("blur", e, true);
        };
      }
    }, []);
    return reactCoreLibraryReexport.createElement(tM.Provider, {
      value: h
    }, reactCoreLibraryReexport.createElement(ta.Provider, {
      value: f
    }, reactCoreLibraryReexport.createElement(y.Provider, {
      value: f.editor
    }, reactCoreLibraryReexport.createElement(tk.Provider, {
      value: C
    }, o))));
  };
  var tR = (e, t) => {
    var r = (t.top + t.bottom) / 2;
    return e.top <= r && e.bottom >= r;
  };
  var tj = (e, t, r) => {
    var n = ew.toDOMRange(e, t).getBoundingClientRect();
    var u = ew.toDOMRange(e, r).getBoundingClientRect();
    return tR(n, u) && tR(u, n);
  };
  var tT = (e, t) => {
    var r = slateEditorCoreUtils.editorHelpers.range(e, slateEditorCoreUtils.rangeUtils.end(t));
    var n = Array.from(slateEditorCoreUtils.editorHelpers.positions(e, {
      at: t
    }));
    var u = 0;
    var o = n.length;
    var a = Math.floor(o / 2);
    if (tj(e, slateEditorCoreUtils.editorHelpers.range(e, n[u]), r)) {
      return slateEditorCoreUtils.editorHelpers.range(e, n[u], r);
    }
    if (n.length < 2) {
      return slateEditorCoreUtils.editorHelpers.range(e, n[n.length - 1], r);
    }
    while (a !== n.length && a !== u) {
      if (tj(e, slateEditorCoreUtils.editorHelpers.range(e, n[a]), r)) {
        o = a;
      } else {
        u = a;
      }
      a = Math.floor((u + o) / 2);
    }
    return slateEditorCoreUtils.editorHelpers.range(e, n[o], r);
  };
  function tN(e, t) {
    var r = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var n = Object.getOwnPropertySymbols(e);
      if (t) {
        n = n.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        });
      }
      r.push.apply(r, n);
    }
    return r;
  }
  function tL(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t] ?? {};
      if (t % 2) {
        tN(Object(r), true).forEach(function (t) {
          E(e, t, r[t]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(e, Object.getOwnPropertyDescriptors(r));
      } else {
        tN(Object(r)).forEach(function (t) {
          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
        });
      }
    }
    return e;
  }
  function t_(e, t = "x-slate-fragment") {
    var {
      apply: r,
      onChange: n,
      deleteBackward: u,
      addMark: o,
      removeMark: a
    } = e;
    $.set(e, new WeakMap());
    e.addMark = (t, r) => {
      var n;
      var u;
      if ((n = Q.get(e)) !== null && n !== undefined) {
        n();
      }
      if (!ee.get(e) && (u = er.get(e)) !== null && u !== undefined && u.length) {
        ee.set(e, null);
      }
      et.delete(e);
      o(t, r);
    };
    e.removeMark = t => {
      var r;
      if (!ee.get(e) && (r = er.get(e)) !== null && r !== undefined && r.length) {
        ee.set(e, null);
      }
      et.delete(e);
      a(t);
    };
    e.deleteBackward = t => {
      if (t !== "line") {
        return u(t);
      }
      if (e.selection && slateEditorCoreUtils.rangeUtils.isCollapsed(e.selection)) {
        var r = slateEditorCoreUtils.editorHelpers.above(e, {
          match: t => slateEditorCoreUtils.elementUtils.isElement(t) && slateEditorCoreUtils.editorHelpers.isBlock(e, t),
          at: e.selection
        });
        if (r) {
          var [, n] = r;
          var o = slateEditorCoreUtils.editorHelpers.range(e, n, e.selection.anchor);
          var a = tT(e, o);
          if (!slateEditorCoreUtils.rangeUtils.isCollapsed(a)) {
            slateEditorCoreUtils.editorTransforms.delete(e, {
              at: a
            });
          }
        }
      }
    };
    e.apply = t => {
      var n = [];
      var u = [];
      var o = er.get(e);
      if (o != null && o.length) {
        var a = o.map(e => function (e, t) {
          var {
            path: r,
            diff: n,
            id: u
          } = e;
          switch (t.type) {
            case "insert_text":
              if (!slateEditorCoreUtils.pathUtils.equals(t.path, r) || t.offset >= n.end) {
                return e;
              }
              if (t.offset <= n.start) {
                return {
                  diff: {
                    start: t.text.length + n.start,
                    end: t.text.length + n.end,
                    text: n.text
                  },
                  id: u,
                  path: r
                };
              }
              return {
                diff: {
                  start: n.start,
                  end: n.end + t.text.length,
                  text: n.text
                },
                id: u,
                path: r
              };
            case "remove_text":
              if (!slateEditorCoreUtils.pathUtils.equals(t.path, r) || t.offset >= n.end) {
                return e;
              }
              if (t.offset + t.text.length <= n.start) {
                return {
                  diff: {
                    start: n.start - t.text.length,
                    end: n.end - t.text.length,
                    text: n.text
                  },
                  id: u,
                  path: r
                };
              }
              return {
                diff: {
                  start: n.start,
                  end: n.end - t.text.length,
                  text: n.text
                },
                id: u,
                path: r
              };
            case "split_node":
              if (!slateEditorCoreUtils.pathUtils.equals(t.path, r) || t.position >= n.end) {
                return {
                  diff: n,
                  id: u,
                  path: slateEditorCoreUtils.pathUtils.transform(r, t, {
                    affinity: "backward"
                  })
                };
              }
              if (t.position > n.start) {
                return {
                  diff: {
                    start: n.start,
                    end: Math.min(t.position, n.end),
                    text: n.text
                  },
                  id: u,
                  path: r
                };
              }
              return {
                diff: {
                  start: n.start - t.position,
                  end: n.end - t.position,
                  text: n.text
                },
                id: u,
                path: slateEditorCoreUtils.pathUtils.transform(r, t, {
                  affinity: "forward"
                })
              };
            case "merge_node":
              if (!slateEditorCoreUtils.pathUtils.equals(t.path, r)) {
                return {
                  diff: n,
                  id: u,
                  path: slateEditorCoreUtils.pathUtils.transform(r, t)
                };
              }
              return {
                diff: {
                  start: n.start + t.position,
                  end: n.end + t.position,
                  text: n.text
                },
                id: u,
                path: slateEditorCoreUtils.pathUtils.transform(r, t)
              };
          }
          var o = slateEditorCoreUtils.pathUtils.transform(r, t);
          if (o) {
            return {
              diff: n,
              path: o,
              id: u
            };
          } else {
            return null;
          }
        }(e, t)).filter(Boolean);
        er.set(e, a);
      }
      var i = eu.get(e);
      if (i) {
        eu.set(e, eS(e, i, t));
      }
      var s = en.get(e);
      if (s != null && s.at) {
        var l = slateEditorCoreUtils.pointUtils.isPoint(s == null ? undefined : s.at) ? eP(e, s.at, t) : eS(e, s.at, t);
        en.set(e, l ? tL(tL({}, s), {}, {
          at: l
        }) : null);
      }
      switch (t.type) {
        case "insert_text":
        case "remove_text":
        case "set_node":
        case "split_node":
          n.push(...tI(e, t.path));
          break;
        case "set_selection":
          if ((c = G.get(e)) !== null && c !== undefined) {
            c.unref();
          }
          G.delete(e);
          break;
        case "insert_node":
        case "remove_node":
          n.push(...tI(e, slateEditorCoreUtils.pathUtils.parent(t.path)));
          break;
        case "merge_node":
          n.push(...tI(e, slateEditorCoreUtils.pathUtils.previous(t.path)));
          break;
        case "move_node":
          n.push(...tI(e, slateEditorCoreUtils.pathUtils.common(slateEditorCoreUtils.pathUtils.parent(t.path), slateEditorCoreUtils.pathUtils.parent(t.newPath))));
          if (slateEditorCoreUtils.pathUtils.isBefore(t.path, t.newPath)) {
            n.push(...tI(e, slateEditorCoreUtils.pathUtils.parent(t.path)));
            d = t.newPath;
          } else {
            n.push(...tI(e, slateEditorCoreUtils.pathUtils.parent(t.newPath)));
            d = t.path;
          }
          var c;
          var d;
          var f = slateEditorCoreUtils.nodeUtils.get(e, slateEditorCoreUtils.pathUtils.parent(d));
          var p = ew.findKey(e, f);
          u.push([slateEditorCoreUtils.editorHelpers.pathRef(e, slateEditorCoreUtils.pathUtils.parent(d)), p]);
      }
      r(t);
      for (var [h, D] of n) {
        var [g] = slateEditorCoreUtils.editorHelpers.node(e, h);
        U.set(g, D);
      }
      for (var [C, m] of u) {
        if (C.current) {
          var [B] = slateEditorCoreUtils.editorHelpers.node(e, C.current);
          U.set(B, m);
        }
      }
    };
    e.setFragmentData = r => {
      var {
        selection: n
      } = e;
      if (n) {
        var [u, o] = slateEditorCoreUtils.rangeUtils.edges(n);
        var a = slateEditorCoreUtils.editorHelpers.void(e, {
          at: u.path
        });
        var i = slateEditorCoreUtils.editorHelpers.void(e, {
          at: o.path
        });
        if (!slateEditorCoreUtils.rangeUtils.isCollapsed(n) || a) {
          var s = ew.toDOMRange(e, n);
          var l = s.cloneContents();
          var c = l.childNodes[0];
          l.childNodes.forEach(e => {
            if (e.textContent && e.textContent.trim() !== "") {
              c = e;
            }
          });
          if (i) {
            var [d] = i;
            var f = s.cloneRange();
            var p = ew.toDOMNode(e, d);
            f.setEndAfter(p);
            l = f.cloneContents();
          }
          if (a) {
            c = l.querySelector("[data-slate-spacer]");
          }
          Array.from(l.querySelectorAll("[data-slate-zero-width]")).forEach(e => {
            var t = e.getAttribute("data-slate-zero-width") === "n";
            e.textContent = t ? "\n" : "";
          });
          if (eh(c)) {
            var h = c.ownerDocument.createElement("span");
            h.style.whiteSpace = "pre";
            h.appendChild(c);
            l.appendChild(h);
            c = h;
          }
          var D = JSON.stringify(e.getFragment());
          var g = window.btoa(encodeURIComponent(D));
          c.setAttribute("data-slate-fragment", g);
          r.setData(`application/${t}`, g);
          var C = l.ownerDocument.createElement("div");
          C.appendChild(l);
          C.setAttribute("hidden", "true");
          l.ownerDocument.body.appendChild(C);
          r.setData("text/html", C.innerHTML);
          r.setData("text/plain", eB(C));
          l.ownerDocument.body.removeChild(C);
          return r;
        }
      }
    };
    e.insertData = t => {
      if (!e.insertFragmentData(t)) {
        e.insertTextData(t);
      }
    };
    e.insertFragmentData = r => {
      var n = r.getData(`application/${t}`) || ey(r);
      if (n) {
        var u = JSON.parse(decodeURIComponent(window.atob(n)));
        e.insertFragment(u);
        return true;
      }
      return false;
    };
    e.insertTextData = t => {
      var r = t.getData("text/plain");
      if (r) {
        var n = r.split(/\r\n|\r|\n/);
        var u = false;
        for (var o of n) {
          if (u) {
            slateEditorCoreUtils.editorTransforms.splitNodes(e, {
              always: true
            });
          }
          e.insertText(o);
          u = true;
        }
        return true;
      }
      return false;
    };
    e.onChange = t => {
      (A < 18 ? reactDomEntryWrapper.unstable_batchedUpdates : e => e())(() => {
        var r = J.get(e);
        if (r) {
          r(t);
        }
        n(t);
      });
    };
    return e;
  }
  var tI = (e, t) => {
    var r = [];
    for (var [n, u] of slateEditorCoreUtils.editorHelpers.levels(e, {
      at: t
    })) {
      var o = ew.findKey(e, n);
      r.push([u, o]);
    }
    return r;
  };
  require.d(exports, {
    SlateEditor: function () {
      return ty;
    },
    domUtils: function () {
      return ew;
    },
    SlateProvider: function () {
      return tS;
    },
    withSlateFragment: function () {
      return t_;
    }
  });
}