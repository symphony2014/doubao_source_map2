// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'E_' to 'hasFakeText'
// - Renamed export 'Eb' to 'getNextFakeText'
// - Renamed export 'Ju' to 'getFakeTextAttr'
// - Renamed export 'KK' to 'adjustRangeOffset'
// - Renamed export 'MK' to 'getCleanTextLen'
// - Renamed export 'Ny' to 'hasFakeTextSel'
// - Renamed export 'S3' to 'collectEditorText'
// - Renamed export 'Tl' to 'getViewModelLine'
// - Renamed export 'U_' to 'queryEditorNodes'
// - Renamed export 'XM' to 'createRangeFrom'
// - Renamed export 'Yr' to 'compareSelRange'
// - Renamed export 'Zj' to 'getRangeFromSel'
// - Renamed export 'fr' to 'cleanRangeContent'
// - Renamed export 'hl' to 'hasZeroSpaceNode'
// - Renamed export 'iB' to 'findZeroSpaceNode'
// - Renamed export 'mO' to 'findClosestNode'
// - Renamed export 'qI' to 'isVoidNode'
// - Renamed export 'x1' to 'hasZeroSpaceAttr'
// - Renamed export 'y1' to 'isTextNode'
// - Renamed export 'z8' to 'collectTextNodes'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 13032.fea06b08.js
         * chunkId: 13032
         * moduleId: 978010
         */
