// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'L' to 'resolveDomElement'
// - Renamed export 'T' to 'useOutsideListener'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: ud_picker_panel.f0d55fc1.js
         * chunkId: 11294
         * moduleId: 791124
         */
module.exports = function (module, exports, require) {
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domTypeUtils_1 = require("dom-type-utils_1") /*id: 908793*/;
  var domElementUtils_1 = require("dom-element-utils_1") /*id: 846713*/;
  var resolveDomElementFromSelector = require("resolve-dom-element-from-selector") /*id: 331611*/;
  function c(e) {
    var t = resolveDomElementFromSelector.resolveDomElement(e);
    if (t) {
      if ("contextElement" in t) {
        return t.contextElement;
      } else if (domElementUtils_1.isElementNode(t)) {
        return t;
      } else {
        return null;
      }
    } else {
      return t;
    }
  }
  function u(e, t) {
    var n = t.listener;
    var a = t.elements;
    var u = t.options;
    var s = t.skipped;
    var l = s !== undefined && s;
    reactCoreLibraryReexport.useEffect(function () {
      if (!l) {
        document.addEventListener(e, t, u);
        return function () {
          document.removeEventListener(e, t, u);
        };
      }
      function t(e) {
        var t = e.target;
        if ((t instanceof HTMLElement || t instanceof SVGElement) && a.map(c).filter(domTypeUtils_1.isDefined).every(function (n) {
          if (e.composedPath) {
            return e.composedPath().indexOf(n) === -1;
          } else {
            return !domElementUtils_1.containsNode(n, t);
          }
        })) {
          n(e);
        }
      }
    }, [a, n, u, l, e]);
  }
  require.d(exports, {
    resolveDomElement: function () {
      return c;
    },
    useOutsideListener: function () {
      return u;
    }
  });
}