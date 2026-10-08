// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N0' to 'hasHorizontalScroll'
// - Renamed export 'Re' to 'isHTMLElement'
// - Renamed export 'YO' to 'hasScroll'
// - Renamed export 'cK' to 'isInputSelect'
// - Renamed export 'hf' to 'isEventInElement'
// - Renamed export 'kK' to 'isElementNode'
// - Renamed export 'lZ' to 'getOwnerDocument'
// - Renamed export 'pr' to 'hasVerticalScroll'
// - Renamed export 'r3' to 'containsElement'
// - Renamed export 'vZ' to 'isSVGElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 431931
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  function i(t) {
    return t !== null && typeofHelper.getType(t) === "object" && "nodeType" in t && t.nodeType === Node.ELEMENT_NODE;
  }
  function o(t) {
    if (!i(t)) {
      return false;
    }
    var n = t.ownerDocument.defaultView ?? window;
    return t instanceof n.HTMLElement;
  }
  function s(t) {
    if (!i(t)) {
      return false;
    }
    var n = t.ownerDocument.defaultView ?? window;
    return t instanceof n.SVGElement;
  }
  function a(t) {
    var e;
    if (i(t) && (e = t.ownerDocument) !== null && e !== undefined) {
      return e;
    } else {
      return document;
    }
  }
  function u(t) {
    return o(t) && t.tagName.toLowerCase() === "input" && "select" in t;
  }
  function c(t, e) {
    return !!t && (t === e || "contains" in t && t.contains(e));
  }
  function l(t, e) {
    if (!t) {
      return false;
    }
    var n = e.target;
    return !!i(n) && (e.composedPath ? e.composedPath().indexOf(t) !== -1 : c(t, n));
  }
  function p(t) {
    return t.scrollWidth > t.clientWidth;
  }
  function h(t) {
    return t.clientHeight < t.scrollHeight;
  }
  function f(t) {
    return p(t) || h(t);
  }
  require.d(exports, {
    hasHorizontalScroll: function () {
      return p;
    },
    isHTMLElement: function () {
      return o;
    },
    hasScroll: function () {
      return f;
    },
    isInputSelect: function () {
      return u;
    },
    isEventInElement: function () {
      return l;
    },
    isElementNode: function () {
      return i;
    },
    getOwnerDocument: function () {
      return a;
    },
    hasVerticalScroll: function () {
      return h;
    },
    containsElement: function () {
      return c;
    },
    isSVGElement: function () {
      return s;
    }
  });
}