module.exports = function (module, exports, require) {
  var typescriptRuntimeHelpers_1 = require("typescript-runtime-helpers_1") /*id: 598728*/;
  var editorConstantsKeycodes = require("editor-constants-keycodes") /*id: 495515*/;
  var browserDetectUtils = require("browser-detect-utils") /*id: 749406*/;
  function s(e) {
    return e instanceof Node;
  }
  function l(e) {
    return s(e) && e.nodeType === Node.TEXT_NODE;
  }
  function a(e) {
    return s(e) && e.nodeType === Node.ELEMENT_NODE;
  }
  function u(e, t, n) {
    if (!(e instanceof HTMLElement) || e.tagName.toLowerCase() === "br" || !e.childNodes[t] || e.classList.contains(editorConstantsKeycodes.editorKitContainer)) {
      return null;
    }
    var i;
    var r = e.childNodes;
    var l = r[t];
    var u = t;
    var d = false;
    var c = false;
    while ((s(i = l) && i.nodeType === Node.COMMENT_NODE || a(l) && l.childNodes.length === 0 || a(l) && l.getAttribute("contenteditable") === "false" && !l.getAttribute(editorConstantsKeycodes.dataFakeText_1)) && (!d || !c)) {
      if (u >= r.length) {
        d = true;
        u = t - 1;
        n = "backward";
      } else if (u < 0) {
        c = true;
        u = t + 1;
        n = "forward";
      } else {
        l = r[u];
        u += n === "forward" ? 1 : -1;
      }
    }
    return l;
  }
  function d(e) {
    var t = e.node;
    var n = e.offset;
    if (a(t) && t.hasChildNodes()) {
      var i = (n = Math.min(n, t.childNodes.length)) === t.childNodes.length;
      var o = i ? "backward" : "forward";
      for (t = t.childNodes[i ? n - 1 : n]; t instanceof HTMLElement && t.childNodes.length;) {
        var r = i ? t.childNodes.length - 1 : 0;
        var t = u(t, r, o);
      }
      if (!t) {
        return e;
      }
      n = i && t.textContent != null ? t.textContent.length : 0;
    }
    return {
      node: t,
      offset: n
    };
  }
  function c(e) {
    if (!e) {
      return null;
    }
    var t = e;
    if ((t = e.nodeType === window.Node.TEXT_NODE ? e.parentNode : t) && t.closest) {
      return t.closest("[" + editorConstantsKeycodes.dataNode + "]");
    } else {
      return null;
    }
  }
  function h(e) {
    if (!(e instanceof HTMLElement)) {
      return "";
    }
    var t = e.hasAttribute(editorConstantsKeycodes.dataFakeText_1);
    var n = e.hasAttribute(editorConstantsKeycodes.dataZeroSpace);
    var i = e.hasAttribute(editorConstantsKeycodes.dataZoneContainer);
    var r = e.hasAttribute(editorConstantsKeycodes.dataVoid);
    var s = e.hasAttribute(editorConstantsKeycodes.dataEnter);
    if (t) {
      return e.getAttribute(editorConstantsKeycodes.dataFakeText_1);
    } else if (n) {
      return ((n = e.textContent) === null || n === undefined ? undefined : n.replace(RegExp("" + editorConstantsKeycodes.zeroWidthChar, "g"), "")) || "";
    } else if (i) {
      if (e.querySelectorAll("[" + editorConstantsKeycodes.dataZoneId + "]").length) {
        return " ";
      } else {
        return "";
      }
    } else if (s) {
      return (((e = e.textContent) === null || e === undefined ? undefined : e.replace(RegExp("" + editorConstantsKeycodes.zeroWidthChar, "g"), "")) || "") + "\n";
    } else if (r) {
      return "";
    } else {
      return undefined;
    }
  }
  function f(e) {
    var t;
    var n;
    var r;
    var s = d(e);
    var l = s.node;
    var a = s.offset;
    var e = c(l);
    if (!l || !e) {
      return null;
    }
    (s = document.createRange()).setStart(e, 0);
    s.setEnd(l, a);
    s = Array.from((a = s.cloneContents()).querySelectorAll("[" + editorConstantsKeycodes.dataFakeText_1 + "],[" + editorConstantsKeycodes.dataZeroSpace + "],[" + editorConstantsKeycodes.dataZoneContainer + "],[" + editorConstantsKeycodes.dataVoid + "]"));
    try {
      var u = typescriptRuntimeHelpers_1.values(s);
      var h = u.next();
      for (; !h.done; h = u.next()) {
        var f;
        var g;
        var v;
        var p;
        var y;
        var m;
        var C = h.value;
        var S = C.parentNode;
        if (S) {
          f = C.hasAttribute(editorConstantsKeycodes.dataFakeText_1);
          g = C.hasAttribute(editorConstantsKeycodes.dataZeroSpace);
          v = C.hasAttribute(editorConstantsKeycodes.dataZoneContainer);
          if (f) {
            p = C.getAttribute(editorConstantsKeycodes.dataFakeText_1);
            (y = document.createElement("span")).setAttribute(editorConstantsKeycodes.dataFakeText_1, p);
            y.textContent = p;
            S.insertBefore(y, C);
            S.removeChild(C);
          } else if (g) {
            C.textContent = ((r = C.textContent) === null || r === undefined ? undefined : r.replace(RegExp("" + editorConstantsKeycodes.zeroWidthChar, "g"), "")) || null;
          } else if (v) {
            m = C.querySelectorAll("[" + editorConstantsKeycodes.dataZoneId + "]");
            C.textContent = m.length ? " " : "";
          } else {
            S.removeChild(C);
          }
        }
      }
    } catch (e) {
      t = {
        error: e
      };
    } finally {
      try {
        if (h && !h.done && (n = u.return)) {
          n.call(u);
        }
      } finally {
        if (t) {
          throw t.error;
        }
      }
    }
    return a;
  }
  function g(e) {
    return Array.from(e.querySelectorAll("[" + editorConstantsKeycodes.dataString + "], [" + editorConstantsKeycodes.dataFakeText_1 + "], [" + editorConstantsKeycodes.dataZeroSpace + "]")).filter(function (e) {
      return !(e instanceof HTMLElement) || typeof e.dataset?.fakeText != "string" || ((e = (e = e.dataset) === null || e === undefined ? undefined : e.fakeText) === null || e === undefined ? undefined : e.length);
    }).filter(function (t) {
      t = t.parentElement && t.parentElement.closest("[" + editorConstantsKeycodes.dataFakeText_1 + "]");
      return !e.contains(t);
    }).filter(function (t) {
      t = t.parentElement && t.parentElement.closest("[" + editorConstantsKeycodes.dataZoneContainer + "]");
      return !e.contains(t);
    });
  }
  function v(e) {
    if (l(e) || !e.hasChildNodes()) {
      return [e];
    }
    if (p(e)) {
      var t = w(e);
      if (t && t.firstChild) {
        return [t.firstChild];
      }
    }
    return Array.from(e.childNodes).reduce(function (e, t) {
      e.push.apply(e, typescriptRuntimeHelpers_1.spread(v(t)));
      return e;
    }, []);
  }
  function p(e) {
    return !!y(e);
  }
  function y(e) {
    return C(e, "[" + editorConstantsKeycodes.dataFakeText_1 + "]");
  }
  function m(e) {
    return C(e, "[" + editorConstantsKeycodes.dataVoid + "]");
  }
  function C(e, t) {
    if (e &&= e instanceof HTMLElement ? e : e.parentElement) {
      t = e.closest(t);
      e = c(e);
      if (t && e && e.contains(t)) {
        return t;
      } else {
        return null;
      }
    } else {
      return null;
    }
  }
  function S(e) {
    if (e && (e instanceof Element || e instanceof DocumentFragment)) {
      (function (e) {
        e.querySelectorAll("[" + editorConstantsKeycodes.dataEnter + "]").forEach(function (e) {
          e.textContent &&= e.textContent.replace(RegExp(editorConstantsKeycodes.zeroWidthChar + "|\\n", "g"), "");
        });
      })(e);
      (function (e) {
        e.querySelectorAll("." + editorConstantsKeycodes.ignoreCollect).forEach(function (e) {
          e.parentElement.removeChild(e);
        });
      })(e);
    }
    if (e = e.textContent) {
      return e.length;
    } else {
      return 0;
    }
  }
  function E(e, t) {
    var n = e.anchorNode;
    var i = e.focusNode;
    if (!n || !i || e.rangeCount <= t) {
      return null;
    }
    i = null;
    if (browserDetectUtils.platformInfo.safari) {
      try {
        i = e.getRangeAt(t);
      } catch (e) {
        i = null;
      }
    } else if (e.getRangeAt) {
      i = e.getRangeAt(t);
    }
    if (!i) {
      (i = document.createRange()).setStart(e.anchorNode, e.anchorOffset);
      i.setEnd(e.focusNode, e.focusOffset);
    }
    return i;
  }
  function b(e, t) {
    var n;
    var i;
    var o;
    var r = document.createRange();
    var s = e.node;
    var l = e.offset;
    var e = t.node;
    var t = t.offset;
    if (s) {
      o = Math.min(l, ((n = (i = _(v(s)[0])).textContent) === null || n === undefined ? undefined : n.length) || 0);
      r.setStart(i, o);
    }
    if (e) {
      l = _(v(e)[0]);
      i = (n = p(e)) && w(e);
      e = ((e = l.textContent) === null || e === undefined ? undefined : e.length) || 0;
      o = !n || i ? Math.min(t, e) : e;
      r.setEnd(l, o);
    }
    return r;
  }
  function _(e) {
    if (browserDetectUtils.platformInfo.safari && e instanceof HTMLElement && e.tagName === "BR") {
      return e.closest("span[data-leaf]");
    } else {
      return e;
    }
  }
  function M(e) {
    return e && (e instanceof HTMLElement ? e.hasAttribute(editorConstantsKeycodes.dataZeroSpace) : (e = e.parentElement) === null || e === undefined ? undefined : e.hasAttribute(editorConstantsKeycodes.dataZeroSpace));
  }
  function I(e) {
    return !!w(e);
  }
  function w(e) {
    if (e && e instanceof Element) {
      if (e.hasAttribute(editorConstantsKeycodes.dataZeroSpace)) {
        return e;
      } else {
        return e.querySelector("[" + editorConstantsKeycodes.dataZeroSpace + "]");
      }
    } else {
      return null;
    }
  }
  function L(e) {
    if (e && e instanceof Element && e.hasAttribute("" + editorConstantsKeycodes.dataFakeText_1)) {
      return e.getAttribute("" + editorConstantsKeycodes.dataFakeText_1);
    } else {
      return null;
    }
  }
  function R(e, t, n = false) {
    var r;
    var s;
    var l;
    var a = e._getViewModel();
    var u = a.getModel(t);
    if (!u) {
      var d = t.closest("[" + editorConstantsKeycodes.dataZoneContainer + "]");
      if (!d) {
        return null;
      }
      var c = d.querySelectorAll("[" + editorConstantsKeycodes.dataNode + "],[" + editorConstantsKeycodes.dataVirtualListPlaceholder + "]");
      if (!c.length || !(d = ((h = a.getModel(d)) == null ? undefined : h.getZoneId()) || d.getAttribute("[" + editorConstantsKeycodes.dataZoneId + "]"))) {
        return null;
      }
      var h = h || e.getContentState().getZoneState(d);
      var d = (e = e.virtualListManager) === null || e === undefined ? undefined : e.getVirtualListModuleOfZone(d);
      if (d != null && d.isEnabled && (d = t.getAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder))) {
        var f = d.split("-");
        var g = (v = h == null ? undefined : h.getLine(+f[0])) !== null && v !== undefined ? v : null;
        var v = (v = h == null ? undefined : h.getLine(+f[1])) !== null && v !== undefined ? v : null;
        if (n) {
          return v;
        } else {
          return g;
        }
      }
      var p = -1;
      try {
        var y = typescriptRuntimeHelpers_1.values(Array.from(c));
        var m = y.next();
        for (; !m.done; m = y.next()) {
          var C = m.value;
          if (C.getAttribute(editorConstantsKeycodes.dataNode)) {
            p++;
          } else if (f = (l = C.getAttribute(editorConstantsKeycodes.dataVirtualListPlaceholder)) === null || l === undefined ? undefined : l.split("-")) {
            p += +f[1] - +f[0] + 1;
          }
          if (C === t) {
            var S = h == null ? undefined : h.getLine(p);
            if (!S) {
              return null;
            }
            u = S;
            break;
          }
        }
      } catch (e) {
        r = {
          error: e
        };
      } finally {
        try {
          if (m && !m.done && (s = y.return)) {
            s.call(y);
          }
        } finally {
          if (r) {
            throw r.error;
          }
        }
      }
    }
    if (Array.isArray(u)) {
      g = u[0];
      v = u[u.length - 1];
      u = n ? v : g;
    }
    return u;
  }
  function x(e, t) {
    var n;
    if (!e || !(e = e instanceof HTMLElement ? e : e.parentElement) || !e.textContent || t !== e.textContent.length) {
      return false;
    }
    for (var i = e.closest("[" + editorConstantsKeycodes.dataLeaf + "]"); (i == null || !i.nextElementSibling) && (n = i == null ? undefined : i.parentElement) !== null && n !== undefined && n.hasAttribute(editorConstantsKeycodes.dataInlineWrapper);) {
      i = i.parentElement;
    }
    if ((e = i == null ? undefined : i.nextElementSibling) === null || e === undefined) {
      return undefined;
    } else {
      return e.querySelector("[" + editorConstantsKeycodes.dataFakeText_1 + "]");
    }
  }
  function N(e, t) {
    return !!t && e.focusNode === t.startContainer && e.focusOffset === t.startOffset && e.anchorNode === t.endContainer && e.anchorOffset === t.endOffset;
  }
  require.d(exports, {
    hasFakeText: function () {
      return p;
    },
    getNextFakeText: function () {
      return x;
    },
    getFakeTextAttr: function () {
      return L;
    },
    adjustRangeOffset: function () {
      return d;
    },
    getCleanTextLen: function () {
      return S;
    },
    hasFakeTextSel: function () {
      return y;
    },
    collectEditorText: function () {
      return function e(t, n = []) {
        var i = 0;
        var r = t.childNodes.length;
        for (; i < r; i++) {
          var s;
          var l = t.childNodes[i];
          if (l.hasAttribute && l.hasAttribute(editorConstantsKeycodes.dataString) && !l.hasAttribute(editorConstantsKeycodes.dataEnter)) {
            n.push(l.textContent);
          } else if ((s = h(l)) !== undefined) {
            n.push(s);
          } else if (l.childNodes) {
            e(l, n);
          }
        }
        return n;
      };
    },
    getViewModelLine: function () {
      return R;
    },
    queryEditorNodes: function () {
      return g;
    },
    createRangeFrom: function () {
      return b;
    },
    compareSelRange: function () {
      return N;
    },
    getRangeFromSel: function () {
      return E;
    },
    cleanRangeContent: function () {
      return f;
    },
    hasZeroSpaceNode: function () {
      return I;
    },
    findZeroSpaceNode: function () {
      return w;
    },
    findClosestNode: function () {
      return c;
    },
    isVoidNode: function () {
      return m;
    },
    hasZeroSpaceAttr: function () {
      return M;
    },
    isTextNode: function () {
      return l;
    },
    collectTextNodes: function () {
      return function e(t, n = []) {
        var i = 0;
        var o = t.childNodes.length;
        for (; i < o; i++) {
          var r;
          var s = t.childNodes[i];
          if (s.nodeType === Node.TEXT_NODE) {
            n.push(s.textContent);
          } else if ((r = h(s)) !== undefined) {
            n.push(r);
          } else if (s.childNodes) {
            e(s, n);
          }
        }
        return n;
      };
    }
  });
}