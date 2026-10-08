// process step : FolderAndFileRename
// process step : TopologicalSinglePass
// - Renamed export 'z' to 'useControlledState'
// process step : ModuleUnpack - Unpacked via Webcrack
/**
         * chunk file: 5888.67d0be41.js
         * chunkId: 5888
         * moduleId: 80507
         */
module.exports = function (module, exports, require) {
  var iterableToArrayUtil_1_1 = require("iterable-to-array-util_1_1") /*id: 975753*/;
  var reactCoreLibraryReexport = require("react-core-library-reexport") /*id: 634663*/;
  var domElementWindowUtils = require("dom-element-window-utils") /*id: 655216*/;
  var reactRefEffectUtils = require("react-ref-effect-utils") /*id: 355121*/;
  function a(t) {
    var e = reactCoreLibraryReexport.useRef();
    reactCoreLibraryReexport.useEffect(function () {
      e.current = t;
    });
    return e.current;
  }
  function u(t, e) {
    return t === e;
  }
  function c(t, e, n = {}) {
    var c = n.onChange;
    var l = n.isEqual;
    var p = l === undefined ? u : l;
    var h = n.isControlledOverride;
    var f = reactCoreLibraryReexport.useCallback(function (t) {
      if (h !== undefined) {
        return h;
      } else {
        return t !== undefined;
      }
    }, [h]);
    var d = a(e);
    var v = a(f);
    var y = reactCoreLibraryReexport.useState(f(e) ? e : t);
    var g = iterableToArrayUtil_1_1.iterableToArray(y, 2);
    var _ = g[0];
    var m = g[1];
    var b = _;
    if (f(e)) {
      b = e;
    } else if (v != null && v(d) && !f(e)) {
      b = d;
    }
    reactRefEffectUtils.useLayoutEffect(function () {
      if (v != null && v(d) && !f(e)) {
        m(d);
      }
    }, [e, f, d, v]);
    var E = reactCoreLibraryReexport.useCallback(function (t, e) {
      var n = domElementWindowUtils.isFunction(t) ? t(b) : t;
      if (!p(b, n)) {
        m(n);
        if (domElementWindowUtils.isFunction(e)) {
          e(n);
        }
        if (domElementWindowUtils.isFunction(c)) {
          c(n);
        }
      }
    }, [p, c, b]);
    return [b, E];
  }
  require.d(exports, {
    useControlledState: function () {
      return c;
    }
  });
}