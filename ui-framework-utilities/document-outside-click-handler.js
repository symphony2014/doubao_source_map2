// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'getContextElement'
// - Renamed export 'T' to 'useOutsideClickHandler'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 57660.2fb4f2ee.js
         * chunkId: 57660
         * moduleId: 780877
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var domElementUtils = require("dom-element-utils") /*id: 431931*/;
  var resolveDomElementUtils = require("resolve-dom-element-utils") /*id: 13199*/;
  function u(e) {
    var n = resolveDomElementUtils.resolveDomElement(e);
    if (n) {
      if ("contextElement" in n) {
        return n.contextElement;
      } else if (domElementUtils.isElementNode(n)) {
        return n;
      } else {
        return null;
      }
    } else {
      return n;
    }
  }
  function c(e, n) {
    var t = n.listener;
    var a = n.elements;
    var c = n.options;
    var l = n.skipped;
    var s = l !== undefined && l;
    reactCoreLibraryReexport.useEffect(function () {
      if (!s) {
        document.addEventListener(e, n, c);
        return function () {
          document.removeEventListener(e, n, c);
        };
      }
      function n(e) {
        var n = e.target;
        if ((n instanceof HTMLElement || n instanceof SVGElement) && a.map(u).filter(domElementWindowUtils.isNotNullOrUndefined).every(function (t) {
          if (e.composedPath) {
            return e.composedPath().indexOf(t) === -1;
          } else {
            return !domElementUtils.containsElement(t, n);
          }
        })) {
          t(e);
        }
      }
    }, [a, t, c, s, e]);
  }
  require.d(exports, {
    getContextElement: function () {
      return u;
    },
    useOutsideClickHandler: function () {
      return c;
    }
  });
}