// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'N0' to 'hasHorizontalScroll'
// - Renamed export 'Re' to 'isHtmlElement'
// - Renamed export 'YO' to 'hasScrollbar'
// - Renamed export 'cK' to 'isSelectableInput'
// - Renamed export 'hf' to 'isEventTargetWithin'
// - Renamed export 'kK' to 'isElementNode'
// - Renamed export 'lZ' to 'getOwnerDocument'
// - Renamed export 'pr' to 'hasVerticalScroll'
// - Renamed export 'r3' to 'containsNode'
// - Renamed export 'vZ' to 'isSvgElement'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 64757.47c6d48d.js
         * chunkId: 64757
         * moduleId: 846713
         */
module.exports = function (module, exports, require) {
  var typeofHelper = require("typeof-helper") /*id: 56852*/;
  function o(e) {
    return e !== null && typeofHelper.getType(e) === "object" && "nodeType" in e && e.nodeType === Node.ELEMENT_NODE;
  }
  function a(e) {
    if (!o(e)) {
      return false;
    }
    var r = e.ownerDocument.defaultView ?? window;
    return e instanceof r.HTMLElement;
  }
  function l(e) {
    if (!o(e)) {
      return false;
    }
    var r = e.ownerDocument.defaultView ?? window;
    return e instanceof r.SVGElement;
  }
  function s(e) {
    var n;
    if (o(e) && (n = e.ownerDocument) !== null && n !== undefined) {
      return n;
    } else {
      return document;
    }
  }
  function c(e) {
    return a(e) && e.tagName.toLowerCase() === "input" && "select" in e;
  }
  function u(e, n) {
    return !!e && (e === n || "contains" in e && e.contains(n));
  }
  function d(e, n) {
    if (!e) {
      return false;
    }
    var r = n.target;
    return !!o(r) && (n.composedPath ? n.composedPath().indexOf(e) !== -1 : u(e, r));
  }
  function f(e) {
    return e.scrollWidth > e.clientWidth;
  }
  function m(e) {
    return e.clientHeight < e.scrollHeight;
  }
  function h(e) {
    return f(e) || m(e);
  }
  require.d(exports, {
    hasHorizontalScroll: function () {
      return f;
    },
    isHtmlElement: function () {
      return a;
    },
    hasScrollbar: function () {
      return h;
    },
    isSelectableInput: function () {
      return c;
    },
    isEventTargetWithin: function () {
      return d;
    },
    isElementNode: function () {
      return o;
    },
    getOwnerDocument: function () {
      return s;
    },
    hasVerticalScroll: function () {
      return m;
    },
    containsNode: function () {
      return u;
    },
    isSvgElement: function () {
      return l;
    }
  });
}